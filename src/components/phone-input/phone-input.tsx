import { Input, InputProps } from 'components/input'
import { useRef } from 'react'

interface PhoneInputProps extends Omit<InputProps, 'onChange'> {
  onChange: (clear: string, dirty: string) => void
}

export function PhoneInput({ onChange, ...props }: PhoneInputProps) {
  const inputRef = useRef<HTMLInputElement>(null)

  return <Input ref={inputRef} {...props} />
}
