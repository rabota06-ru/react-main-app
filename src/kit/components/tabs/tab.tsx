import { PropsWithChildren, useContext } from 'react'
import cn from 'classnames'
import styles from './tabs.module.scss'
import { TabsContext } from './tabs'
import { TabsSize } from './tabs.constants'

interface TabProps extends PropsWithChildren {
  index: number
}

export function Tab({ children, index }: TabProps) {
  const { onSelect, selectedIndex, size } = useContext(TabsContext)

  return (
    <div
      className={cn(styles.tabsItem, {
        [styles.tabsItem_Selected]: selectedIndex === index,
        [styles.tabsItem_SmallSize]: size === TabsSize.Small,
        [styles.tabsItem_MediumSize]: size === TabsSize.Medium,
        [styles.tabsItem_LargeSize]: size === TabsSize.Large,
      })}
      onClick={() => onSelect(index)}
    >
      {children}
    </div>
  )
}
