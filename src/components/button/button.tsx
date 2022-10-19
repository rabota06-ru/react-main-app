import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'
import styles from './button.module.scss'
import { ButtonVariant } from './button.types'

interface ButtonProps extends Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, 'disabled'> {
  variant?: ButtonVariant
  isShadow?: boolean
  isLoading?: boolean
  isDisabled?: boolean
}

export function Button({ variant, isShadow, isLoading, ...props }: ButtonProps) {
  return <button className={styles.button} type='button' {...props} />
}
