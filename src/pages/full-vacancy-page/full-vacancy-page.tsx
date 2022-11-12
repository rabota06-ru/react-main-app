import { SimilarVacanciesSection } from './components/similar-vacancies-section/similar-vacancies-section'
import styles from './full-vacancy-page.module.scss'

interface FullVacancyPageProps {}

export function FullVacancyPage(props: FullVacancyPageProps) {
  return (
    <div className={styles.main}>
      <SimilarVacanciesSection />
    </div>
  )
}
