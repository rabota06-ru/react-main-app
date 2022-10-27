import { ButtonHTMLAttributes } from 'react'
import cn from 'classnames'
import { ButtonVariant } from './button.types'
import styles from './button.module.scss'

interface ButtonProps extends Omit<Props<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, 'disabled'> {
  variant?: ButtonVariant
  isShadow?: boolean
  isLoading?: boolean
  isDisabled?: boolean
}

export function Button({ variant = ButtonVariant.Primary, isShadow = false, isLoading, isDisabled = false, ...props }: ButtonProps) {
  return (
    <button
      className={cn(styles.button_Primary, {
        [styles.button_Outline]: variant === ButtonVariant.Variant,
        [styles.button_PrimaryIsShadow]: isShadow,
      })}
      type='button'
      disabled={isDisabled}
      {...props}
    >
      Создать резюме
    </button>
  )
}
