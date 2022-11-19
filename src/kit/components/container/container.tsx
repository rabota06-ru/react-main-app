import { HTMLAttributes } from 'react'
import cn from 'classnames'
import styles from './container.module.scss'

interface ContainerProps extends Props<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export function Container({ className, ...props }: ContainerProps) {
  return <div {...props} className={cn(styles.container, className)} />
}
