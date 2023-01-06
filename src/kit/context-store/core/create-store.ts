import produce from 'immer'
import { objectKeys } from 'kit/utils'
import { Store, CreateStoreOptions, CreateStoreReturnType } from './types'

export function createStore<
  State extends Record<string, any>,
  UseCases extends Record<string, (...params: any) => void>,
  Services extends Record<string, any>,
  Params extends Record<string, any>
>(options: CreateStoreOptions<State, Services, UseCases, Params>): CreateStoreReturnType<State, Services, UseCases, Params> {
  return {
    providedOptions: options,
    setupStore: (services: Services, params: Params): Store<State, UseCases> => {
      const listeners: ((state: State) => void)[] = []
      let { state } = options

      const wrappedUseCases = objectKeys(options.useCases).reduce((useCases, key) => {
        useCases[key as keyof typeof useCases] = ((...useCaseParams: Parameters<UseCases[typeof key]>) => {
          state = produce(state, draftState => {
            options.useCases[key](...useCaseParams)(draftState as State, services, params)
          })
          listeners.forEach(cb => cb(state))
        }) as UseCases[keyof UseCases]

        return useCases
      }, {} as UseCases)

      return {
        subscribe: cb => listeners.push(cb),
        unsubscribe: cb => {
          const index = listeners.findIndex(c => c === cb)
          if (index !== -1) listeners.splice(index, 1)
        },
        useCases: wrappedUseCases,
        init: () =>
          options.onInit?.({
            state,
            services,
            useCases: wrappedUseCases,
            params,
          }),
        cleanUp: () =>
          options.onCleanUp?.({
            state,
            services,
            useCases: wrappedUseCases,
            params,
          }),
      }
    },
  }
}

export const store = createStore
