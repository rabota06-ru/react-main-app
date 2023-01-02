import React, { HTMLAttributes, useContext, useEffect } from 'react'
import cn from 'classnames'
import { TabsContext } from './tabs'
import styles from './tabs.module.scss'

interface TabListProps extends Props<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export function TabList({ children, className, ...props }: TabListProps) {
  const tabIndicatorRef = React.useRef<HTMLSpanElement>(null)
  const { selectedIndex } = useContext(TabsContext)

  useEffect(() => {
    const tabsItemNode = document.querySelector(`.${styles.tabsItem}`) as HTMLDivElement
    const tabWidth = tabsItemNode.clientWidth
    const offestLeft = tabWidth * (selectedIndex ?? 0)

    const tabIndicator = tabIndicatorRef.current as HTMLSpanElement
    tabIndicator.style.cssText = `left: ${offestLeft}px; width: ${tabWidth}px;`
  }, [selectedIndex])

  return (
    <div className={cn(styles.tabsList, className)} {...props}>
      {children}
      <span ref={tabIndicatorRef} className={styles.tabsIndicator} />
    </div>
  )
}
