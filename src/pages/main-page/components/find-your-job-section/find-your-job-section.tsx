import { Button } from 'components/button'
import { Container } from 'components/container'
import cn from 'classnames'
import styles from './find-your-job-section.module.scss'
import firstImage from './first.png'
import secondImage from './second.png'
import thirdImage from './third.png'
import fourthImage from './fourth.png'
import fifthImage from './fifth.png'

export function FindYourJobSection() {
  return (
    <Container className={styles.section}>
      <div className={styles.sectionContent}>
        <h2 className={styles.sectionContentTitle}>
          Найди работу <span className={styles.sectionContentTitleSelected}>прямо сейчас!</span>
        </h2>
        <Button isShadow>Вход и регистрация</Button>
        <img className={cn(styles.sectionContentImage, styles.sectionContentImageFirst)} src={firstImage} alt='первая картинка' />
        <img className={cn(styles.sectionContentImage, styles.sectionContentImageSecond)} src={secondImage} alt='вторая картинка' />
        <img className={cn(styles.sectionContentImage, styles.sectionContentImageThird)} src={thirdImage} alt='третья картинка' />
        <img className={cn(styles.sectionContentImage, styles.sectionContentImageFourth)} src={fourthImage} alt='четвёртая картинка' />
        <img className={cn(styles.sectionContentImage, styles.sectionContentImageFifth)} src={fifthImage} alt='пятая картинка' />
      </div>
    </Container>
  )
}
