import { InputBase, InputBaseProps, InputSize } from 'kit/components/input-base'
import { HTMLAttributes, useEffect, useState } from 'react'
import cn from 'classnames'
import { useOnClickOutside } from 'kit/hooks'
import { DropdownItem } from './dropdown.types'
import styles from './dropdown.module.scss'
import { DropdownRightIcon } from './dropdown-right-icon'

/**
 * Выпадающий список элементов
 * @param items список отображаемых элементов
 * @param onSelectItem функция, которая будет вызываться при выборе элемента. Если в дроупдауне выбранный элемент удаляется(при клике на крестик), то в функцию передастся null
 * @param selectedItemByDefault элемент, который выбран по умолчанию
 * @param isDisabled заблокирован ли выпадающий список
 * @param isLoading отображается ли загрузка на выпадающем списке
 * @param isCollapsedByDefault открыт ли по умолчанию
 * @param inputBaseSize размер инпута. Default - 50px; Large - 60px
 * @param label отображаемый над инпутом текст
 * @param status статус выпадающего списка
 * @param bottomText текст, отображаемый под инпутом
 */
interface DropdownProps<T extends DropdownItem<K>, K extends string | number>
  extends Props<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    Pick<InputBaseProps, 'label' | 'status' | 'bottomText'> {
  items: T[]
  onSelectItem?: (item: T | null) => void
  selectedItemId?: K | null
  isDisabled?: boolean
  isLoading?: boolean
  isCollapsedByDefault?: boolean
  inputBaseSize?: InputSize
}

export function Dropdown<T extends DropdownItem<K>, K extends string | number>({
  items,
  onSelectItem,
  selectedItemId: propsSelectedItemId,
  isDisabled,
  isLoading,
  isCollapsedByDefault,
  placeholder = 'Выберите элемент',
  inputBaseSize,
  label,
  status,
  bottomText,
  ...props
}: DropdownProps<T, K>) {
  const [isCollapsed, setIsCollapsed] = useState(isCollapsedByDefault ?? false)
  const [selectedItem, setSelectedItem] = useState<T | null>(null)
  const ref = useOnClickOutside<HTMLDivElement>(() => setIsCollapsed(false))

  function handleSelectItem(item: T | null) {
    setSelectedItem(item)
    setIsCollapsed(false)
    onSelectItem?.(item)
  }

  useEffect(() => {
    if (propsSelectedItemId !== undefined) {
      if (propsSelectedItemId === null) setSelectedItem(null)
      else {
        const candidate = items.find(item => item.id === propsSelectedItemId)
        if (candidate) setSelectedItem(candidate)
      }
    }
  }, [items, propsSelectedItemId])

  useEffect(() => {
    if (isCollapsedByDefault !== undefined) setIsCollapsed(isCollapsedByDefault)
  }, [isCollapsedByDefault])

  useEffect(() => {
    if (isDisabled) setIsCollapsed(false)
  }, [isDisabled])

  return (
    <div ref={ref} {...props} className={cn(styles.dropdown, props.className)}>
      <InputBase
        size={inputBaseSize}
        isDisabled={isDisabled || isLoading}
        isLoading={isLoading}
        label={label}
        status={status}
        bottomText={bottomText}
        RightContent={
          <DropdownRightIcon
            isCollapsed={isCollapsed}
            onUnselectItem={() => handleSelectItem(null)}
            selectedItem={selectedItem}
            status={status}
          />
        }
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
      <div className={cn(styles.dropdownList, { [styles.dropdownList_Loading]: isLoading, [styles.dropdownList_Hidden]: !isCollapsed })}>
        {items.map(item => (
          <div
            key={item.id}
            className={cn(styles.dropdownListItem, { [styles.dropdownListItem_Selected]: selectedItem?.id === item.id })}
            onClick={() => handleSelectItem(item)}
            title={item.label}
          >
            <span className={styles.dropdownListItemLabel}>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
