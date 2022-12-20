import { Input, InputProps } from 'kit/components/input'
import { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'

interface PasswordInputProps extends Omit<InputProps, 'type' | 'RightContent'> {}

/**
 * @param label текст, который отображается над инпутом
 * @param status статус инпута, от которого зависит какого цвета обводка и нижний текст
 * @param size размер инпута. Default - высота 50px, Large - высота 60px
 * @param bottomText нижний текст
 * @param isDisabled заблокирован ли инпут
 * @param wrapperProps пропсы элемента, который оборачивает children
 * @param isLoading флаг загрузки. Если true, то отображается спиннер и инуп заблокирован
 */

export function PasswordInput({ className, ...props }: PasswordInputProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false)
  const HideOrShowPassword = isPasswordVisible ? AiOutlineEyeInvisible : AiOutlineEye

  const handleSwitchPassword = () => setIsPasswordVisible(isPasswordVisible => !isPasswordVisible)

  return (
    <Input {...props} type={isPasswordVisible ? 'text' : 'password'} RightContent={<HideOrShowPassword onClick={handleSwitchPassword} />} />
  )
}
