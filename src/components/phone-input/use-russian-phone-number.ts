import { useState, ChangeEvent, useRef, useEffect, useCallback } from 'react'

const russianPhoneMask = '+7 (---) --- -- --'
const russianPhoneMaskRegExp = /\+7 \([\d|-][\d|-][\d|-]\) [\d|-][\d|-][\d|-] [\d|-][\d|-] [\d|-][\d|-]/

interface Options {
  onChange?: (options: { dirty: string; clear: string }) => void
  value?: string
}

export function useRussianPhoneNumber({ onChange: onChangeArgument, value }: Options) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [input, setInput] = useState({ value: value ? fillMaskWithClearValue(value) : russianPhoneMask })

  function getClearValue(value: string) {
    return value.replace(/[() -]/g, '')
  }

  function fillMaskWithClearValue(value: string) {
    let result = russianPhoneMask
    value
      .slice(2)
      .split('')
      .forEach(symbol => {
        result = result.replace('-', symbol)
      })

    return result
  }

  function checkIsValueCorrect(value: string) {
    return russianPhoneMaskRegExp.test(fillMaskWithClearValue(getClearValue(value)))
  }

  const setActualCarriagePosition = useCallback(() => {
    const index = input.value.split('').findIndex(symbol => symbol === '-')
    inputRef.current?.setSelectionRange(index, index)
  }, [input])

  function onChange(event: ChangeEvent<HTMLInputElement>) {
    let { value } = input
    if (event.target.value.length === russianPhoneMask.length - 1) {
      value = fillMaskWithClearValue(getClearValue(input.value).slice(0, -1))
    } else if (checkIsValueCorrect(event.target.value)) {
      value = fillMaskWithClearValue(getClearValue(event.target.value))
    }

    setInput({ value })
  }

  useEffect(setActualCarriagePosition, [input, setActualCarriagePosition])

  useEffect(() => onChangeArgument?.({ dirty: input.value, clear: getClearValue(input.value) }), [onChangeArgument, input.value])

  useEffect(() => {
    const element = inputRef.current
    if (element) {
      element.addEventListener('focus', setActualCarriagePosition)
      return () => {
        element.removeEventListener('focus', setActualCarriagePosition)
      }
    }
  }, [setActualCarriagePosition])

  return {
    value: input.value,
    onChange,
    ref: inputRef,
  }
}
