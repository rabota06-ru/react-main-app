import React, { PropsWithChildren, useContext, useEffect } from 'react'
import { TabsContext } from './tabs'
import styles from './tabs.module.scss'

interface TabListProps extends PropsWithChildren {}

export function TabList({ children }: TabListProps) {
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
    <div className={styles.tabsList}>
      {React.Children.map(children, (child: any, index) => {
        return React.cloneElement(child, { index })
      })}
      <span ref={tabIndicatorRef} className={styles.tabsIndicator} />
    </div>
  )
}
