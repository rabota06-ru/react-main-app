import { PropsWithChildren } from 'react'
import styles from './modal.module.scss'

interface ModalProps extends PropsWithChildren {
  isShown: boolean
  onClose: () => void
}
/**
 * Модальное окно
 * @param isShown флаг показа/скрытия модального окна
 * @param onClose функция, которая меняет isShown на false
 * @param children контент модального окна
 * @example <Modal isShown={isShown} onClose={() => setIsShown(false)}>контент</Modal>
 */
export function Modal({ isShown, onClose, children }: ModalProps) {
  const handleOverlayClick = () => {
    onClose()
  }

  return isShown ? (
    <div className={styles.container}>
      <div onClick={handleOverlayClick} className={styles.overlay} />
      <div className={styles.modal}>{children}</div>
    </div>
  ) : null
}
