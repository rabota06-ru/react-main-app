import { TextareaHTMLAttributes } from 'react'
import { Props } from 'types/common'

interface TextAreaProps extends Props<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {}

export function TextArea({ ...props }: TextAreaProps) {
  return <textarea {...props} />
}
