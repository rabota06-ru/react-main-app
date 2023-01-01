import { useGetVacanciesWithResponsesQuery } from 'api/enhancedApi'
import useTypedSelector from 'hooks/use-typed-selector'
import { useState } from 'react'
import { VacancyCard } from './vacancy-card'

const FETCH_RESPONSES_COUNT = 10

export function ResponsesToVacancies() {
  const user = useTypedSelector(state => state.auth.user)
  const [page, setPage] = useState(1)
  const getVacanciesWithResponsesData = useGetVacanciesWithResponsesQuery(
    { userId: user!.id, skip: (page - 1) * FETCH_RESPONSES_COUNT, take: FETCH_RESPONSES_COUNT },
    { skip: user === null }
  )

  return (
    <div>
      {getVacanciesWithResponsesData.data?.vacancies.map(vacancy => (
        <VacancyCard key={vacancy.id} vacancy={vacancy} />
      ))}
    </div>
  )
}
