import { Input, InputProps } from 'components/input'
import { forwardRef, useCallback, ChangeEvent } from 'react'
import { mergeRefs } from 'react-merge-refs'
import { useRussianPhoneNumber } from './use-russian-phone-number'

interface PhoneInputProps extends InputProps {
  onPhoneChange?: (options: { dirty: string; clear: string }) => void
}

/**
 * @param label текст, который отображается над инпутом
 * @param status статус инпута, от которого зависит какого цвета обводка и нижний текст
 * @param size размер инпута. Default - высота 50px, Large - высота 60px
 * @param bottomText нижний текст
 * @param isDisabled заблокирован ли инпут
 * @param wrapperProps пропсы элемента, который оборачивает children
 * @param isLoading флаг загрузки. Если true, то отображается спиннер и инуп заблокирован
 * @param RightContent контент справа от инпута
 */
export const PhoneInput = forwardRef<HTMLInputElement, PhoneInputProps>(({ onPhoneChange, value, onChange, ...props }, ref) => {
  const input = useRussianPhoneNumber({ onChange: onPhoneChange, value })

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      input.onChange(event)
      onChange?.(event)
    },
    [onChange, input]
  )

  return <Input onChange={handleChange} value={input.value} ref={mergeRefs([input.ref, ref])} {...props} />
})
