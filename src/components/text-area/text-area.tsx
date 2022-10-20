import { TextareaHTMLAttributes } from 'react'

interface TextAreaProps extends Props<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {}

export function TextArea({ ...props }: TextAreaProps) {
  return <textarea {...props} />
}
