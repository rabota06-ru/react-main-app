import { InputBase, InputBaseProps } from 'components/input-base'
import { DetailedHTMLProps, InputHTMLAttributes } from 'react'

interface InputProps
  extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    Pick<InputBaseProps, 'bottomText' | 'status' | 'label'> {
  isDisabled?: boolean
  isLoading?: boolean
}

export function Input({ bottomText, status, label, isDisabled, isLoading, ...props }: InputProps) {
  return (
    <InputBase bottomText={bottomText} status={status} label={label} isDisabled={isDisabled}>
      <input type='text' {...props} />
    </InputBase>
  )
}
