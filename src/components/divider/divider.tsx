import { HTMLAttributes } from 'react'
import { Color } from 'types/index'
import { getColorVariable } from 'utils/get-color'
import { DividerDirection } from './divider.types'

interface DividerProps extends Omit<Props<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'color'> {
  direction?: DividerDirection
  size?: number
  color?: Color
}

export function Divider({ direction = DividerDirection.Horizontal, size = 1, color = Color.SecondaryColor2, ...props }: DividerProps) {
  return (
    <div
      {...props}
      style={{
        height: direction === DividerDirection.Horizontal ? size : '100%',
        width: direction === DividerDirection.Vertical ? size : '100%',
        backgroundColor: getColorVariable(color),
      }}
    />
  )
}
