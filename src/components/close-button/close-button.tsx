import { ButtonHTMLAttributes } from 'react'
import cn from 'classnames'
import styles from './close-button.module.scss'

interface CloseButtonProps extends Omit<Props<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, 'type'> {}

/**
 * Кнопка закрытия. Обычно используется в модалках
 */
export function CloseButton({ className, ...props }: CloseButtonProps) {
  return <button className={cn(styles.button, className)} type='button' {...props} />
}
