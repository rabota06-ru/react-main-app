import { CSSProperties } from 'react'

export type CardShadow = CardCustomizedShadow | CSSProperties['boxShadow']

export type CardCustomizedShadow = {
  blurRadius?: number
  spreadRadius?: number
  color?: CSSProperties['color']
}
