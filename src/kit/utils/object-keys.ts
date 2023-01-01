export function objectKeys<T extends string | number | symbol>(value: Record<T, any>) {
  return Object.keys(value) as T[]
}
