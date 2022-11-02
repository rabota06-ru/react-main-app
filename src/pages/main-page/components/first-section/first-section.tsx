import { Container } from 'components/container'
import { Card } from 'components/card'
import { Button } from 'components/button'
import cn from 'classnames'
import mainImage from './main-image.png'
import searchEmployeeImage from './search-employee.png'
import searchJobImage from './search-job.png'
import styles from './first-section.module.scss'

export function FirstSection() {
  return (
    <div className={styles.section}>
      <Container className={styles.sectionContainer}>
        <h1 className={styles.sectionTitle}>Найди работу или работника</h1>
        <img src={mainImage} alt='изображение на главном экране' className={styles.sectionImage} />
        <div className={styles.sectionBackgroundLineWrap}>
          <div className={styles.sectionBackgroundLine} />
        </div>
        <div className={styles.sectionActions}>
          <Card className={cn(styles.sectionAction, styles.sectionActionLeft)}>
            <img src={searchEmployeeImage} alt='ищу работника' className={styles.sectionActionImage} />
            <h2 className={styles.sectionActionTitle}>Ищу работника</h2>
            <Button>Разместить вакансию</Button>
            <div className={cn(styles.sectionActionBackground, styles.sectionActionBackgroundLeft)} />
          </Card>

          <Card className={cn(styles.sectionAction, styles.sectionActionRight)}>
            <img src={searchJobImage} alt='ищу работу' className={styles.sectionActionImage} />
            <h2 className={styles.sectionActionTitle}>Ищу работу</h2>
            <Button>Создать резюме</Button>
            <div className={cn(styles.sectionActionBackground, styles.sectionActionBackgroundRight)} />
          </Card>
        </div>
      </Container>
    </div>
  )
}
