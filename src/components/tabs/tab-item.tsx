import { PropsWithChildren, useContext } from 'react'
import cn from 'classnames'
import styles from './tabs.module.scss'
import { TabContext } from './tabs'

interface TabProps extends PropsWithChildren {
  index: number
}

export function Tab({ children, index }: TabProps) {
  const { onSelect, selectedIndex } = useContext(TabContext)

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
