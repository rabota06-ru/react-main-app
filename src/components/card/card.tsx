import { CSSProperties, HTMLAttributes, useMemo, useState } from 'react'
import cn from 'classnames'
import { CardShadow } from './card.types'
import styles from './card.module.scss'
import { isCardCustomizedShadow } from './card.utils'
import { CARD_DEFAULT_SHADOW } from './card.constants'

interface CardProps extends Props<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  shadow?: CardShadow
  hoverShadow?: CardShadow
  activeShadow?: CardShadow
  isActive?: boolean
}

export function Card({ shadow, hoverShadow, activeShadow, isActive, className, ...props }: CardProps) {
  const [hovered, setHovered] = useState(false)
  const calculatedShadow = useMemo<CSSProperties['boxShadow']>(() => {
    if (isActive && activeShadow) return getShadow(activeShadow)
    if (hovered && hoverShadow) return getShadow(hoverShadow)
    if (shadow) return getShadow(shadow)

    return getShadow(CARD_DEFAULT_SHADOW)
  }, [shadow, hoverShadow, activeShadow, isActive, hovered])

  function getShadow(shadow: CardShadow): CSSProperties['boxShadow'] {
    if (isCardCustomizedShadow(shadow))
      return `0px 0px ${shadow.blurRadius ?? CARD_DEFAULT_SHADOW.blurRadius}px ${
        shadow.spreadRadius ?? CARD_DEFAULT_SHADOW.spreadRadius
      }px ${shadow.color ?? CARD_DEFAULT_SHADOW.color}`

    return shadow
  }

  return (
    <div
      className={cn(styles.card, className)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ boxShadow: calculatedShadow }}
      {...props}
    />
  )
}
