import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'
import cn from 'classnames'
import { ButtonVariant } from './button.types'
import styles from './button.module.scss'

interface ButtonProps extends Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, 'disabled'> {
  variant?: ButtonVariant
  isShadow?: boolean
  isLoading?: boolean
  isDisabled?: boolean
}

export function Button({ variant = ButtonVariant.Primary, isShadow, isLoading, ...props }: ButtonProps) {
  return <button className={cn(styles.button)} type='button' {...props} />
}
