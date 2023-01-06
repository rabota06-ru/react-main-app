import { useRef } from 'react'

export function useTrigger(): [(cb: VoidFunction) => void, () => void] {
  const callableFunction = useRef<VoidFunction>(() => {})

  function trigger() {
    if (callableFunction) callableFunction.current()
  }

  function setCallableFunction(cb: VoidFunction) {
    callableFunction.current = cb
  }

  return [setCallableFunction, trigger]
}
