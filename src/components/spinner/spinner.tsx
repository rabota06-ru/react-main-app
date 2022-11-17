import { Color } from 'types';
import { getColorVariable } from 'utils/get-color';
import styles from './spinner.module.scss';

interface SpinnerProps {
  size: number;
  color?: Color;
}

/**
 * Спиннер
 * @param size размер спиннера
 * @param color цвет спиннера
 * @example <Spinner size={25} color={Color.Color.ButtonSecondaryTextColor} />
 */

export function Spinner({ size, color = Color.ButtonSecondaryTextColor }: SpinnerProps) {
  return (
    <div style={{ width: size, height: size }} className={styles.spinner}>
      <div
        style={{
          width: size / 2,
          height: size / 2,
          borderWidth: size / 8,
          borderColor: `transparent ${getColorVariable(color)} ${getColorVariable(
            color,
          )} ${getColorVariable(color)}`,
        }}
        className={styles.spinnerInner}></div>
    </div>
  );
}
