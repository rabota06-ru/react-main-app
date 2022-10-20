import { HTMLAttributes } from 'react'
import { InputStatus } from './input-base.types'

export interface InputBaseProps extends Props<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  label?: string
  status?: InputStatus
  bottomText?: string
  isDisabled?: boolean
}

export function InputBase({ label, status, bottomText, isDisabled, ...props }: InputBaseProps) {
  return <div {...props} />
}
