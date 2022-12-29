type Entries<T> = {
  [K in keyof T]: [K, T[K]]
}[keyof T][]

export function objectEntries<K extends Record<any, any>>(obj: K): Entries<K> {
  return Object.entries(obj) as any
}
