import { InputHTMLAttributes } from 'react'

interface CheckboxProps extends Omit<Props<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'type'> {}

export function Checkbox(props: CheckboxProps) {
  return <input type='checkbox' {...props} />
}
