import { DropdownItem } from './dropdown.types'

interface DropdownProps<T extends DropdownItem<K>, K> {
  items: T[]
  onSelectItem?: (item: T) => void
  isDisabled?: boolean
  isLoading?: boolean
  isCollapsed?: boolean
}

export function Dropdown<T extends DropdownItem<K>, K>(props: DropdownProps<T, K>) {
  return <div />
}
