import { getColorVariableByInputStatus, InputStatus } from 'kit/components/input-base'
import { BsFillCaretUpFill, BsXCircle } from 'react-icons/bs'
import { CssVariable, getCssVariable } from 'utils/get-css-variable'
import cn from 'classnames'
import { DropdownItem } from './dropdown.types'
import styles from './dropdown.module.scss'

interface DropdownRightIconProps<T extends string | number> {
  selectedItem: DropdownItem<T> | null
  status?: InputStatus
  isCollapsed: boolean
  onUnselectItem: () => void
}

export function DropdownRightIcon<T extends string | number>({
  selectedItem,
  status,
  isCollapsed,
  onUnselectItem,
}: DropdownRightIconProps<T>) {
  if (selectedItem !== null) {
    return (
      <BsXCircle
        onClick={event => {
          event.stopPropagation()
          onUnselectItem()
        }}
        color={status !== undefined ? getColorVariableByInputStatus(status) : getCssVariable(CssVariable.SecondaryColor2)}
      />
    )
  }
  return (
    <BsFillCaretUpFill
      className={cn(styles.dropdownInputBaseArrow, { [styles.dropdownInputBaseArrow_DropdownCollapsed]: isCollapsed })}
      color={status !== undefined ? getColorVariableByInputStatus(status) : getCssVariable(CssVariable.SecondaryColor2)}
    />
  )
}
