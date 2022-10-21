import { CardCustomizedShadow, CardShadow } from './card.types'

export function isCardCustomizedShadow(shadow: CardShadow): shadow is CardCustomizedShadow {
  return typeof shadow === 'object'
}
