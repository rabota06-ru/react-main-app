import { GetVacancyResponsesQuery } from 'api/generated'
import { Button, ButtonVariant } from 'kit/components/button'
import { Divider } from 'kit/components/divider'
import { format } from 'date-fns'
import ru from 'date-fns/locale/ru'
import { routes } from 'pages/routes'
import { createElement, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { FIELDS_OF_ACTIVITY_IMAGE, numberToFieldOfActivity } from 'utils/fields-of-activity'
import styles from './responses-to-vacancies.module.scss'

interface ResponseToVacancyProps {
  response: GetVacancyResponsesQuery['responseToVacancies'][number]
}

export function ResponseToVacancy({ response }: ResponseToVacancyProps) {
  const navigate = useNavigate()

  const goToChatWithApplicant = useCallback(
    (applicantId: string) => navigate(routes.personalAccount.nested.messages.nested.chat(applicantId).absoluteExact),
    [navigate]
  )

  return (
    <div className={styles.responseToVacancy}>
      <div className={styles.responseToVacancyTop}>
        <div className={styles.responseToVacancyTopLeft}>
          <p className={styles.responseToVacancyTopLeftTitle}>От кого: {response.resume.firstname}</p>
          <div className={styles.responseToVacancyTopLeftIconContainer}>
            {createElement(FIELDS_OF_ACTIVITY_IMAGE[numberToFieldOfActivity(response.resume.fieldOfActivity)])}
          </div>
        </div>
        <p>{format(new Date(response.createdAt), 'HH:mm, d MMMM', { locale: ru })}</p>
      </div>
      <Divider className={styles.responseToVacancyDivider} />
      {response.coverLetter && <p className={styles.responseToVacancyCoverLetter}>{response.coverLetter}</p>}
      <div className={styles.responseToVacancyActions}>
        <Button onClick={() => goToChatWithApplicant(response.resume.applicantProfileId)}>Ответить</Button>
        <Button variant={ButtonVariant.Outline}>Показать телефон</Button>
      </div>
    </div>
  )
}
