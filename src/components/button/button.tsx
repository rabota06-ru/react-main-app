import { PropsWithChildren, ButtonHTMLAttributes } from 'react';
import cn from 'classnames';
import { ButtonSize, ButtonVariant } from './button.types';
import { Spinner } from 'components/spinner';
import styles from './button.module.scss';
import { getContentColorByButtonVariant } from './button.utils';

interface ButtonProps
  extends PropsWithChildren,
    Omit<Props<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, 'disabled'> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isDisabled?: boolean;
  isLoading?: boolean;
}

/**
 * Кнопка
 * @param variant вариант кнопки
 * @param size размер кнопки
 * @param isDisabled заблокирована ли кнопка
 * @param isLoading идет ли загрузка
 * @example <Button variant={ButtonVariant.Primary}> size={ButtonSize.Large} />
 */

export function Button({
  children,
  variant = ButtonVariant.Primary,
  size = ButtonSize.Large,
  isDisabled = false,
  isLoading = false,
  className,
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(styles.button, className, {
        [styles.button_Primary]: variant === ButtonVariant.Primary,
        [styles.button_Outlined]: variant === ButtonVariant.Outlined,
        [styles.button_Secondary]: variant === ButtonVariant.Secondary,
        [styles.button_Attention]: variant === ButtonVariant.Attention,
        [styles.button_LargeSize]: size === ButtonSize.Large,
        [styles.button_MediumSize]: size === ButtonSize.Medium,
        [styles.button_SmallSize]: size === ButtonSize.Small,
        [styles.button_Disabled]: isLoading || isDisabled,
      })}
      type={type}
      disabled={isLoading || isDisabled}>
      {isLoading ? <Spinner size={25} color={getContentColorByButtonVariant(variant)} /> : children}
    </button>
  );
}
