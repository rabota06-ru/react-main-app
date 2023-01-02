import { CssColorVariable, getCssVariable } from 'utils/get-css-variable'
import { InputStatus } from './input-base.types'

export function getColorByInputStatus(status: InputStatus): CssColorVariable {
  switch (status) {
    case InputStatus.Success:
      return CssColorVariable.SuccessColor
    case InputStatus.Warning:
      return CssColorVariable.WarningColor
    case InputStatus.Error:
      return CssColorVariable.ErrorColor
    default:
      throw new Error(`Неизвестный статус: ${status}`)
  }
}

export function getColorVariableByInputStatus(status: InputStatus): string {
  return getCssVariable(getColorByInputStatus(status))
}
