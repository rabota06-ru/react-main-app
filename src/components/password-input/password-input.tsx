import { Input, InputProps } from 'components/input'

interface PasswordInputProps extends Omit<InputProps, 'type'> {}

export function PasswordInput(props: PasswordInputProps) {
  return <Input {...props} />
}
