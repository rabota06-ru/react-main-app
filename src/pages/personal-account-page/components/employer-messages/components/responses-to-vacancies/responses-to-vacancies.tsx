import { useGetVacanciesWithResponsesQuery } from 'api/enhancedApi'
import useTypedSelector from 'hooks/use-typed-selector'
import styles from './responses-to-vacancies.module.scss'
import { VacancyCard } from './vacancy-card'

export function ResponsesToVacancies() {
  const user = useTypedSelector(state => state.auth.user)
  const getVacanciesWithResponsesData = useGetVacanciesWithResponsesQuery({ userId: user!.id }, { skip: user === null })

  return (
    <div className={styles.responses}>
      {getVacanciesWithResponsesData.data?.vacancies.map(vacancy => (
        <VacancyCard key={vacancy.id} vacancy={vacancy} />
      ))}
    </div>
  )
}
