import { useGetVacanciesWithResponsesQuery } from 'api/enhancedApi'
import useTypedSelector from 'hooks/use-typed-selector'
import { VacancyCard } from './vacancy-card'

export function ResponsesToVacancies() {
  const user = useTypedSelector(state => state.auth.user)
  const getVacanciesWithResponsesData = useGetVacanciesWithResponsesQuery({ userId: user!.id }, { skip: user === null })

  return (
    <div>
      {getVacanciesWithResponsesData.data?.vacancies.map(vacancy => (
        <VacancyCard key={vacancy.id} vacancy={vacancy} />
      ))}
    </div>
  )
}
