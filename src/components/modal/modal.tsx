import { HTMLAttributes, PropsWithChildren } from 'react'
import cn from 'classnames'
import styles from './modal.module.scss'

interface ModalProps extends PropsWithChildren {
  isShown: boolean
  onClose: () => void
  modalProps?: Props<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
}
/**
 * Модальное окно
 * @param isShown флаг показа/скрытия модального окна
 * @param onClose функция, которая меняет isShown на false
 * @param children контент модального окна
 * @param modalProps пропсы модального окна
 * @example <Modal isShown={isShown} onClose={() => setIsShown(false)}>контент</Modal>
 */
export function Modal({ isShown, onClose, modalProps, children }: ModalProps) {
  const handleOverlayClick = () => {
    onClose()
  }

  return isShown ? (
    <div className={styles.container}>
      <div onClick={handleOverlayClick} className={styles.overlay} />
      <div {...modalProps} className={cn(styles.modal, modalProps?.className)}>
        {children}
      </div>
    </div>
  ) : null
}
