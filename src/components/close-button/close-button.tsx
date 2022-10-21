import { ButtonHTMLAttributes } from 'react'

interface CloseButtonProps extends Omit<Props<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, 'type'> {}

export function CloseButton(props: CloseButtonProps) {
  return (
    <button type='button' {...props}>
      <span />
    </button>
  )
}
