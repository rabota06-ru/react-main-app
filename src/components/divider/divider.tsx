import { HTMLAttributes } from 'react'
import { DividerDirection } from './divider.types'

interface DividerProps extends Props<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  direction?: DividerDirection
  size?: number
}

export function Divider({ direction = DividerDirection.Horizontal, size = 1, ...props }: DividerProps) {
  return <div {...props} />
}
