import { Color } from 'types/';
import { getColorVariable } from 'utils/get-color';
import { CardCustomizedShadow } from './card.types';

/**
 * Настройки дефолтной тени карточки
 */
export const CARD_DEFAULT_SHADOW: Required<CardCustomizedShadow> = {
  offsetX: 0,
  offsetY: 4,
  blurRadius: 30,
  spreadRadius: 0,
  color: getColorVariable(Color.SecondaryButtonColor),
};
