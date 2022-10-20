import { Color } from 'types'
import { getColorVariable } from 'utils/get-color'
import styles from './spinner.module.scss'

interface SpinnerProps {
  size: number
  thickness?: number
  color?: Color
}
/**
 * Спиннер
 * @param size размер спиннера
 * @param thickness толщина стенки спиннера
 * @param color Цвет спиннера
 * @example <Spinner size={30} thickness={5} color={Color.Primary} />
 */
export function Spinner({ size, thickness = 5, color = Color.Primary }: SpinnerProps) {
  return (
    <span className={styles.spinner} style={{ width: size, height: size }}>
      <span
        className={styles.spinnerAfter}
        style={{
          width: size,
          height: size,
          borderWidth: thickness,
          borderColor: `${getColorVariable(color)} transparent ${getColorVariable(color)} transparent`,
        }}
      />
    </span>
  )
}
