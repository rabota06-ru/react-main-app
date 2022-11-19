import { Button, ButtonSize } from 'kit/components/button'
import { Container } from 'kit/components/container'
import cn from 'classnames'
import { useMediaValue } from 'hooks/use-media-value'
import styles from './find-your-job-section.module.scss'
import firstImage from './first.png'
import secondImage from './second.png'
import thirdImage from './third.png'
import fourthImage from './fourth.png'
import fifthImage from './fifth.png'

export function FindYourJobSection() {
  const buttonSize = useMediaValue({ xs: ButtonSize.Small, sm: ButtonSize.Medium })

  return (
    <div className={styles.section}>
      <Container className={styles.sectionContainer}>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionContentTitle}>
            Найди работу <span className={styles.sectionContentTitleSelected}>прямо сейчас!</span>
          </h2>
          <Button isShadow size={buttonSize} className={styles.sectionContentButton}>
            Вход и регистрация
          </Button>
          <img className={cn(styles.sectionContentImage, styles.sectionContentImageFirst)} src={firstImage} alt='первая картинка' />
          <img className={cn(styles.sectionContentImage, styles.sectionContentImageSecond)} src={secondImage} alt='вторая картинка' />
          <img className={cn(styles.sectionContentImage, styles.sectionContentImageThird)} src={thirdImage} alt='третья картинка' />
          <img className={cn(styles.sectionContentImage, styles.sectionContentImageFourth)} src={fourthImage} alt='четвёртая картинка' />
          <img className={cn(styles.sectionContentImage, styles.sectionContentImageFifth)} src={fifthImage} alt='пятая картинка' />
        </div>
      </Container>
    </div>
  )
}
