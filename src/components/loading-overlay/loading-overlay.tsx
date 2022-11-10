import { Spinner } from 'components/spinner'
import cn from 'classnames'
import styles from './loading-overlay.module.scss'

interface LoadingOverlayProps {
  isAbsolute?: boolean
}

/**
 * Компонент, который занимает всю ширину и всю высоту и отображается спиннер
 * @param isAbsolute абсолютное ли позиционирование у элемента. Если да, то родитель должен быть position: relative
 */
export function LoadingOverlay({ isAbsolute = false }: LoadingOverlayProps) {
  return (
    <div className={cn(styles.overlay, { [styles.overlay_Absolute]: isAbsolute })}>
      <Spinner size={40} />
    </div>
  )
}
