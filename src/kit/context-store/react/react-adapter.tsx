import { Context, createContext, useContext, useEffect, useMemo, useState } from 'react'
import { Store, CreateStoreReturnType } from '../core'
import { CreateContextStoreReturnType, ProviderProps, UseSelectorCallback } from './types'

export function createContextStore<
  State extends Record<string, any>,
  Services extends Record<string, object>,
  UseCases extends Record<string, (...params: any) => void>,
  Params extends Record<string, any>
>(storeCreator: CreateStoreReturnType<State, Services, UseCases, Params>): CreateContextStoreReturnType<State, Services, UseCases, Params> {
  const Context = createContext<Pick<Store<State, UseCases>, 'subscribe' | 'unsubscribe'> & { getUseCases: () => UseCases }>({
    subscribe: () => {},
    unsubscribe: () => {},
    getUseCases: () => ({} as UseCases),
  })
  function Provider({ services, params, children }: ProviderProps<Services, Params>) {
    const store = useMemo(() => {
      return storeCreator.setupStore(services, params)
    }, [services, params])
    const contextValue = useMemo(
      () => ({ subscribe: store.subscribe, unsubscribe: store.unsubscribe, getUseCases: () => store.useCases }),
      [store.subscribe, store.unsubscribe, store.useCases]
    )

    useEffect(() => {
      store.init()

      return () => {
        store.cleanUp()
      }
    }, [])

    return <Context.Provider value={contextValue}>{children}</Context.Provider>
  }

  return [Provider, buildUseSelector(storeCreator.providedOptions.state, Context), buildUseUseCases(Context)]
}

function buildUseSelector<State extends Record<string, any>, UseCases extends Record<string, (...params: any) => void>>(
  defaultState: State,
  context: Context<Pick<Store<State, UseCases>, 'subscribe' | 'unsubscribe'> & { getUseCases: () => UseCases }>
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

function buildUseUseCases<State extends Record<string, any>, UseCases extends Record<string, (...params: any) => void>>(
  context: Context<Pick<Store<State, UseCases>, 'subscribe' | 'unsubscribe'> & { getUseCases: () => UseCases }>
) {
  return function useUseCases() {
    const { getUseCases } = useContext(context)

    return getUseCases()
  }
}
