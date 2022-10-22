import { InputBase, InputBaseProps, InputSize } from 'components/input-base'
import { FC, forwardRef, InputHTMLAttributes } from 'react'
import cn from 'classnames'
import styles from './input.module.scss'

export interface InputProps
  extends Omit<Props<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'size' | 'type' | 'children'>,
    Omit<InputBaseProps, 'children'> {
  isDisabled?: boolean
  isLoading?: boolean
  RightIcon?: FC
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ bottomText, status, size = InputSize.Default, label, isDisabled, isLoading, className, RightIcon, ...props }, inputRef) => {
    return (
      <InputBase
        bottomText={bottomText}
        status={status}
        size={size}
        label={label}
        isDisabled={isDisabled}
        wrapperProps={{ className: cn(styles.inputBaseWrapper, { [styles.inputBaseWrapper_RightIconProvided]: !!RightIcon }) }}
      >
        <input
          {...props}
          ref={inputRef}
          type='text'
          className={cn(styles.input, className, {
            [styles.input_RightIconProvidedDefaultSize]: !!RightIcon && size === InputSize.Default,
            [styles.input_RightIconProvidedLargeSize]: !!RightIcon && size === InputSize.Large,
          })}
        />
        {RightIcon && (
          <div className={styles.inputRightIconWrapper}>
            <RightIcon />
          </div>
        )}
      </InputBase>
    )
  }
)
