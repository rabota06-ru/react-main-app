export interface OnInitOptions<State extends Record<string, any>, Services extends Record<string, object>, UseCases extends UseCasesType> {
  state: State
  services: Services
  useCases: UseCases
}

export interface OnCleanUpOptions<
  State extends Record<string, any>,
  Services extends Record<string, object>,
  UseCases extends UseCasesType
> {
  state: State
  services: Services
  useCases: UseCases
}

export interface CreateStoreOptions<
  State extends Record<string, any>,
  Services extends Record<string, object>,
  UseCases extends UseCasesType
> {
  state: State
  onInit?: (options: OnInitOptions<State, Services, UseCases>) => void
  onCleanUp?: (options: OnCleanUpOptions<State, Services, UseCases>) => void
  useCases: InnerUseCases<State, Services, UseCases>
}

export interface Store<State extends Record<string, any>, UseCases extends UseCasesType> {
  subscribe: (cb: (state: State) => void) => void
  unsubscribe: (cb: (state: State) => void) => void
  useCases: UseCases
  init: VoidFunction
  cleanUp: VoidFunction
}

export type UseCasesType = Record<string, (...params: any) => void>

export type InnerUseCases<State extends Record<string, any>, Services extends Record<string, object>, UseCases extends UseCasesType> = {
  [Key in keyof UseCases]: (...params: Parameters<UseCases[Key]>) => (state: State, services: Services) => void
}
