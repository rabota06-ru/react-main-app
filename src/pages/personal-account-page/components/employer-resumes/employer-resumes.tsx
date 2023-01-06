import { UserRole } from 'api/generated'
import { AllResumesList } from 'components/resumes-list/resumes-list'
import useTypedSelector from 'hooks/use-typed-selector'
import { Box } from 'kit/components/box'
import { Button } from 'kit/components/button'
import { Dropdown, DropdownItem } from 'kit/components/dropdown'
import { Input } from 'kit/components/input'
import { Switch } from 'kit/components/switch/switch'
import { ChangeEvent, useState } from 'react'
import { AuthenticatedUser } from 'store/slices/auth.slice'
import { FieldOfActivity, Locations } from 'types/index'
import { FIELDS_OF_ACTIVITY } from 'utils/fields-of-activity'
import { LOCATIONS } from 'utils/locations'
import styles from './employer-resumes.module.scss'
import { Filters } from './employer-resumes.types'

export function EmployerResumes() {
  const [filters, setFilters] = useState<Filters>({ keywords: '', fieldOfActivity: null, location: null })
  const [isOnlySaved, setIsOnlySaved] = useState(true)
  const employerId = useTypedSelector(state => (state.auth.user as AuthenticatedUser<UserRole.Employer>).employerId)

  const handleChangeKeywords = (event: ChangeEvent<HTMLInputElement>) => {
    setFilters(prev => ({ ...prev, keywords: event.target.value }))
  }

  const handleSelectFieldOfActivity = (item: DropdownItem<FieldOfActivity> | null) => {
    setFilters(prev => ({ ...prev, fieldOfActivity: item?.id ?? null }))
  }

  const handleSelectLocation = (item: DropdownItem<Locations> | null) => {
    setFilters(prev => ({ ...prev, location: item?.id ?? null }))
  }

  return (
    <Box w100 h100 pt={10}>
      <p className={styles.resumesTitle}>Резюме</p>
      <Box dg gtc='1fr 1fr 1fr' g={10} mh={40} mb={20}>
        <Input value={filters.keywords} onChange={handleChangeKeywords} placeholder='Ключевые слова' />
        <Dropdown
          items={FIELDS_OF_ACTIVITY}
          onSelectItem={handleSelectFieldOfActivity}
          selectedItemId={filters.fieldOfActivity}
          placeholder='Категория'
        />
        <Dropdown items={LOCATIONS} onSelectItem={handleSelectLocation} selectedItemId={filters.location} placeholder='Населённый пункт' />
      </Box>
      <Box w100 df jcc mh={40} mb={10}>
        <Button isShadow>Найти</Button>
      </Box>
      <Box df aic g={15} ml={40}>
        <Switch checked={isOnlySaved} onChange={event => setIsOnlySaved(event.target.checked)} />
        <p className={styles.resumesOnlySaved}>Избранные</p>
      </Box>
      <AllResumesList filters={filters} onlySavedForEmployerWithId={isOnlySaved ? employerId : undefined} />
    </Box>
  )
}
