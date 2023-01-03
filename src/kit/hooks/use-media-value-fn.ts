import { KitContext, ScreenSize } from 'kit/kit-provider'
import { useCallback, useContext } from 'react'
import { Values } from './use-media-value'

export type MediaValue<T> = T | Values<T>

export function useMediaValueFn() {
  const { screenSize } = useContext(KitContext)

  const fn = useCallback(
    <T>(value: MediaValue<T>): T => {
      if (typeof value !== 'object' || !Object.hasOwn(value as object, 'xs')) return value as T

      const { xs, sm, md, lg, xl } = value as Values<T>
      switch (screenSize) {
        case ScreenSize.XS:
          return xs
        case ScreenSize.SM:
          return sm ?? xs
        case ScreenSize.MD:
          return md ?? sm ?? xs
        case ScreenSize.LG:
          return lg ?? md ?? sm ?? xs
        case ScreenSize.XL:
          return xl ?? lg ?? md ?? sm ?? xs
        default:
          return xs
      }
    },
    [screenSize]
  )

  return fn
}
