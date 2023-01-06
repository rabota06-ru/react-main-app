import { LoadingOverlay } from 'components/loading-overlay'
import { useEffect, useState } from 'react'
import cn from 'classnames'
import { Box, BoxProps } from 'kit/components/box'
import styles from './infinity-list.module.scss'

interface InfinityListProps<Item> extends BoxProps {
  resetTrigger?: (cb: VoidFunction) => void
  loadableItemsCount: number
  distanceToFetch?: number
  fetchItems: (page: number, count: number) => Promise<Item[]>
  renderItem: (item: Item) => JSX.Element
  onFetchError?: (error: any) => void
}

export function InfinityList<Item>({
  resetTrigger,
  loadableItemsCount,
  distanceToFetch = 0,
  renderItem,
  fetchItems,
  onFetchError,
  ...containerProps
}: InfinityListProps<Item>) {
  const [items, setItems] = useState<Item[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [isMaximumReached, setIsMaximumReached] = useState(false)
  const [page, setPage] = useState(1)

  const handleScroll = ({ currentTarget }: React.UIEvent<HTMLDivElement, UIEvent>) => {
    const distanceToEnd = Math.floor(currentTarget.scrollHeight - currentTarget.clientHeight - currentTarget.scrollTop)

    if (distanceToEnd - distanceToFetch <= 0 && !isLoading && !isMaximumReached) {
      setPage(prev => prev + 1)
    }
  }

  const handleFetchItems = () => {
    setIsLoading(true)
    fetchItems(page, loadableItemsCount)
      .then(items => {
        setItems(prev => [...prev, ...items])
        if (items.length === 0) setIsMaximumReached(true)
      })
      .catch(reason => onFetchError?.(reason))
      .finally(() => setIsLoading(false))
  }

  useEffect(handleFetchItems, [page, loadableItemsCount])

  useEffect(() => {
    resetTrigger?.(() => {
      if (page === 1) handleFetchItems()
      else setPage(1)
      setItems([])
      setIsMaximumReached(false)
    })
  }, [page, handleFetchItems])

  return (
    <Box
      {...containerProps}
      onScroll={handleScroll}
      className={cn(styles.list, containerProps?.className, { [styles.list_ScrollDisabled]: isLoading })}
    >
      {items.map(item => renderItem(item))}
      {isLoading && <LoadingOverlay isSticky />}
    </Box>
  )
}
