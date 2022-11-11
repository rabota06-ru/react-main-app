import { PropsWithChildren, useContext } from 'react'
import cn from 'classnames'
import styles from './tabs.module.scss'
import { TabsContext } from './tabs'

interface TabProps extends PropsWithChildren {
  index: number
}

export function Tab({ children, index }: TabProps) {
  const { onSelect, selectedIndex } = useContext(TabsContext)

  return (
    <div
      className={cn(styles.tabsItem, {
        [styles.tabsItemActive]: selectedIndex === index,
      })}
      onClick={() => onSelect(index)}
    >
      {children}
    </div>
  )
}
