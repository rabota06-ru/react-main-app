import { Color } from 'types'

const colorVariableNames: Record<Color, string> = {
  [Color.PrimaryColor]: '--primaryColor',
  [Color.ButtonShadowColor]: '--buttonShadowColor',
  [Color.TextColor]: '--textColor',
  [Color.TextSecondaryColor]: '--textSecondaryColor',
  [Color.ButtonTextColor]: '--buttonTextColor',
  [Color.SecondaryColor1]: '--secondaryColor1',
  [Color.SecondaryColor2]: '--secondaryColor2',
  [Color.SecondaryColor3]: '--secondaryColor3',
  [Color.iconColor]: '--iconColor',
  [Color.RedColor]: '--redColor',
  [Color.ErrorColor]: '--errorColor',
  [Color.SuccessColor]: '--successColor',
  [Color.WarningColor]: '--warningColor',
}

/**
 * Возвращает строку для цвета в формате var(--cssVariable)
 * @param color Цвет, для которого нужно получить строку с css-переменной
 * @returns Строка с css-переменной
 * @example var(--primaryColor)
 */
export function getColorVariable(color: Color): string {
  return `var(${colorVariableNames[color]})`
}

/**
 * Возвращает строку для цвета в формате HEX, RGB, RGBA и т.д.
 * @param color Цвет, для которого нужно получить цвет
 * @returns HEX, RGB, RGBA формат цвета. Пример: #2042e3
 * @example #2042e3
 */
export function getColor(color: Color): string {
  return getComputedStyle(document.documentElement).getPropertyValue(colorVariableNames[color])
}
