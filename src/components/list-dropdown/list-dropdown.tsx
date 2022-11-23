import { Button } from 'kit/components/button'
import { Dropdown } from 'kit/components/dropdown'
import { Input, InputSize } from 'kit/components/input'
import { FIELDS_OF_ACTIVITY } from 'utils/fields-of-activity'
import { LOCATIONS } from 'utils/locations'
import { FieldOfActivity, Locations } from 'types/index'
import styles from './list-dropdown.module.scss'

interface ListDropdownProps {
  onSelectFieldOfActivity: (field: FieldOfActivity | null) => void
  onSelectLocation: (location: Locations | null) => void
}

export function ListDropdown({ onSelectFieldOfActivity, onSelectLocation }: ListDropdownProps) {
  return (
    <div className={styles.body}>
      <div className={styles.listDropdown}>
        <Input size={InputSize.Large} className={styles.listDropdownSize} placeholder='Ключевые слова' />
        <Dropdown
          onSelectItem={item => onSelectFieldOfActivity(item ? item.id : null)}
          inputBaseSize={InputSize.Large}
          placeholder='Категория'
          items={FIELDS_OF_ACTIVITY}
        />
        <Dropdown
          onSelectItem={item => onSelectLocation(item ? item.id : null)}
          inputBaseSize={InputSize.Large}
          placeholder='Населенный пункт'
          items={LOCATIONS}
        />
      </div>
      <Button className={styles.button} children='Найти' />
    </div>
  )
}
