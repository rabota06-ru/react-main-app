import { ReactNode } from 'react'

export interface ICarouselCard {
  Icon: ReactNode
  title: string
  infoItems: {
    Icon: ReactNode
    label: string | number
  }[]
  url: string
}
