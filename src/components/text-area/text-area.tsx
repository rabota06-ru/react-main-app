import { DetailedHTMLProps, TextareaHTMLAttributes } from 'react'

interface TextAreaProps extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {}

export function TextArea({ ...props }: TextAreaProps) {
  return <textarea {...props} />
}
