import cn from 'classnames'
import { HTMLAttributes, PropsWithChildren } from 'react'
import { Spinner } from 'kit/components/spinner'
import { CssColorVariable } from 'utils/get-css-variable'
import { InputSize, InputStatus } from './input-base.types'
import styles from './input-base.module.scss'
import { getColorByInputStatus } from './input-base.utils'

export interface InputBaseProps extends PropsWithChildren {
  label?: string
  status?: InputStatus
  size?: InputSize
  bottomText?: string
  isDisabled?: boolean
  isLoading?: boolean
  RightContent?: JSX.Element
  wrapperProps?: Props<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
  containerProps?: Props<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
}

/**
 * Компонент, который является корневым для компонентов Input, Dropdown, PhoneInput, PasswordInput
 * @param label текст, который отображается над инпутом
 * @param status статус инпута, от которого зависит какого цвета обводка и нижний текст
 * @param size размер инпута. Default - высота 50px, Large - высота 60px
 * @param bottomText нижний текст
 * @param isDisabled заблокирован ли инпут
 * @param isLoading отображается ли загрузка
 * @param RightContent контент в правой части InputBase
 * @param wrapperProps пропсы элемента, который оборачивает children
 * @param containerProps пропсы контейнера
 */
export function InputBase({
  label,
  status,
  size = InputSize.Default,
  bottomText,
  isDisabled,
  isLoading,
  RightContent,
  wrapperProps,
  containerProps,
  children,
}: InputBaseProps) {
  return (
    <div {...containerProps} className={cn(styles.inputBase, containerProps?.className)}>
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
        {(RightContent || isLoading) && (
          <div className={styles.inputBaseRightIconWrapper}>
            {RightContent && !isLoading ? RightContent : null}
            {isLoading && (
              <Spinner
                size={25}
                thickness={2}
                color={status !== undefined ? getColorByInputStatus(status) : CssColorVariable.PrimaryColor}
              />
            )}
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
