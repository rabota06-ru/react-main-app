import { Color } from 'types'
import { getColorVariable } from 'utils/get-color'
import cn from 'classnames'
import styles from './spinner.module.scss'

interface SpinnerProps {
  size: number
  thickness?: number
  color?: Color
  className?: string
}
/**
 * Спиннер
 * @param size размер спиннера
 * @param thickness толщина стенки спиннера
 * @param color цвет спиннера
 * @param className класс который задается спиннеру
 * @example <Spinner size={30} thickness={5} color={Color.Primary} />
 */
export function Spinner({ size, thickness = 5, color = Color.PrimaryColor, className }: SpinnerProps) {
  return (
    <span className={cn(styles.spinner, className)} style={{ width: size, height: size }}>
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
