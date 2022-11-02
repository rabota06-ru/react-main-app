import { Input, InputProps } from 'components/input'
import { useRussianPhoneNumber } from './use-russian-phone-number'

interface PhoneInputProps extends Omit<InputProps, 'onChange'> {
  onChange?: (options: { dirty: string; clear: string }) => void
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
export function PhoneInput({ onChange, value, ...props }: PhoneInputProps) {
  const inputRef = useRussianPhoneNumber({ onChange, value })

  return <Input onChange={inputRef.onChange} value={inputRef.value} ref={inputRef.ref} {...props} />
}
