import React, { PropsWithChildren } from 'react'
import styles from './modal.module.scss'

interface ModalProps extends PropsWithChildren {
  isShown: boolean
  onClose: () => void
}

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
