export interface OnInitOptions<
  State extends Record<string, any>,
  Services extends Record<string, object>,
  UseCases extends Record<string, (...params: any) => void>,
  Params extends Record<string, any>
> {
  state: State
  services: Services
  useCases: UseCases
  params: Params
}

export interface OnCleanUpOptions<
  State extends Record<string, any>,
  Services extends Record<string, object>,
  UseCases extends Record<string, (...params: any) => void>,
  Params extends Record<string, any>
> {
  state: State
  services: Services
  useCases: UseCases
  params: Params
}

export interface CreateStoreOptions<
  State extends Record<string, any>,
  Services extends Record<string, object>,
  UseCases extends Record<string, (...params: any) => void>,
  Params extends Record<string, any>
> {
  state: State
  onInit?: (options: OnInitOptions<State, Services, UseCases, Params>) => void
  onCleanUp?: (options: OnCleanUpOptions<State, Services, UseCases, Params>) => void
  useCases: InnerUseCases<State, Services, UseCases, Params>
}

export interface CreateStoreReturnType<
  State extends Record<string, any>,
  Services extends Record<string, object>,
  UseCases extends Record<string, (...params: any) => void>,
  Params extends Record<string, any>
> {
  providedOptions: CreateStoreOptions<State, Services, UseCases, Params>
  setupStore: (services: Services, params: Params) => Store<State, UseCases>
}

export interface Store<State extends Record<string, any>, UseCases extends Record<string, (...params: any) => void>> {
  subscribe: (cb: (state: State) => void) => void
  unsubscribe: (cb: (state: State) => void) => void
  useCases: UseCases
  init: VoidFunction
  cleanUp: VoidFunction
}

export type InnerUseCases<
  State extends Record<string, any>,
  Services extends Record<string, object>,
  UseCases extends Record<string, (...params: any) => void>,
  Params extends Record<string, any>
> = {
  [Key in keyof UseCases]: (...params: Parameters<UseCases[Key]>) => (state: State, services: Services, params: Params) => void
}
