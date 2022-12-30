import { CssVariable, getCssVariable } from 'utils/get-css-variable'
import { CardCustomizedShadow } from './card.types'

/**
 * Настройки дефолтной тени карточки
 */
export const CARD_DEFAULT_SHADOW: Required<CardCustomizedShadow> = {
  blurRadius: 18,
  spreadRadius: 0,
  color: getCssVariable(CssVariable.SecondaryColor3),
}
