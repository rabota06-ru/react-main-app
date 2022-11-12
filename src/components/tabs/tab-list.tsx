import React, { PropsWithChildren, useEffect } from 'react'
import styles from './tabs.module.scss'

interface TabListProps extends PropsWithChildren {
  selectedIndex: number
}

export function TabList({ children, selectedIndex }: TabListProps) {
  const tabIndicatorRef = React.useRef<HTMLSpanElement>(null)

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
