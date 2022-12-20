import { CSSProperties } from 'react'

/**
 * Тип тени карточки
 */
export type CardShadow = CardCustomizedShadow | CSSProperties['boxShadow']

/**
 * test
 * @param blurRadius радиус размытия
 * @param spreadRadius радиус растяжения
 * @param color цвет тени
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow
 */
export type CardCustomizedShadow = {
  blurRadius?: number
  spreadRadius?: number
  color?: CSSProperties['color']
}
