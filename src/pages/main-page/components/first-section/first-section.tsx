import { Container } from 'kit/components/container'
import { Card } from 'kit/components/card'
import { Button, ButtonSize } from 'kit/components/button'
import cn from 'classnames'
import { useMediaValue } from 'hooks/use-media-value'
import { CARD_DEFAULT_SHADOW } from 'kit/components/card/card.constants'
import { CardShadow } from 'kit/components/card/card.types'
import mainImage from './main-image.png'
import searchEmployeeImage from './search-employee.png'
import searchJobImage from './search-job.png'
import styles from './first-section.module.scss'

export function FirstSection() {
  const cardsShadow = useMediaValue<CardShadow>({ xs: 'none', sm: CARD_DEFAULT_SHADOW })
  const buttonSize = useMediaValue({ xs: ButtonSize.Small, sm: ButtonSize.Medium })

  return (
    <div className={styles.section}>
      <Container className={styles.sectionContainer}>
        <h1 className={styles.sectionTitle}>Найди работу или работника</h1>
        <img src={mainImage} alt='изображение на главном экране' className={styles.sectionImage} />
        <div className={styles.sectionBackgroundLineWrap}>
          <div className={styles.sectionBackgroundLine} />
        </div>
        <br />
        <div className={styles.sectionActions}>
          <Card shadow={cardsShadow} className={cn(styles.sectionAction, styles.sectionActionLeft)}>
            <img src={searchEmployeeImage} alt='ищу работника' className={styles.sectionActionImage} />
            <h2 className={styles.sectionActionTitle}>Ищу работника</h2>
            <Button size={buttonSize} className={styles.sectionActionButton}>
              Разместить вакансию
            </Button>
            <div className={cn(styles.sectionActionBackground, styles.sectionActionBackgroundLeft)} />
          </Card>
          <Card shadow={cardsShadow} className={cn(styles.sectionAction, styles.sectionActionRight)}>
            <img src={searchJobImage} alt='ищу работу' className={styles.sectionActionImage} />
            <h2 className={styles.sectionActionTitle}>Ищу работу</h2>
            <Button size={buttonSize} className={styles.sectionActionButton}>
              Создать резюме
            </Button>
            <div className={cn(styles.sectionActionBackground, styles.sectionActionBackgroundRight)} />
          </Card>
        </div>
      </Container>
    </div>
  )
}
