import { useEffect, useState } from 'react'

export interface Values<T> {
  xs: T
  sm?: T
  md?: T
  lg?: T
  xl?: T
}

const mediaPoints = {
  lg: 1199,
  md: 991,
  sm: 767,
  xs: 575,
}

function getResultSize() {
  let resultSize: keyof Values<unknown>
  const currentWidth = document.documentElement.clientWidth

  if (currentWidth <= mediaPoints.xs) resultSize = 'xs'
  else if (currentWidth <= mediaPoints.sm) resultSize = 'sm'
  else if (currentWidth <= mediaPoints.md) resultSize = 'md'
  else if (currentWidth <= mediaPoints.lg) resultSize = 'lg'
  else resultSize = 'xl'

  return resultSize
}

function getValue<T>(size: keyof Values<unknown>, values: Values<T>) {
  const { xs } = values

  function iff(key: keyof Values<unknown>, value: T) {
    return Object.hasOwn(values, key) ? (values[key] as T) : value
  }

  switch (size) {
    case 'xs':
      return xs
    case 'sm':
      return iff('sm', xs)
    case 'md':
      return iff('md', iff('sm', xs))
    case 'lg':
      return iff('lg', iff('md', iff('sm', xs)))
    case 'xl':
      return iff('xl', iff('lg', iff('md', iff('sm', xs))))
    default:
      return xs
  }
}

const handlers: ((size: keyof Values<unknown>) => void)[] = []
let currentSize: keyof Values<unknown> = getResultSize()

window.addEventListener('resize', () => {
  const resultSize = getResultSize()

  if (resultSize !== currentSize) {
    currentSize = resultSize
    handlers.forEach(handler => handler(currentSize))
  }
})

export function useMediaValue<T>(values: Values<T>) {
  const [value, setValue] = useState(getValue(getResultSize(), values))

  useEffect(() => {
    const handler: typeof handlers[number] = size => setValue(getValue(size, values))

    handlers.push(handler)

    return () => {
      const index = handlers.findIndex(h => h === handler)
      if (index !== -1) {
        handlers.splice(index, 1)
      }
    }
  }, [values])

  return value
}
