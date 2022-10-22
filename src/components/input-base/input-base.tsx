import cn from 'classnames'
import { HTMLAttributes, PropsWithChildren } from 'react'
import { InputSize, InputStatus } from './input-base.types'
import styles from './input-base.module.scss'

export interface InputBaseProps extends PropsWithChildren {
  label?: string
  status?: InputStatus
  size?: InputSize
  bottomText?: string
  isDisabled?: boolean
  wrapperProps?: Props<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
}

export function InputBase({ label, status, size = InputSize.Default, bottomText, isDisabled, wrapperProps, children }: InputBaseProps) {
  return (
    <div>
      {label !== undefined && <span className={styles.inputBaseLabel}>{label}</span>}
      <div
        {...wrapperProps}
        className={cn(styles.inputBaseWrapper, wrapperProps?.className, {
          [styles.inputBaseWrapper_DefaultSize]: size === InputSize.Default,
          [styles.inputBaseWrapper_LargeSize]: size === InputSize.Large,
          [styles.inputBaseWrapper_SuccessStatus]: status === InputStatus.Success,
          [styles.inputBaseWrapper_ErrorStatus]: status === InputStatus.Error,
          [styles.inputBaseWrapper_WarningStatus]: status === InputStatus.Warning,
          [styles.inputBaseWrapper_Disabled]: isDisabled,
        })}
      >
        {children}
      </div>
      {bottomText !== undefined && (
        <span
          className={cn(styles.inputBaseBottomText, {
            [styles.inputBaseBottomText_SuccessStatus]: status === InputStatus.Success,
            [styles.inputBaseBottomText_ErrorStatus]: status === InputStatus.Error,
            [styles.inputBaseBottomText_WarningStatus]: status === InputStatus.Warning,
          })}
        >
          {bottomText}
        </span>
      )}
    </div>
  )
}
