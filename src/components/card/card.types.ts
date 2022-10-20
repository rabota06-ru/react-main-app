import { CSSProperties } from 'react'

export type CardShadow =
  | {
      blurRadius?: number
      spreadRadius?: number
      color?: CSSProperties['color']
    }
  | CSSProperties['boxShadow']
