import { HTMLAttributes } from 'react'
import { CssVariable, getCssVariable } from 'utils/get-css-variable'
import { DividerDirection } from './divider.types'

interface DividerProps extends Omit<Props<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'color'> {
  direction?: DividerDirection
  size?: number
  color?: CssVariable
}

export function Divider({
  direction = DividerDirection.Horizontal,
  size = 1,
  color = CssVariable.SecondaryColor2,
  ...props
}: DividerProps) {
  return (
    <div
      {...props}
      style={{
        height: direction === DividerDirection.Horizontal ? size : '100%',
        width: direction === DividerDirection.Vertical ? size : '100%',
        backgroundColor: getCssVariable(color),
      }}
    />
  )
}
