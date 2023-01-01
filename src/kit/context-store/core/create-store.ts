import produce from 'immer'
import { objectKeys } from 'kit/utils'
import { Store, CreateStoreOptions, UseCasesType } from './types'

export function createStore<State extends Record<string, any>, UseCases extends UseCasesType, Services extends Record<string, any>>(
  options: CreateStoreOptions<State, Services, UseCases>
) {
  return (services: Services): Store<State, UseCases> => {
    const listeners: ((state: State) => void)[] = []
    let { state } = options

    const wrappedUseCases = objectKeys(options.useCases).reduce((useCases, key) => {
      useCases[key as keyof typeof useCases] = ((...params: Parameters<UseCases[typeof key]>) => {
        state = produce(state, draftState => {
          options.useCases[key](...params)(draftState as State, services)
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
        }),
      cleanUp: () =>
        options.onCleanUp?.({
          state,
          services,
          useCases: wrappedUseCases,
        }),
    }
  }
}
