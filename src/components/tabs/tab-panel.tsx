import { PropsWithChildren } from 'react'
import styles from './tabs.module.scss'

interface TabPanelProps extends PropsWithChildren {
  isShown?: boolean
}

export function TabPanel({ children, isShown }: TabPanelProps) {
  return isShown ? <div className={styles.tabsPanel}>{children}</div> : null
}
