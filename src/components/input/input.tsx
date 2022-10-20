import { InputBase, InputBaseProps } from 'components/input-base'
import { DetailedHTMLProps, InputHTMLAttributes } from 'react'

interface InputProps
  extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    Pick<InputBaseProps, 'bottomText' | 'status' | 'label'> {}

export function Input({ bottomText, status, label, ...props }: InputProps) {
  return (
    <InputBase bottomText={bottomText} status={status} label={label}>
      <input type='text' {...props} />
    </InputBase>
  )
}
