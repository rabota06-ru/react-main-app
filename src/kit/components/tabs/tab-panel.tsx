import { HTMLAttributes, useContext } from 'react'
import { TabsContext } from './tabs'

interface TabPanelProps<T extends number> extends Props<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  index: T
}

export function TabPanel<T extends number>({ children, index, ...props }: TabPanelProps<T>) {
  const { selectedIndex } = useContext(TabsContext)
  return index === selectedIndex ? <div {...props}>{children}</div> : null
}
