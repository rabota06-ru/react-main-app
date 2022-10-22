import { InputBase, InputBaseProps, InputSize } from 'components/input-base'
import { FC, forwardRef, InputHTMLAttributes } from 'react'
import cn from 'classnames'
import { Spinner } from 'components/spinner'
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
        isDisabled={isDisabled || isLoading}
        wrapperProps={{ className: cn(styles.inputBaseWrapper, { [styles.inputBaseWrapper_RightIconProvided]: RightIcon || isLoading }) }}
      >
        <input
          {...props}
          ref={inputRef}
          type='text'
          disabled={isDisabled || isLoading}
          className={cn(styles.input, className, {
            [styles.input_RightIconProvidedDefaultSize]: (RightIcon || isLoading) && size === InputSize.Default,
            [styles.input_RightIconProvidedLargeSize]: (RightIcon || isLoading) && size === InputSize.Large,
          })}
        />
        {(RightIcon || isLoading) && (
          <div className={styles.inputRightIconWrapper}>
            {RightIcon && !isLoading && <RightIcon />}
            {isLoading && <Spinner size={25} thickness={4} />}
          </div>
        )}
      </InputBase>
    )
  }
)
