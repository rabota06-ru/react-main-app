import { LoadingOverlay } from 'components/loading-overlay'
import { useEffect, useState } from 'react'
import cn from 'classnames'
import { Box, BoxProps } from 'kit/components/box'
import styles from './infinity-list.module.scss'

interface InfinityListProps<Item> extends BoxProps {
  page?: number
  loadableItemsCount: number
  distanceToFetch?: number
  fetchItems: (page: number, count: number) => Promise<Item[]>
  renderItem: (item: Item) => JSX.Element
  onFetchError?: (error: any) => void
}

export function InfinityList<Item>({
  page: propsPage,
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
  const [page, setPage] = useState(propsPage ?? 1)

  const handleScroll = ({ currentTarget }: React.UIEvent<HTMLDivElement, UIEvent>) => {
    const distanceToEnd = currentTarget.scrollHeight - currentTarget.clientHeight - currentTarget.scrollTop

    if (distanceToEnd - distanceToFetch <= 0 && !isLoading && !isMaximumReached) {
      setPage(prev => prev + 1)
    }
  }

  useEffect(() => {
    if (propsPage !== undefined) {
      setPage(propsPage)
      setItems(items => items.slice(0, (propsPage - 1) * loadableItemsCount + 1))
    }
  }, [propsPage, loadableItemsCount])

  useEffect(() => {
    setIsLoading(true)
    fetchItems(page, loadableItemsCount)
      .then(items => {
        setItems(prev => [...prev, ...items])
        if (items.length === 0) setIsMaximumReached(true)
      })
      .catch(reason => onFetchError?.(reason))
      .finally(() => setIsLoading(false))
  }, [page, loadableItemsCount])

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
