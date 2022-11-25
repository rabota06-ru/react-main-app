import { NavBar } from 'components/nav-bar';
import { PropsWithChildren } from 'react';
import styles from './authorized-layout.module.scss';

interface AuthorizedLayoutProps extends PropsWithChildren {}

export function AuthorizedLayout({ children }: AuthorizedLayoutProps) {
  return (
    <div className={styles.layout}>
      <NavBar />
      {children}
    </div>
  );
}
