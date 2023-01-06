import { FC, PropsWithChildren } from 'react'
import { CreateStoreOptions } from '../core'

export type CreateContextStoreOptions<
  State extends Record<string, any>,
  Services extends Record<string, object>,
  UseCases extends Record<string, (...params: any) => void>,
  Params extends Record<string, any>
> = CreateStoreOptions<State, Services, UseCases, Params>

export type CreateContextStoreReturnType<
  State extends Record<string, any>,
  Services extends Record<string, object>,
  UseCases extends Record<string, (...params: any) => void>,
  Params extends Record<string, any>
> = [FC<ProviderProps<Services, Params>>, <Value>(select: (state: State) => Value) => Value, () => UseCases]

export type UseSelectorCallback<State extends Record<string, any>, Value> = (state: State) => Value

export interface ProviderProps<Services extends Record<string, object>, Params extends Record<string, any>> extends PropsWithChildren {
  services: Services
  params: Params
}
