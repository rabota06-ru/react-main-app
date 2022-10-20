import { ButtonHTMLAttributes } from 'react'
import { Props } from 'types/common'

interface CloseButtonProps extends Omit<Props<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, 'type'> {}

export function CloseButton(props: CloseButtonProps) {
  return <button type='button' {...props} />
}
