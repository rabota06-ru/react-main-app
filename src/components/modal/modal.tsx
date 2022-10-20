import { PropsWithChildren } from 'react'

interface ModalProps extends PropsWithChildren {
  isShown: boolean
}

export function Modal(props: ModalProps) {
  return <div />
}
