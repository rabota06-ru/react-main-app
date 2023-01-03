import { useMediaValue } from 'kit/hooks'
import { createContext, PropsWithChildren, useMemo } from 'react'
import { ScreenSize } from './kit-provider.types'

interface IKitContext {
  screenSize: ScreenSize
}

export const KitContext = createContext<IKitContext>({
  screenSize: ScreenSize.XL,
})

interface KitProviderProps extends PropsWithChildren {}

export function KitProvider({ children }: KitProviderProps) {
  const screenSize = useMediaValue({ xs: ScreenSize.XS, sm: ScreenSize.SM, md: ScreenSize.MD, lg: ScreenSize.LG, xl: ScreenSize.XL })
  const contextValue = useMemo(() => ({ screenSize }), [screenSize])

  return <KitContext.Provider value={contextValue}>{children}</KitContext.Provider>
}
