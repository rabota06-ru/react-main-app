export enum CssColorVariable {
  PrimaryColor,
  ButtonShadowColor,
  TextColor,
  TextSecondaryColor,
  ButtonTextColor,
  SecondaryColor1,
  SecondaryColor2,
  SecondaryColor3,
  IconColor,
  RedColor,
  ErrorColor,
  SuccessColor,
  WarningColor,
  CarouselCardShadowColor,
  CarouselCardHoveredShadowColor,
}

const cssVariableNames: Record<CssColorVariable, string> = {
  [CssColorVariable.PrimaryColor]: '--primaryColor',
  [CssColorVariable.ButtonShadowColor]: '--buttonShadowColor',
  [CssColorVariable.TextColor]: '--textColor',
  [CssColorVariable.TextSecondaryColor]: '--textSecondaryColor',
  [CssColorVariable.ButtonTextColor]: '--buttonTextColor',
  [CssColorVariable.SecondaryColor1]: '--secondaryColor1',
  [CssColorVariable.SecondaryColor2]: '--secondaryColor2',
  [CssColorVariable.SecondaryColor3]: '--secondaryColor3',
  [CssColorVariable.IconColor]: '--iconColor',
  [CssColorVariable.RedColor]: '--redColor',
  [CssColorVariable.ErrorColor]: '--errorColor',
  [CssColorVariable.SuccessColor]: '--successColor',
  [CssColorVariable.WarningColor]: '--warningColor',
  [CssColorVariable.CarouselCardShadowColor]: '--carouselCardShadowColor',
  [CssColorVariable.CarouselCardHoveredShadowColor]: '--carouselCardHoveredShadowColor',
}

/**
 * Возвращает строку для цвета в формате var(--cssVariable).
 * @param variable  Цвет, для которого нужно получить строку с css-переменной
 * @returns Строка с css-переменной. Пример: var(--primaryColor)
 * @example Пример вызова функции: getCssVariable(CssVariable.SecondaryColor2)
 */

export function getCssVariable(variable: CssColorVariable): string {
  return `var(${cssVariableNames[variable]})`
}

/**
 * Возвращает строку для цвета в формате HEX, RGB, RGBA и т.д.
 * @param variable Цвет, для которого нужно получить цвет
 * @returns HEX, RGB, RGBA формат цвета. Пример: #2042e3
 * @example Пример вызова функции: getCssVariableValue(CssVariable.SecondaryColor2)
 */

export function getCssVariableValue(variable: CssColorVariable): string {
  return getComputedStyle(document.documentElement).getPropertyValue(cssVariableNames[variable])
}
