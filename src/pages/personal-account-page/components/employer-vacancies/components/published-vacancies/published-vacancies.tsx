import { useLazyGetEmployerPublishedVacanciesQuery } from 'api/enhancedApi'
import useTypedSelector from 'hooks/use-typed-selector'
import { InfinityList } from 'kit/components/infinity-list'
import { useCallback } from 'react'
import { PublishedVacancy } from './components/published-vacancy/published-vacancy'

export function PublishedVacancies() {
  const userId = useTypedSelector(state => state.auth.user!.id)
  const [getPublishedVacanciesQeury] = useLazyGetEmployerPublishedVacanciesQuery()

  const getPublishedVacancies = useCallback(
    (page: number, count: number) => {
      return getPublishedVacanciesQeury({ userId, skip: (page - 1) * count, take: count })
        .unwrap()
        .then(response => response.vacancies)
    },
    [userId]
  )
  return (
    <InfinityList
      loadableItemsCount={20}
      fetchItems={getPublishedVacancies}
      renderItem={vacancy => <PublishedVacancy key={vacancy.id} vacancy={vacancy} />}
      ph={40}
      pt={40}
    />
  )
}
