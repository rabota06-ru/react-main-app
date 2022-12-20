import { useGetResumeQuery } from 'api/enhancedApi'
import { FullCardResume } from 'components/full-card'
import { useParams } from 'react-router-dom'
import { format, parseISO } from 'date-fns'
import ru from 'date-fns/locale/ru'
import { SimilarResumesSection } from './components/similar-resumes-section/similar-resumes-section'
import styles from './full-resume-page.module.scss'

// interface FullResumePageProps {}

export function FullResumePage() {
  const { resumeId } = useParams<string>()
  const { data } = useGetResumeQuery({ resumeId: resumeId as string }, { skip: !resumeId })

  return (
    <div className={styles.main}>
      {data?.resume && (
        <FullCardResume
          firstname={data.resume.firstname}
          date={format(parseISO(data.resume.createdAt), 'dd MMMM', { locale: ru })}
          location={data.resume.placeOfResidence}
          soughtPosition={data.resume.desiredPost ? data.resume.desiredPost : ''}
          education={data.resume.education ? data.resume.education : ''}
          experience={data.resume.experience ? data.resume.experience : ''}
          aboutMe={data.resume.aboutMe ? data?.resume.aboutMe : ''}
          viewCount={data.resume.views}
          phoneNumber={data.resume.phone}
          phoneHidden={data.resume.phoneHidden}
          headerImage={data.resume.fieldOfActivity}
          isFavorite={false}
        />
      )}
      <SimilarResumesSection fildOfActivity={data?.resume?.fieldOfActivity as number} id={data?.resume?.id as string} />
    </div>
  )
}
