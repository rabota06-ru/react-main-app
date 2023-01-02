import { FC, PropsWithChildren } from 'react'
import { CreateStoreOptions, UseCasesType } from '../core'

export type CreateContextStoreOptions<
  State extends Record<string, any>,
  Services extends Record<string, object>,
  UseCases extends UseCasesType
> = CreateStoreOptions<State, Services, UseCases>

export type UseSelectorCallback<State extends Record<string, any>, Value> = (state: State) => Value

export type ContextStore<State extends Record<string, any>, Services extends Record<string, object>, UseCases extends UseCasesType> = [
  FC<PropsWithChildren<{ services: Services }>>,
  <Value>(cb: (state: State) => Value) => Value,
  () => UseCases
]
