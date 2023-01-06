import { useLazyGetAllResumesQuery, useLazyGetOnlySavedResumesQuery } from 'api/enhancedApi'
import { InfinityList } from 'kit/components/infinity-list'
import { useTrigger, useUpdate } from 'kit/hooks'
import { useCallback } from 'react'
import { ResumeCard } from './components/resume-card/resume-card'
import { Filters } from './resumes-list.types'

interface AllResumesListProps {
  filters: Filters
  onlySavedForEmployerWithId?: string
}

export function AllResumesList({ filters, onlySavedForEmployerWithId }: AllResumesListProps) {
  const [getAllResumesQuery] = useLazyGetAllResumesQuery()
  const [getOnlySavedResumesQuery] = useLazyGetOnlySavedResumesQuery()
  const [setResetTrigger, trigger] = useTrigger()

  const getResumes = useCallback(
    (page: number, count: number) => {
      if (onlySavedForEmployerWithId) {
        return getOnlySavedResumesQuery({
          employerId: onlySavedForEmployerWithId,
          fieldOfActivity: filters.fieldOfActivity ?? undefined,
          keywords: filters.keywords,
          location: filters.location ?? undefined,
          skip: (page - 1) * count,
          take: count,
        })
          .unwrap()
          .then(response => response.resumes)
      }

      return getAllResumesQuery({
        keywords: filters.keywords,
        fieldOfActivity: filters.fieldOfActivity ?? undefined,
        location: filters.location ?? undefined,
        skip: (page - 1) * count,
        take: count,
      })
        .unwrap()
        .then(response => response.resumes)
    },
    [filters, onlySavedForEmployerWithId]
  )

  useUpdate(trigger, [filters, onlySavedForEmployerWithId])

  return (
    <InfinityList
      resetTrigger={setResetTrigger}
      fetchItems={getResumes}
      loadableItemsCount={20}
      renderItem={resume => <ResumeCard key={resume.id} resume={resume} />}
      pt={20}
      ph={40}
    />
  )
}
