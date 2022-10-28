import { ButtonHTMLAttributes } from 'react'
import { Spinner } from 'components/spinner'
import cn from 'classnames'
import { ButtonSize, ButtonVariant } from './button.types'
import styles from './button.module.scss'

interface ButtonProps extends Omit<Props<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, 'disabled'> {
  variant?: ButtonVariant
  size?: ButtonSize
  isShadow?: boolean
  isLoading?: boolean
  isDisabled?: boolean
}

export function Button({
  variant = ButtonVariant.Primary,
  size = ButtonSize.Large,
  isDisabled = false,
  isLoading = true,
  isShadow = false,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(styles.button, {
        [styles.button_PrimaryVariant]: variant === ButtonVariant.Primary,
        [styles.button_OutlineVariant]: variant === ButtonVariant.Outline,
        [styles.button_LargeHeight]: size === ButtonSize.Large,
        [styles.button_SmallHeight]: size === ButtonSize.Small,
        [styles.button_Disabled]: isLoading || isDisabled,
        [styles.button_Shadow]: isShadow,
      })}
      type='button'
      {...props}
    >
      Создать резюме
      {isLoading && <Spinner className={cn(styles.buttonSpinner)} size={25} thickness={2} />}
    </button>
  )
}
