import { TextareaHTMLAttributes, forwardRef, CSSProperties, useEffect } from 'react'

import cn from 'classnames'
import { useForwardedRef } from 'kit/hooks'
import styles from './text-area.module.scss'
import { TextAreaStatus } from './text-area.types'

export interface TextAreaProps extends Props<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
  status?: TextAreaStatus
  isResizeDisabled?: boolean
  isAutoAdaptableHeight?: boolean
  maxHeight?: CSSProperties['maxHeight']
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    { status, isResizeDisabled = false, isAutoAdaptableHeight = false, maxHeight, className, style, value, ...props },
    textAreaForwardedRef
  ) => {
    const textAreaRef = useForwardedRef(textAreaForwardedRef)

    useEffect(() => {
      if (isAutoAdaptableHeight && textAreaRef.current) {
        if (value === '') {
          textAreaRef.current.style.height = ''
        } else {
          textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`
        }
      }
    }, [isAutoAdaptableHeight, value])

    return (
      <textarea
        {...props}
        value={value}
        style={{ ...style, maxHeight }}
        ref={textAreaRef}
        className={cn(styles.textArea, className, {
          [styles.textArea_SuccessStatus]: status === TextAreaStatus.Success,
          [styles.textArea_ErrorStatus]: status === TextAreaStatus.Error,
          [styles.textArea_WarningStatus]: status === TextAreaStatus.Warning,
          [styles.textArea_ResizeDisabled]: isResizeDisabled,
        })}
      />
    )
  }
)
