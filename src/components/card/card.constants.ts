import { Color } from 'types/index'
import { getColorVariable } from 'utils/get-color'
import { CardCustomizedShadow } from './card.types'

export const CARD_DEFAULT_SHADOW: Required<CardCustomizedShadow> = {
  blurRadius: 18,
  spreadRadius: 0,
  color: getColorVariable(Color.RedColor),
}
