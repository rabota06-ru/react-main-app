import React from 'react'
import { FullCardVacancy } from 'components/full-card'
import { useGetVacancyQuery } from 'api/enhancedApi'
import { useParams } from 'react-router-dom'
import { format, parseISO } from 'date-fns'
import ru from 'date-fns/locale/ru'
import { SimilarVacanciesSection } from './components/similar-vacancies-section/similar-vacancies-section'
import styles from './full-vacancy-page.module.scss'

// interface FullVacancyPageProps {}

export function FullVacancyPage() {
  const { vacancyId } = useParams<string>()
  const { data } = useGetVacancyQuery({ vacancyId: vacancyId as string }, { skip: !vacancyId })

  return (
    <div className={styles.main}>
      {data?.vacancy && (
        <FullCardVacancy
          title={data.vacancy.post}
          date={format(parseISO(data.vacancy.createdAt), 'dd MMMM', { locale: ru })}
          price={data.vacancy.salary}
          company={data.vacancy.employer.companyName}
          location={data.vacancy.placeOfWork}
          viewCount={data.vacancy.views}
          description={data.vacancy.description}
          responsibilities={data.vacancy.duties ? data.vacancy.duties : ''}
          requirements={data.vacancy.requirements ? data.vacancy.requirements : ''}
          schedule={data.vacancy.workingSchedule ? data.vacancy.workingSchedule : ''}
          phoneNumber={data.vacancy.phone}
          headerImage={data.vacancy.fieldOfActivity}
          isFavorite={false}
        />
      )}
      <SimilarVacanciesSection fieldOfActivity={data?.vacancy?.fieldOfActivity as number} vacancyId={vacancyId as string} />
    </div>
  )
}
