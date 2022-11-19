import { TextareaHTMLAttributes, forwardRef } from 'react'

import cn from 'classnames'
import styles from './text-area.module.scss'
import { TextAreaStatus } from './text-area.types'

export interface TextAreaProps extends Props<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
  status?: TextAreaStatus
  isVerticalResize?: boolean
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ status, isVerticalResize = true, className, ...props }, textAreaRef) => {
    return (
      <textarea
        {...props}
        ref={textAreaRef}
        className={cn(styles.textArea, className, {
          [styles.textAreaWrapper_SuccessStatus]: status === TextAreaStatus.Success,
          [styles.textAreaWrapper_ErrorStatus]: status === TextAreaStatus.Error,
          [styles.textAreaWrapper_WarningStatus]: status === TextAreaStatus.Warning,
          [styles.textAreaWrapper_VerticalResize]: isVerticalResize,
        })}
      />
    )
  }
)
