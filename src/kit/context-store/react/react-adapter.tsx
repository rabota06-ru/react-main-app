import { objectKeys } from 'kit/utils'
import { Context, createContext, useContext, useEffect, useMemo, useState } from 'react'
import { Store, createStore, UseCasesType } from '../core'
import { ContextStore, CreateContextStoreOptions, ProviderProps, UseSelectorCallback } from './types'

export function createContextStore<
  State extends Record<string, any>,
  Services extends Record<string, object>,
  UseCases extends UseCasesType,
  Params extends Record<string, any>
>(options: CreateContextStoreOptions<State, Services, UseCases, Params>): ContextStore<State, Services, UseCases, Params> {
  let useCases: UseCases = objectKeys(options.useCases).reduce((uc, key) => {
    uc[key] = (() => {}) as UseCases[keyof UseCases]
    return uc
  }, {} as UseCases)
  const Context = createContext<Pick<Store<State, UseCases>, 'subscribe' | 'unsubscribe'> & { getUseCases: () => UseCases }>({
    subscribe: () => {},
    unsubscribe: () => {},
    getUseCases: () => useCases,
  })

  function Provider({ services, params, children }: ProviderProps<Services, Params>) {
    const setupStore = useMemo(() => createStore<State, UseCases, Services, Params>(options), [])
    const store = useMemo(() => {
      const store = setupStore(services, params)
      useCases = store.useCases
      return store
    }, [services, setupStore, params])
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

  return [Provider, buildUseSelector(options.state, Context), buildUseUseCases(Context)]
}

function buildUseSelector<State extends Record<string, any>, UseCases extends UseCasesType>(
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

function buildUseUseCases<State extends Record<string, any>, UseCases extends UseCasesType>(
  context: Context<Pick<Store<State, UseCases>, 'subscribe' | 'unsubscribe'> & { getUseCases: () => UseCases }>
) {
  return function useUseCases() {
    const { getUseCases } = useContext(context)

    return getUseCases()
  }
}
