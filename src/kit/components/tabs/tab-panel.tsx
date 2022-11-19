import { PropsWithChildren, useContext } from 'react'
import { TabsContext } from './tabs'
import styles from './tabs.module.scss'

interface TabPanelProps<T extends number> extends PropsWithChildren {
  index: T
}

export function TabPanel<T extends number>({ children, index }: TabPanelProps<T>) {
  const { selectedIndex } = useContext(TabsContext)

  return index === selectedIndex ? <div className={styles.tabsPanel}>{children}</div> : null
}
