import { HTMLAttributes } from 'react'
import { CardShadow } from './card.types'

interface CardProps extends Props<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  shadow?: CardShadow
  hoverShadow?: CardShadow
  activeShadow?: CardShadow
  isActive?: boolean
}

export function Card(props: CardProps) {
  return <div {...props} />
}
