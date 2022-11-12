import { Button } from 'components/button'
import { Dropdown } from 'components/dropdown'
import { Input, InputSize } from 'components/input'
import { FIELDS_OF_ACTIVITY_TO_DROPDOWN_ITEMS } from 'utils/fields-of-activity'
import { LOCATIONS_TO_DROPDOWN_ITEMS } from 'utils/locations'
import styles from './list-dropdown.module.scss'
import { FieldOfActivity, Locations } from 'types/index'

interface ListDropdownProps {
  onSelectFieldOfActivity: (field: FieldOfActivity | null) => void
  onSelectLocation: (location: Locations | null) => void
}

export function ListDropdown({ onSelectFieldOfActivity, onSelectLocation }: ListDropdownProps) {
  return (
    <div className={styles.body}>
      <div className={styles.listDropdown}>
        <Input size={InputSize.Large} className={styles.listDropdownSize} placeholder={'Ключевые слова'} />
        <Dropdown
          onSelectItem={item => onSelectFieldOfActivity(item ? item.id : null)}
          inputBaseSize={InputSize.Large}
          placeholder={'Категория'}
          items={FIELDS_OF_ACTIVITY_TO_DROPDOWN_ITEMS}
        />
        <Dropdown
          onSelectItem={item => onSelectLocation(item ? item.id : null)}
          inputBaseSize={InputSize.Large}
          placeholder={'Населенный пункт'}
          items={LOCATIONS_TO_DROPDOWN_ITEMS}
        />
      </div>
      <Button className={styles.button} children={'Найти'} />
    </div>
  )
}
