import cn from 'classnames'
import { FC, HTMLAttributes, PropsWithChildren } from 'react'
import { Spinner } from 'components/spinner'
import { InputSize, InputStatus } from './input-base.types'
import styles from './input-base.module.scss'

export interface InputBaseProps extends PropsWithChildren {
  label?: string
  status?: InputStatus
  size?: InputSize
  bottomText?: string
  isDisabled?: boolean
  isLoading?: boolean
  RightIcon?: FC
  wrapperProps?: Props<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
}

/**
 * Компонент, который является корневым для компонентов Input, Dropdown, PhoneInput, PasswordInput
 * @param label текст, который отображается над инпутом
 * @param status статус инпута, от которого зависит какого цвета обводка и нижний текст
 * @param size размер инпута. Default - высота 50px, Large - высота 60px
 * @param bottomText нижний текст
 * @param isDisabled заблокирован ли инпут
 * @param wrapperProps пропсы элемента, который оборачивает children
 */
export function InputBase({
  label,
  status,
  size = InputSize.Default,
  bottomText,
  isDisabled,
  isLoading,
  RightIcon,
  wrapperProps,
  children,
}: InputBaseProps) {
  return (
    <div className={styles.inputBase}>
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
        {(RightIcon || isLoading) && (
          <div className={styles.inputBaseRightIconWrapper}>
            {RightIcon && !isLoading && <RightIcon />}
            {isLoading && <Spinner size={25} thickness={4} />}
          </div>
        )}
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
