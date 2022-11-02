import { Footer } from 'components/footer'
import { Header } from 'components/header'
import { PropsWithChildren } from 'react'
import styles from './unauthorized-layout.module.scss'

interface UnauthorizedLayoutProps extends PropsWithChildren {}

export function UnauthorizedLayout({ children }: UnauthorizedLayoutProps) {
  return (
    <div className={styles.layout}>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
