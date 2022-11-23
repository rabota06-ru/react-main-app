import { useLazyGetVacancyResponsesQuery } from 'api/enhancedApi'
import { GetVacanciesWithResponsesQuery } from 'api/generated'
import { Button, ButtonSize, ButtonVariant } from 'kit/components/button'
import { Card } from 'kit/components/card'
import { Divider } from 'kit/components/divider'
import { format } from 'date-fns'
import ru from 'date-fns/locale/ru'
import { createElement, useCallback, useState } from 'react'
import { FIELDS_OF_ACTIVITY_IMAGE, numberToFieldOfActivity } from 'utils/fields-of-activity'
import { ResponseToVacancy } from './response-to-vacancy'
import styles from './responses-to-vacancies.module.scss'

interface VacancyCardProps {
  vacancy: GetVacanciesWithResponsesQuery['vacancies'][number]
}

export function VacancyCard({ vacancy }: VacancyCardProps) {
  const [isResponsesShown, setIsResponsesShown] = useState(false)
  const [getVacancyResponsesQuery, getVacancyResponsesData] = useLazyGetVacancyResponsesQuery({})

  const toggleResponses = useCallback(
    (vacancyId: string) => {
      setIsResponsesShown(prev => !prev)
      getVacancyResponsesQuery({ vacancyId })
    },
    [getVacancyResponsesQuery]
  )

  return (
    <div key={vacancy.id} className={styles.vacancyCardContainer}>
      <Card className={styles.vacancyCard}>
        <div className={styles.vacancyCardTop}>
          <div className={styles.vacancyCardTopLeft}>
            <div className={styles.vacancyCardTopLeftIconContainer}>
              {createElement(FIELDS_OF_ACTIVITY_IMAGE[numberToFieldOfActivity(vacancy.fieldOfActivity)])}
            </div>
            <p className={styles.vacancyCardTopLeftTitle}>{vacancy.post}</p>
          </div>
          <div className={styles.vacancyCardTopRight}>
            <p>{format(new Date(vacancy.createdAt), 'd MMMM', { locale: ru })}</p>
            <p>{vacancy.views} просмотров</p>
          </div>
        </div>
        <Divider />
        <div className={styles.vacancyCardContent}>
          <div>
            <p>{vacancy.salary} руб</p>
            <p>Назрань</p>
          </div>
          <div className={styles.vacancyCardContentActions}>
            <Button>Посмотреть</Button>
            <Button variant={ButtonVariant.Outline}>В архив</Button>
          </div>
        </div>
      </Card>
      <Button
        size={ButtonSize.ExtraSmall}
        variant={ButtonVariant.Text}
        isLoading={getVacancyResponsesData.isLoading}
        onClick={() => toggleResponses(vacancy.id)}
      >
        {isResponsesShown ? 'скрыть' : 'показать'} сообщения
      </Button>
      {isResponsesShown && (
        <div className={styles.vacancyCardResponses}>
          {getVacancyResponsesData.data?.responseToVacancies.map(response => (
            <ResponseToVacancy key={response.id} response={response} />
          ))}
        </div>
      )}
    </div>
  )
}
