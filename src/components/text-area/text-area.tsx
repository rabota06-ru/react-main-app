import { TextareaHTMLAttributes } from 'react'
import styles from './text-area.module.scss'
import { TextAreaStatus } from './text-area.types'
import cn from 'classnames'

export interface TextAreaProps extends Props<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
  status?: TextAreaStatus
  isVerticalResize?: boolean
}

export function TextArea({ status, isVerticalResize = true, className, ...props }: TextAreaProps) {
  return (
    <textarea
      {...props}
      className={cn(styles.textArea, className, {
        [styles.textAreaWrapper_SuccessStatus]: status === TextAreaStatus.Success,
        [styles.textAreaWrapper_ErrorStatus]: status === TextAreaStatus.Error,
        [styles.textAreaWrapper_WarningStatus]: status === TextAreaStatus.Warning,
        [styles.textAreaWrapper_VerticalResize]: isVerticalResize,
      })}
    />
  )
}
