import { Container } from 'kit/components/container'
import { List } from 'components/list'
import { ListDropdown } from 'components/list-dropdown'
import { ItemType } from 'components/list/list'
import styles from './all-vacancies-page.module.scss'
import { useGetVacanciesQuery } from 'api/enhancedApi'
import { FieldOfActivity, Locations } from 'types/index'
import { useState } from 'react'

export function AllVacanciesPage() {
  const [selectedFieldOfActivity, setSelectedFieldOfActivity] = useState<FieldOfActivity | null>(null)
  const [selectedLocation, setSelectedLocation] = useState<Locations | null>(null)
  const getVacanciesData = useGetVacanciesQuery(
    {
      fieldOfActivity: selectedFieldOfActivity as number,
      placeOfWork: selectedLocation as number,
      skip: 0,
      take: 20,
    },
    {
      skip: selectedFieldOfActivity === null || selectedLocation === null,
    }
  )

  return (
    <div className={styles.allVacanciesPage}>
      <Container>
        <ListDropdown onSelectFieldOfActivity={setSelectedFieldOfActivity} onSelectLocation={setSelectedLocation} />
      </Container>
      <div className={styles.allVacanciesPageList}>
        <List items={getVacanciesData.data?.vacancies ?? []} type={ItemType.Vacancy} />
      </div>
    </div>
  )
}
