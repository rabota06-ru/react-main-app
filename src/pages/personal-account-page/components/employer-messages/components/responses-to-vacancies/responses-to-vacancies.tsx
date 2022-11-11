import { useGetVacanciesWithResponsesQuery, useLazyGetVacancyResponsesQuery } from 'api/enhancedApi'
import { Button, ButtonSize } from 'components/button'
import { Card } from 'components/card'
import useTypedSelector from 'hooks/use-typed-selector'
import { routes } from 'pages/routes'
import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './responses-to-vacancies.module.scss'

export function ResponsesToVacancies() {
  const user = useTypedSelector(state => state.auth.user)
  const getVacanciesWithResponsesData = useGetVacanciesWithResponsesQuery({ userId: user!.id }, { skip: user === null })
  const [getVacancyResponsesQuery, getVacancyResponsesData] = useLazyGetVacancyResponsesQuery()
  const navigate = useNavigate()

  const getVacancyResponses = useCallback(
    (vacancyId: string) => {
      getVacancyResponsesQuery({ vacancyId })
    },
    [getVacancyResponsesQuery]
  )

  const goToChatWithApplicant = useCallback(
    (applicantId: string) => navigate(routes.personalAccountChat.absoluteExact(applicantId)),
    [navigate]
  )

  return (
    <div className={styles.responses}>
      {getVacanciesWithResponsesData.data?.vacancies.map(vacancy => (
        <div key={vacancy.id}>
          <Card>
            <p>{vacancy.post}</p>
            <p>{vacancy.responses.length}</p>
          </Card>
          <Button
            size={ButtonSize.ExtraSmall}
            isLoading={getVacancyResponsesData.isLoading}
            onClick={() => getVacancyResponses(vacancy.id)}
          >
            показать сообщения
          </Button>
          <div>
            {getVacancyResponsesData.data?.responseToVacancies.map(response => (
              <div key={response.id}>
                <p>{response.resume.firstname}</p>
                <p>{response.coverLetter}</p>
                <Button size={ButtonSize.ExtraSmall} onClick={() => goToChatWithApplicant(response.resume.applicantProfileId)}>
                  ответить
                </Button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
