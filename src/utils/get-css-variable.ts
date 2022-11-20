export enum CssVariable {
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

const cssVariableNames: Record<CssVariable, string> = {
  [CssVariable.PrimaryColor]: '--primaryColor',
  [CssVariable.ButtonShadowColor]: '--buttonShadowColor',
  [CssVariable.TextColor]: '--textColor',
  [CssVariable.TextSecondaryColor]: '--textSecondaryColor',
  [CssVariable.ButtonTextColor]: '--buttonTextColor',
  [CssVariable.SecondaryColor1]: '--secondaryColor1',
  [CssVariable.SecondaryColor2]: '--secondaryColor2',
  [CssVariable.SecondaryColor3]: '--secondaryColor3',
  [CssVariable.IconColor]: '--iconColor',
  [CssVariable.RedColor]: '--redColor',
  [CssVariable.ErrorColor]: '--errorColor',
  [CssVariable.SuccessColor]: '--successColor',
  [CssVariable.WarningColor]: '--warningColor',
  [CssVariable.CarouselCardShadowColor]: '--carouselCardShadowColor',
  [CssVariable.CarouselCardHoveredShadowColor]: '--carouselCardHoveredShadowColor',
}

/**
 * Возвращает строку для цвета в формате var(--cssVariable).
 * @param variable  Цвет, для которого нужно получить строку с css-переменной
 * @returns Строка с css-переменной. Пример: var(--primaryColor)
 * @example Пример вызова функции: getCssVariable(CssVariable.SecondaryColor2)
 */

export function getCssVariable(variable: CssVariable): string {
  return `var(${cssVariableNames[variable]})`
}

/**
 * Возвращает строку для цвета в формате HEX, RGB, RGBA и т.д.
 * @param variable Цвет, для которого нужно получить цвет
 * @returns HEX, RGB, RGBA формат цвета. Пример: #2042e3
 * @example Пример вызова функции: getCssVariableValue(CssVariable.SecondaryColor2)
 */

export function getCssVariableValue(variable: CssVariable): string {
  return getComputedStyle(document.documentElement).getPropertyValue(cssVariableNames[variable])
}
