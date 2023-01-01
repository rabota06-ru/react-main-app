import { Context, createContext, PropsWithChildren, useContext, useEffect, useMemo, useState } from 'react'
import { Store, createStore, UseCasesType } from '../core'
import { ContextStore, CreateContextStoreOptions, UseSelectorCallback } from './types'

export function createContextStore<
  State extends Record<string, any>,
  Services extends Record<string, object>,
  UseCases extends UseCasesType
>(options: CreateContextStoreOptions<State, Services, UseCases>) {
  return function (services: Services): ContextStore<State, UseCases> {
    const store = createStore<State, UseCases, Services>(options)(services)
    const Context = createContext<Pick<Store<State, UseCases>, 'subscribe' | 'unsubscribe'>>({
      subscribe: store.subscribe,
      unsubscribe: store.unsubscribe,
    })
    const contextValue = useMemo(
      () => ({ subscribe: store.subscribe, unsubscribe: store.unsubscribe }),
      [store.subscribe, store.unsubscribe]
    )

    function Provider({ children }: PropsWithChildren) {
      useEffect(() => {
        store.init()

        return () => {
          store.cleanUp()
        }
      }, [])

      return <Context.Provider value={contextValue}>{children}</Context.Provider>
    }

    return [Provider, buildUseSelector(options.state, Context), store.useCases]
  }
}

function buildUseSelector<State extends Record<string, any>, UseCases extends UseCasesType>(
  defaultState: State,
  context: Context<Pick<Store<State, UseCases>, 'subscribe' | 'unsubscribe'>>
) {
  return function useSelector<Value>(cb: UseSelectorCallback<State, Value>) {
    const { subscribe, unsubscribe } = useContext(context)
    const [value, setValue] = useState<Value>(cb(defaultState))

    useEffect(() => {
      const handler = (state: State) => {
        const potentialState = cb(state)
        if (potentialState !== value) setValue(potentialState)
      }
      subscribe(handler)

      return () => {
        unsubscribe(handler)
      }
    }, [value])

    return value
  }
}
