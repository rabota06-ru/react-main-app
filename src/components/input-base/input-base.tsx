import { HTMLAttributes } from 'react'
import { Props } from 'types/common'
import { InputStatus } from './input-base.types'

export interface InputBaseProps extends Props<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  label?: string
  status?: InputStatus
  bottomText?: string
  isDisabled?: boolean
}

export function InputBase({ label, status, bottomText, ...props }: InputBaseProps) {
  return <div {...props} />
}
