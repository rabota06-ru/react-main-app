import { Spinner } from 'kit/components/spinner'
import cn from 'classnames'
import { PropsWithChildren } from 'react'
import styles from './loading-overlay.module.scss'

interface LoadingOverlayProps extends PropsWithChildren {
  isAbsolute?: boolean
  isBlurredBackground?: boolean
  spinnerSize?: number
}

/**
 * Компонент, который занимает всю ширину и всю высоту и отображается спиннер
 * @param isAbsolute абсолютное ли позиционирование у элемента. Если да, то родитель должен быть position: relative
 * @param isBlurredBackground размытый ли фон
 * @param spinnerSize размер спиннера. по дефолту 40
 */
export function LoadingOverlay({ isAbsolute = false, isBlurredBackground = false, spinnerSize = 40, children }: LoadingOverlayProps) {
  return (
    <div className={cn(styles.overlay, { [styles.overlay_Absolute]: isAbsolute, [styles.overlay_BlurredBackground]: isBlurredBackground })}>
      <Spinner size={spinnerSize} className={styles.overlaySpinner} />
      {children}
    </div>
  )
}
