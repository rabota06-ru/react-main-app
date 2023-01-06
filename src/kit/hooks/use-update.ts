import { useEffect, useRef } from 'react'

export function useUpdate(...[callback, deps]: Parameters<typeof useEffect>) {
  const isInitialMount = useRef(true)

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false
    } else {
      callback()
    }
  }, deps)
}
