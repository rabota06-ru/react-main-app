import { CSSProperties, useMemo, useState } from 'react'
import cn from 'classnames'
import { CardShadow } from './card.types'
import styles from './card.module.scss'
import { isCardCustomizedShadow } from './card.utils'
import { CARD_DEFAULT_SHADOW } from './card.constants'
import { Box, BoxProps } from '../box'

interface CardProps extends BoxProps {
  shadow?: CardShadow
  hoverShadow?: CardShadow
}

/**
 * Компонент карточки
 * @param shadow основная тень, которая переопределит дефолтную тень карточки
 * @param hoverShadow тень, которая будет устанавливаться, если произойдёт событие наведения на карточку
 */
export function Card({ shadow, hoverShadow, className, ...props }: CardProps) {
  const [hovered, setHovered] = useState(false)
  const calculatedShadow = useMemo<CSSProperties['boxShadow']>(() => {
    if (hovered && hoverShadow) return getShadow(hoverShadow)
    if (shadow) return getShadow(shadow)

    return getShadow(CARD_DEFAULT_SHADOW)
  }, [shadow, hoverShadow, hovered])

  function getShadow(shadow: CardShadow): CSSProperties['boxShadow'] {
    if (isCardCustomizedShadow(shadow))
      return `0px 0px ${shadow.blurRadius ?? CARD_DEFAULT_SHADOW.blurRadius}px ${
        shadow.spreadRadius ?? CARD_DEFAULT_SHADOW.spreadRadius
      }px ${shadow.color ?? CARD_DEFAULT_SHADOW.color}`

    return shadow
  }

  return (
    <Box
      {...props}
      className={cn(styles.card, className)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ ...props.style, boxShadow: calculatedShadow }}
    />
  )
}
