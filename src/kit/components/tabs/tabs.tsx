import React, { PropsWithChildren, createContext, useMemo } from 'react'
import styles from './tabs.module.scss'

interface ITabsContext {
  selectedIndex?: number
  onSelect: (index: number) => void
}

export const TabsContext = createContext<ITabsContext>({
  onSelect: () => {},
  selectedIndex: 0,
})

interface TabsProps<T extends number> extends PropsWithChildren {
  selectedIndex: T
  onSelect: (index: T) => void
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
export function Tabs<T extends number>({ children, selectedIndex, onSelect }: TabsProps<T>) {
  const value = useMemo(() => ({ selectedIndex, onSelect }), [selectedIndex, onSelect])

  return (
    <TabsContext.Provider value={value as unknown as ITabsContext}>
      <div className={styles.tabs}>
        {React.Children.map(children, (child: any, index) => {
          if (index === 0) {
            return React.cloneElement(child, { selectedIndex })
          }

          return React.cloneElement(child, { isShown: index - 1 === selectedIndex })
        })}
      </div>
    </TabsContext.Provider>
  )
}
