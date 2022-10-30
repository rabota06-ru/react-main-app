import { Input, InputProps } from 'components/input'
import { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import cn from 'classnames'
import styles from './password-input.module.scss'

interface PasswordInputProps extends InputProps {}

export function PasswordInput(props: PasswordInputProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false)
  const HideOrShowPassword = isPasswordVisible ? AiOutlineEyeInvisible : AiOutlineEye
  const inputType = isPasswordVisible ? 'text' : 'password'
  const handleSwitchPassword = () => setIsPasswordVisible(prevState => !prevState)

  return (
    <Input
      className={cn(styles.passwordInput)}
      type={inputType}
      RightContent={<HideOrShowPassword onClick={handleSwitchPassword} />}
      {...props}
    />
  )
}
