import { CardCustomizedShadow, CardShadow } from './card.types'

/**
 * Проверяет является ли тень типом CardCustomizedShadow
 * @param {CardCustomizedShadow} shadow проверяемая тень
 */
export function isCardCustomizedShadow(shadow: CardShadow): shadow is CardCustomizedShadow {
  return typeof shadow === 'object'
}
