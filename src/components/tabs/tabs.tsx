import React, { PropsWithChildren, createContext } from 'react'
import styles from './tabs.module.scss'

interface TabsProps extends PropsWithChildren {
  selectedIndex?: number
  onSelect: (index: number) => void
}

export const TabContext = createContext<TabsProps | null>(null)

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
export function Tabs({ children, selectedIndex = 0, onSelect }: TabsProps) {
  return (
    <TabContext.Provider value={{ selectedIndex, onSelect }}>
      <div className={styles.tabs}>
        {React.Children.map(children, (child: any, index) => {
          if (index === 0) {
            return React.cloneElement(child, { selectedIndex })
          }

          return React.cloneElement(child, { isShown: index - 1 === selectedIndex })
        })}
      </div>
    </TabContext.Provider>
  )
}
