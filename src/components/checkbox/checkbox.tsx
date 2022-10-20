import { InputHTMLAttributes } from 'react'
import { Props } from 'types/common'

interface CheckboxProps extends Omit<Props<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'type'> {}

export function Checkbox(props: CheckboxProps) {
  return <input type='checkbox' {...props} />
}
