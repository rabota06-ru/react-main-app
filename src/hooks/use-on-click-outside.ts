import { useEffect, useRef } from 'react'

export function useOnClickOutside<T extends HTMLElement>(func: () => any) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const cb = (event: MouseEvent) => {
      if (!ref.current?.contains(event.target as Node)) func()
    }

    document.addEventListener('click', cb)

    return () => {
      document.removeEventListener('click', cb)
    }
  }, [func])

  return ref
}
