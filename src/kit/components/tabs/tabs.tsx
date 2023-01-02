import React, { PropsWithChildren, createContext, useMemo } from 'react'
import { TabsSize } from './tabs.constants'

interface ITabsContext {
  selectedIndex?: number
  onSelect: (index: number) => void
  size?: TabsSize
}

export const TabsContext = createContext<ITabsContext>({
  onSelect: () => {},
  selectedIndex: 0,
  size: TabsSize.Medium,
})

interface TabsProps<T extends number> extends PropsWithChildren {
  selectedIndex: T
  onSelect: (index: T) => void
  size?: TabsSize
}

/**
 * Табы
 * @param selectedIndex выбранный таб (по умолчанию = 0)
 * @param onSelect функция, которая получает индекс таба, на который кликнули
 * @example 
 * <Tabs selectedIndex={tabIndex} onSelect={index => setTabIndex(index)}>
      <TabList>
        <Tab>Title 1</Tab>
        <Tab>Title 2</Tab>
      </TabList>

      <TabPanel>
        <h2>Any content 1</h2>
      </TabPanel>
      <TabPanel>
        <h2>Any content 2</h2>
      </TabPanel>
    </Tabs>
 */
export function Tabs<T extends number>({ children, selectedIndex, onSelect, size = TabsSize.Medium }: TabsProps<T>) {
  const value = useMemo(() => ({ selectedIndex, onSelect, size }), [selectedIndex, onSelect, size])

  return <TabsContext.Provider value={value as unknown as ITabsContext}>{children}</TabsContext.Provider>
}
