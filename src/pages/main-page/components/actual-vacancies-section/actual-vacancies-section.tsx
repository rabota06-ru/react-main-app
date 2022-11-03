import { Button } from 'components/button'
import { Carousel } from 'components/carousel'
import styles from './actual-vacancies-section.module.scss'

export function ActualVacanciesSection() {
  return (
    <div className={styles.section}>
      <h2 className={styles.sectionTitle}>Актуальные вакансии</h2>
      {/* <Carousel renderItem={} /> */}
      <Button>Посмотреть все вакансии</Button>
    </div>
  )
}
