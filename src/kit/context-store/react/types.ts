import { FC, PropsWithChildren } from 'react'
import { CreateStoreOptions, UseCasesType } from '../core'

export type CreateContextStoreOptions<
  State extends Record<string, any>,
  Services extends Record<string, object>,
  UseCases extends UseCasesType,
  Params extends Record<string, any>
> = CreateStoreOptions<State, Services, UseCases, Params>

export type UseSelectorCallback<State extends Record<string, any>, Value> = (state: State) => Value

export interface ProviderProps<Services extends Record<string, object>, Params extends Record<string, any>> extends PropsWithChildren {
  services: Services
  params: Params
}

export type ContextStore<
  State extends Record<string, any>,
  Services extends Record<string, object>,
  UseCases extends UseCasesType,
  Params extends Record<string, any>
> = [FC<ProviderProps<Services, Params>>, <Value>(cb: (state: State) => Value) => Value, () => UseCases]
