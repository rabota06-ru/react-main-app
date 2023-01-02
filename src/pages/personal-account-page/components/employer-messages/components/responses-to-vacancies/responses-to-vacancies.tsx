import { useLazyGetVacanciesWithResponsesQuery } from 'api/enhancedApi'
import useTypedSelector from 'hooks/use-typed-selector'
import { InfinityList } from 'kit/components/infinity-list/infinity-list'
import { VacancyCard } from './vacancy-card'
import styles from './responses-to-vacancies.module.scss'

export function ResponsesToVacancies() {
  const user = useTypedSelector(state => state.auth.user)
  const [getVacanciesWithResponses] = useLazyGetVacanciesWithResponsesQuery()

  const handleFetchVacancies = async (page: number, count: number) => {
    const response = await getVacanciesWithResponses({ userId: user!.id, take: count, skip: (page - 1) * count }).unwrap()
    return response.vacancies
  }

  return (
    <div className={styles.responsesToVacancies}>
      <InfinityList
        renderItem={vacancy => <VacancyCard key={vacancy.id} vacancy={vacancy} />}
        loadableItemsCount={20}
        fetchItems={handleFetchVacancies}
      />
    </div>
  )
}
