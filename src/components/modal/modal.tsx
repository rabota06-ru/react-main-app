import cn from 'classnames';
import { Card } from 'components/card';
import { PropsWithChildren, HTMLAttributes } from 'react';
import styles from './modal.module.scss';

interface ModalProps
  extends PropsWithChildren,
    Props<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  isShown: boolean;
  onClose: () => void;
}

/**
 * Модальное окно
 * @param isShown флаг показа/скрытия модального окна
 * @param onClose функция, которая меняет isShown на false
 * @param children контент модального окна
 * @example <Modal isShown={isShown} onClose={() => setIsShown(false)}>контент</Modal>
 */

export function Modal({ isShown, onClose, children, className, ...props }: ModalProps) {
  return isShown ? (
    <div className={styles.modal}>
      <div onClick={onClose} className={styles.modalOverlay}></div>
      <Card {...props} className={cn(styles.modalContent, className)}>
        {children}
      </Card>
    </div>
  ) : null;
}
