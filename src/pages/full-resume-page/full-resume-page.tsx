import { SimilarResumesSection } from './components/similar-resumes-section/similar-resumes-section'
import styles from './full-resume-page.module.scss'

interface FullResumePageProps {}

export function FullResumePage(props: FullResumePageProps) {
  return (
    <div className={styles.main}>
      <SimilarResumesSection />
    </div>
  )
}
