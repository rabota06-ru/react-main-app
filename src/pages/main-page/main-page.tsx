import { ActualVacanciesSection } from './components/actual-vacancies-section/actual-vacancies-section'
import { FirstSection } from './components/first-section/first-section'
import { HowItWorksSection } from './components/how-it-works-section/how-it-works-section'
import { ResumesSection } from './components/resumes-section/resumes-section'
import styles from './main-page.module.scss'

export function MainPage() {
  return (
    <div className={styles.main}>
      <FirstSection />
      <ActualVacanciesSection />
      <ResumesSection />
      <HowItWorksSection />
    </div>
  )
}
