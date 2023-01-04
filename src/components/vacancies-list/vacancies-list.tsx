import { useLazyGetVacanciesQuery } from 'api/enhancedApi'
import { GetVacanciesQuery } from 'api/generated'
import { InfinityList } from 'kit/components/infinity-list'
import { useCallback } from 'react'
import { FieldOfActivity } from 'types/index'

interface VacanciesListProps {
  filters: {
    fieldOfActivity?: FieldOfActivity
  }
  renderVacancy: (vacancy: GetVacanciesQuery['vacancies'][number]) => JSX.Element
}

export function VacanciesList({ filters, renderVacancy }: VacanciesListProps) {
  const [getVacanciesQuery] = useLazyGetVacanciesQuery()

  const getVacancies = useCallback(
    (page: number, count: number) => {
      return getVacanciesQuery({ fieldOfActivity: filters.fieldOfActivity, skip: (page - 1) * count, take: count })
        .unwrap()
        .then(response => response.vacancies)
    },
    [filters]
  )

  return <InfinityList loadableItemsCount={20} distanceToFetch={200} fetchItems={getVacancies} renderItem={renderVacancy} />
}
