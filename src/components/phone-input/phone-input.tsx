import { Input, InputProps } from 'components/input'
import { useRussianPhoneNumber } from './use-russian-phone-number'

interface PhoneInputProps extends Omit<InputProps, 'onChange'> {
  onChange: (clear: string, dirty: string) => void
}

export function PhoneInput({ onChange, ...props }: PhoneInputProps) {
  const inputRef = useRussianPhoneNumber()

  return <Input ref={inputRef} {...props} />
}
