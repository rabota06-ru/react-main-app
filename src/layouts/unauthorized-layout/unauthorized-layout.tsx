import { Footer } from 'components/footer'
import { Header } from 'components/header'
import { PropsWithChildren } from 'react'

interface UnauthorizedLayoutProps extends PropsWithChildren {}

export function UnauthorizedLayout({ children }: UnauthorizedLayoutProps) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
