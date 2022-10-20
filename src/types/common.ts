import { DetailedHTMLProps, HTMLAttributes } from 'react'

export type Props<E extends HTMLAttributes<T>, T> = Omit<DetailedHTMLProps<E, T>, 'ref'>
