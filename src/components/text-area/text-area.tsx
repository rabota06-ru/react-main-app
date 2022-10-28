import { TextareaHTMLAttributes} from 'react'
import styles from './text-area.module.scss'
import { textAreaStatus } from './text-area.types'
import cn from 'classnames'

export interface TextAreaProps extends Props<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
  status?: textAreaStatus,
  VerticalResize?: boolean
}



export function TextArea({status, VerticalResize = true, ...props }: TextAreaProps) {

  return <textarea 
     className={cn(styles.textArea, {
     [styles.textAreaWrapper_SuccessStatus]: status === textAreaStatus.Success,
     [styles.textAreaWrapper_ErrorStatus]: status === textAreaStatus.Error,
     [styles.textAreaWrapper_WarningStatus]: status === textAreaStatus.Warning,
     [styles.textAreaWrapper_VerticalResize]: VerticalResize,
  })}
  {...props} 
  />
}
  
