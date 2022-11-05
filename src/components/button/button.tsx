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

/**
 * @param variant вариант кнопки
 * @param size размер кнопки
 * @param isDisabled заблокирована ли кнопка
 * @param isLoading флаг загрузки. Если true, то отображается спиннер и кнопка заблокирована
 * @param isShadow имеется ли тень на кнопки
 * @example <Button variant=ButtonVariant.Primary, size=ButtonSize.Large />
 */

export function Button({
  variant = ButtonVariant.Primary,
  size = ButtonSize.Medium,
  isDisabled = false,
  isLoading = false,
  isShadow = true,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(styles.button, {
        [styles.button_PrimaryVariant]: variant === ButtonVariant.Primary,
        [styles.button_OutlineVariant]: variant === ButtonVariant.Outline,
        [styles.button_LargeSize]: size === ButtonSize.Large,
        [styles.button_MediumSize]: size === ButtonSize.Medium,
        [styles.button_SmallSize]: size === ButtonSize.Small,
        [styles.button_ExtraSmallSize]: size === ButtonSize.ExtraSmall,
        [styles.button_Disabled]: isLoading || isDisabled,
        [styles.button_Shadow]: isShadow,
      })}
      type='button'
      {...props}
    >
      {children}
      {isLoading && <Spinner className={cn(styles.buttonSpinner)} size={25} thickness={2} />}
    </button>
  )
}
