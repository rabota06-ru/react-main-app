import { Color } from 'types'
import { getColorVariable } from 'utils/get-color'
import styles from './spinner.module.scss'

interface SpinnerProps {
  size: number
  thickness?: number
  color?: Color
}

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
