import { CssVariable, getCssVariable } from 'utils/get-css-variable'
import { InputStatus } from './input-base.types'

export function getColorByInputStatus(status: InputStatus): CssVariable {
  switch (status) {
    case InputStatus.Success:
      return CssVariable.SuccessColor
    case InputStatus.Warning:
      return CssVariable.WarningColor
    case InputStatus.Error:
      return CssVariable.ErrorColor
    default:
      throw new Error(`Неизвестный статус: ${status}`)
  }
}

export function getColorVariableByInputStatus(status: InputStatus): string {
  return getCssVariable(getColorByInputStatus(status))
}
