import { InputBase, InputBaseProps } from 'components/input-base'
import { forwardRef, InputHTMLAttributes } from 'react'
import { Props } from 'types/common'

export interface InputProps
  extends Props<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    Pick<InputBaseProps, 'bottomText' | 'status' | 'label'> {
  isDisabled?: boolean
  isLoading?: boolean
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ bottomText, status, label, isDisabled, isLoading, ...props }, inputRef) => {
    return (
      <InputBase bottomText={bottomText} status={status} label={label} isDisabled={isDisabled}>
        <input ref={inputRef} type='text' {...props} />
      </InputBase>
    )
  }
)
