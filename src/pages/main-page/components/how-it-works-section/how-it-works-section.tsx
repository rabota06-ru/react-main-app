import { Card } from 'components/card'
import { Container } from 'components/container'
import { CgArrowLongDown } from 'react-icons/cg'
import cn from 'classnames'
import styles from './how-it-works-section.module.scss'
import searchJobImage from './search-job.png'
import searchJobFirstStepImage from './search-job-first-step.png'
import searchJobSecondStepImage from './search-job-second-step.png'
import searchJobThirdStepImage from './search-job-third-step.png'
import searchEmployeeImage from './search-employee.png'
import searchEmployeeFirstStepImage from './search-employee-first-step.png'
import searchEmployeeSecondStepImage from './search-employee-second-step.png'
import searchEmployeeThirdStepImage from './search-employee-third-step.png'

export function HowItWorksSection() {
  return (
    <div className={styles.section} id='how-it-works'>
      <Container className={styles.sectionContainer}>
        <h2 className={styles.sectionTitle}>Как это работает?</h2>
        <div className={styles.sectionCards}>
          <div className={styles.sectionCardContainer}>
            <p className={styles.sectionCardContainerTitle}>Если ищу работу</p>
            <Card className={cn(styles.sectionCard, styles.sectionCardLeft)}>
              <img className={styles.sectionCardImage} src={searchJobImage} alt='Если ищу работу' />
              <div className={styles.sectionCardStep}>
                <div className={styles.sectionCardStepImageContainer}>
                  <img src={searchJobFirstStepImage} alt='Нажмите «Ищу работу»' />
                </div>
                <p className={styles.sectionCardStepTitle}>Нажмите «Ищу работу»</p>
              </div>
              <CgArrowLongDown size={30} className={styles.sectionCardStepToStepArrow} />
              <div className={styles.sectionCardStep}>
                <div className={styles.sectionCardStepImageContainer}>
                  <img src={searchJobSecondStepImage} alt='Заполняете резюме' />
                </div>
                <p className={styles.sectionCardStepTitle}>Заполняете резюме</p>
              </div>
              <CgArrowLongDown size={30} className={styles.sectionCardStepToStepArrow} />
              <div className={styles.sectionCardStep}>
                <div className={styles.sectionCardStepImageContainer}>
                  <img src={searchJobThirdStepImage} alt='Откликаетесь на все понравившиеся вакансии' />
                </div>
                <p className={styles.sectionCardStepTitle}>Откликаетесь на все понравившиеся вакансии</p>
              </div>
            </Card>
          </div>
          <div className={styles.sectionCardContainer}>
            <p className={styles.sectionCardContainerTitle}>Если ищу работника</p>
            <Card className={cn(styles.sectionCard, styles.sectionCardRight)}>
              <img className={styles.sectionCardImage} src={searchEmployeeImage} alt='Если ищу работника' />
              <div className={styles.sectionCardStep}>
                <div className={styles.sectionCardStepImageContainer}>
                  <img src={searchEmployeeFirstStepImage} alt='Ищу работника' />
                </div>
                <p className={styles.sectionCardStepTitle}>Ищу работника</p>
              </div>
              <CgArrowLongDown size={30} className={styles.sectionCardStepToStepArrow} />
              <div className={styles.sectionCardStep}>
                <div className={styles.sectionCardStepImageContainer}>
                  <img src={searchEmployeeSecondStepImage} alt='Заполняете вакансию' />
                </div>
                <p className={styles.sectionCardStepTitle}>Заполняете резюме</p>
              </div>
              <CgArrowLongDown size={30} className={styles.sectionCardStepToStepArrow} />
              <div className={styles.sectionCardStep}>
                <div className={styles.sectionCardStepImageContainer}>
                  <img src={searchEmployeeThirdStepImage} alt='Получаете отклики от соискателей и доступ ко всей базе резюме' />
                </div>
                <p className={styles.sectionCardStepTitle}>Получаете отклики от соискателей и доступ ко всей базе резюме</p>
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  )
}
