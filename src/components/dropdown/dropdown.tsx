import { InputBase, InputBaseProps, InputSize } from 'components/input-base'
import { HTMLAttributes, useEffect, useState } from 'react'
import cn from 'classnames'
import { DropdownItem } from './dropdown.types'
import styles from './dropdown.module.scss'

interface DropdownProps<T extends DropdownItem<K>, K extends string | number>
  extends Props<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    Pick<InputBaseProps, 'label' | 'status' | 'bottomText'> {
  items: T[]
  onSelectItem?: (item: T) => void
  selectedItem?: T | null
  isDisabled?: boolean
  isLoading?: boolean
  isCollapsed?: boolean
  inputBaseSize?: InputSize
}

export function Dropdown<T extends DropdownItem<K>, K extends string | number>({
  items,
  onSelectItem,
  selectedItem: selectedItemProps,
  isDisabled,
  isLoading,
  isCollapsed: isCollapsedProps,
  placeholder = 'Выберите элемент',
  inputBaseSize,
  label,
  status,
  bottomText,
  ...props
}: DropdownProps<T, K>) {
  const [isCollapsed, setIsCollapsed] = useState(isCollapsedProps ?? false)
  const [selectedItem, setSelectedItem] = useState<T | null>(null)

  function handleSelectItem(item: T) {
    setSelectedItem(item)
    setIsCollapsed(false)
    onSelectItem?.(item)
  }

  useEffect(() => {
    if (isCollapsedProps !== undefined) setIsCollapsed(isCollapsedProps)
  }, [isCollapsedProps])

  useEffect(() => {
    if (selectedItemProps !== undefined && selectedItemProps !== null && selectedItemProps !== selectedItem) {
      setSelectedItem(selectedItemProps)
    }
  }, [selectedItemProps, selectedItem])

  useEffect(() => {
    if (isDisabled) {
      setIsCollapsed(false)
    }
  }, [isDisabled])

  return (
    <div {...props} className={cn(styles.dropdown, props.className)}>
      <InputBase
        size={inputBaseSize}
        isDisabled={isDisabled || isLoading}
        isLoading={isLoading}
        label={label}
        status={status}
        bottomText={bottomText}
        wrapperProps={{
          className: cn(styles.dropdownInputBaseWrapper, {
            [styles.dropdownInputBaseWrapper_DropdownCollapsed]: isCollapsed,
            [styles.dropdownInputBaseWrapper_Disabled]: isDisabled || isLoading,
          }),
          onClick: () => setIsCollapsed(is => !is),
        }}
      >
        {selectedItem ? (
          <p className={styles.dropdownSelectedItemLabel}>{selectedItem.label}</p>
        ) : (
          <p className={styles.dropdownPlaceholder}>{placeholder}</p>
        )}
      </InputBase>
      {isCollapsed && (
        <div className={cn(styles.dropdownList, { [styles.dropdownList_Loading]: isLoading })}>
          {items.map(item => (
            <div
              key={item.id}
              className={cn(styles.dropdownListItem, { [styles.dropdownListItem_Selected]: selectedItem?.id === item.id })}
              onClick={() => handleSelectItem(item)}
            >
              {item.label}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
