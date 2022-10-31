import { Input, InputProps } from 'components/input'
import { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import cn from 'classnames'
import styles from './password-input.module.scss'

interface PasswordInputProps extends Omit<InputProps, 'type' | 'RightContent'> {}

export function PasswordInput({ className, ...props }: PasswordInputProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false)
  const HideOrShowPassword = isPasswordVisible ? AiOutlineEyeInvisible : AiOutlineEye

  const handleSwitchPassword = () => setIsPasswordVisible(isPasswordVisible => !isPasswordVisible)

  return (
    <Input
      {...props}
      className={cn(styles.passwordInput, className)}
      type={isPasswordVisible ? 'text' : 'password'}
      RightContent={<HideOrShowPassword onClick={handleSwitchPassword} />}
    />
  )
}
