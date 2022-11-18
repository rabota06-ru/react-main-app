import { Color } from 'types';

const colorVariableNames: Record<Color, string> = {
  [Color.PrimaryColor]: '--primaryColor',
  [Color.AttentionColor]: '--attentionColor',
  [Color.SecondaryButtonColor]: '--secondaryButtonColor',
  [Color.ButtonSecondaryTextColor]: '--buttonSecondaryTextColor',
  [Color.ButtonTextColor]: '--buttonTextColor',
  [Color.CardDefaultShadowColor]: '--cardDefaultShadowColor',
};

/**
 * Возвращает строку для цвета в формате var(--cssVariable)
 * @param color Цвет, для которого нужно получить строку с css-переменной
 * @returns Строка с css-переменной
 * @example var(--primaryColor)
 */
export function getColorVariable(color: Color) {
  return `var(${colorVariableNames[color]})`;
}
