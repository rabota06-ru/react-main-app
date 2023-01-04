import { CssColorVariable, getCssVariable } from 'utils/get-css-variable'
import { Box, BoxProps } from '../box'
import { DividerDirection } from './divider.types'

interface DividerProps extends Omit<BoxProps, 'color'> {
  direction?: DividerDirection
  size?: number
  color?: CssColorVariable
}

export function Divider({
  direction = DividerDirection.Horizontal,
  size = 1,
  color = CssColorVariable.SecondaryColor2,
  ...props
}: DividerProps) {
  return (
    <Box
      {...props}
      style={{
        height: direction === DividerDirection.Horizontal ? size : '100%',
        width: direction === DividerDirection.Vertical ? size : '100%',
        backgroundColor: getCssVariable(color),
      }}
    />
  )
}
