import { Color } from 'types/index'
import { getColorVariable } from 'utils/get-color'
import { InputStatus } from './input-base.types'

export function getColorByInputStatus(status: InputStatus): Color {
  switch (status) {
    case InputStatus.Success:
      return Color.SuccessColor
    case InputStatus.Warning:
      return Color.WarningColor
    case InputStatus.Error:
      return Color.ErrorColor
    default:
      throw new Error(`Неизвестный статус: ${status}`)
  }
}

export function getColorVariableByInputStatus(status: InputStatus): string {
  return getColorVariable(getColorByInputStatus(status))
}
