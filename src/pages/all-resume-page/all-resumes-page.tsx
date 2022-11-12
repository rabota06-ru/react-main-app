import { Container } from 'components/container'
import { List } from 'components/list'
import { ListDropdown } from 'components/list-dropdown'
import { ItemType } from 'components/list/list'
import styles from './all-Resumes-page.module.scss'
import { useGetResumesQuery } from 'api/enhancedApi'
import { FieldOfActivity, Locations } from 'types/index'
import { useState } from 'react'

export function AllResumesPage() {
  const [selectedFieldOfActivity, setSelectedFieldOfActivity] = useState<FieldOfActivity | null>(null)
  const [selectedLocation, setSelectedLocation] = useState<Locations | null>(null)
  const getResumesData = useGetResumesQuery(
    {
      fieldOfActivity: selectedFieldOfActivity as number,
      placeOfResidence: selectedLocation as number,
      skip: 0,
      take: 20,
    },
    {
      skip: selectedFieldOfActivity === null || selectedLocation === null,
    }
  )

  return (
    <div className={styles.allResumesPage}>
      <Container>
        <ListDropdown onSelectFieldOfActivity={setSelectedFieldOfActivity} onSelectLocation={setSelectedLocation} />
      </Container>
      <div className={styles.allResumesPageList}>
        <List items={getResumesData.data?.resumes ?? []} type={ItemType.Resume} />
      </div>
    </div>
  )
}
