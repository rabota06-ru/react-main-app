import { useContext } from 'react'
import { Box, BoxProps } from '../box'
import { TabsContext } from './tabs'

interface TabPanelProps<T extends number> extends BoxProps {
  index: T
}

export function TabPanel<T extends number>({ children, index, ...props }: TabPanelProps<T>) {
  const { selectedIndex } = useContext(TabsContext)
  return index === selectedIndex ? <Box {...props}>{children}</Box> : null
}
