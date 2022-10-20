import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { InputStatus } from './input-base.types'

interface InputBaseProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  label?: string
  status?: InputStatus
  bottomText?: string
}

export function InputBase({ label, status, bottomText, ...props }: InputBaseProps) {
  return <div {...props} />
}
