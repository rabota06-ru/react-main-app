import { ButtonHTMLAttributes } from 'react';
import CloseButtonImage from 'assets/images/close-button.svg';
import cn from 'classnames';
import styles from './close-button.module.scss';

interface CloseButtonProps
  extends Props<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  onClick: () => void;
}

export function CloseButton({ onClick, className, ...props }: CloseButtonProps) {
  return (
    <button {...props} onClick={onClick} className={cn(styles.button, className)}>
      <CloseButtonImage />
    </button>
  );
}
