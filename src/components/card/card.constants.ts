import { Color } from 'types/index'
import { getColorVariable } from 'utils/get-color'
import { CardCustomizedShadow } from './card.types'

/**
 * Настройки дефолтной тени карточки
 */
export const CARD_DEFAULT_SHADOW: Required<CardCustomizedShadow> = {
  blurRadius: 18,
  spreadRadius: 0,
  color: getColorVariable(Color.SecondaryColor),
}
