import { useLazyGetEmployerArchivedVacanciesQuery } from 'api/enhancedApi'
import useTypedSelector from 'hooks/use-typed-selector'
import { InfinityList } from 'kit/components/infinity-list'
import { useCallback } from 'react'
import { ArchivedVacancy } from './components/archived-vacancy/archived-vacancy'

export function ArchivedVacancies() {
  const userId = useTypedSelector(state => state.auth.user!.id)
  const [getArchivedVacanciesQuery] = useLazyGetEmployerArchivedVacanciesQuery()

  const getArchivedVacancies = useCallback(
    (page: number, count: number) => {
      return getArchivedVacanciesQuery({ userId, skip: (page - 1) * count, take: count })
        .unwrap()
        .then(response => response.vacancies)
    },
    [userId]
  )

  return (
    <InfinityList
      loadableItemsCount={20}
      fetchItems={getArchivedVacancies}
      renderItem={vacancy => <ArchivedVacancy vacancy={vacancy} />}
      ph={40}
      pt={40}
    />
  )
}
