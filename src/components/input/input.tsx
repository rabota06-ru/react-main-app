import { InputBase, InputBaseProps } from 'components/input-base'
import { FC, forwardRef, InputHTMLAttributes } from 'react'

export interface InputProps extends Omit<Props<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'size'>, InputBaseProps {
  isDisabled?: boolean
  isLoading?: boolean
  renderRightIcon?: FC
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ bottomText, status, size, label, isDisabled, isLoading, ...props }, inputRef) => {
    return (
      <InputBase bottomText={bottomText} status={status} size={size} label={label} isDisabled={isDisabled}>
        <input ref={inputRef} type='text' {...props} />
      </InputBase>
    )
  }
)
