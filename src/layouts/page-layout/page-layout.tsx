import { FC } from 'react';
import styles from './page-layout.module.scss';

interface PageLayoutProps {
  title: string;
  Page: FC;
}

export function PageLayout({ title, Page }: PageLayoutProps) {
  return (
    <div className={styles.page}>
      <h2 className={styles.pageTitle}>{title}</h2>
      <Page />
    </div>
  );
}
