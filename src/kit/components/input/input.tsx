import { InputBase, InputBaseProps, InputSize } from 'kit/components/input-base'
import { forwardRef, InputHTMLAttributes } from 'react'
import cn from 'classnames'
import styles from './input.module.scss'

export interface InputProps
  extends Omit<Props<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'size' | 'value' | 'type' | 'children'>,
    Omit<InputBaseProps, 'children'> {
  value?: string
  isDisabled?: boolean
  isLoading?: boolean
  type?: string
}

/**
 * @param label текст, который отображается над инпутом
 * @param status статус инпута, от которого зависит какого цвета обводка и нижний текст
 * @param size размер инпута. Default - высота 50px, Large - высота 60px
 * @param bottomText нижний текст
 * @param isDisabled заблокирован ли инпут
 * @param wrapperProps пропсы элемента, который оборачивает children
 * @param containerProps пропсы контейнера
 * @param isLoading флаг загрузки. Если true, то отображается спиннер и инуп заблокирован
 * @param RightContent контент справа от инпута
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      bottomText,
      status,
      size = InputSize.Default,
      label,
      isDisabled,
      isLoading,
      type = 'text',
      className,
      RightContent,
      containerProps,
      ...props
    },
    inputRef
  ) => {
    return (
      <InputBase
        bottomText={bottomText}
        status={status}
        size={size}
        label={label}
        isDisabled={isDisabled || isLoading}
        isLoading={isLoading}
        RightContent={RightContent}
        wrapperProps={{
          className: cn(styles.inputBaseWrapper, { [styles.inputBaseWrapper_RightIconProvided]: RightContent || isLoading }),
        }}
        containerProps={containerProps}
      >
        <input
          {...props}
          ref={inputRef}
          type={type}
          disabled={isDisabled || isLoading}
          className={cn(styles.input, className, {
            [styles.input_RightIconProvidedDefaultSize]: (RightContent || isLoading) && size === InputSize.Default,
            [styles.input_RightIconProvidedLargeSize]: (RightContent || isLoading) && size === InputSize.Large,
          })}
        />
      </InputBase>
    )
  }
)
