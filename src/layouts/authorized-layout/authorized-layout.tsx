import { Footer } from 'components/footer'
import { PropsWithChildren } from 'react'

interface AuthorizedLayoutProps extends PropsWithChildren {}

export function AuthorizedLayout({ children }: AuthorizedLayoutProps) {
  return (
    <div>
      {children}
      <Footer />
    </div>
  )
}
