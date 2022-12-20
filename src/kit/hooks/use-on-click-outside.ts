import { useEffect, useRef } from 'react'

/**
 * Хук, который позволяет выполнять действия при клике снаружи элемента
 * @param func функция, которая будет выполняться при клике снаружи
 * @returns ref, который нужно установить на элемент, за границы которого клик должен отслеживаться
 */
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
