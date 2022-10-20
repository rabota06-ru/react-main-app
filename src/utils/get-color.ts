import { Color } from 'types'

const colorVariableNames: Record<Color, string> = {
  [Color.Primary]: '--primaryColor',
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
