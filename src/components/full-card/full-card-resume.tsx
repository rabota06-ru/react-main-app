import { Card } from 'components/card'
import { Divider } from 'components/divider'
import { Color } from 'types/index'
import { TfiLocationPin } from 'react-icons/Tfi'
import icon from './img/Icon.svg'
import styles from './full-card-resume.module.scss'

interface FullCardResumeProps {
  title: string
  date: string
  city: string
  soughtPosition: string
  education: string
  experience: string
  aboutMe: string
}

export function FullCardResume({ title, date, city, soughtPosition, education, experience, aboutMe, ...props }: FullCardResumeProps) {
  return (
    <Card shadow={{ blurRadius: 5, spreadRadius: 5 }}>
      <div className={styles.fullCard}>
        <div className={styles.fullCardHeader}>
          <div className={styles.fullCardHeaderIcon}>
            <img src={icon} alt='Иконка' />
            <h2>{title}</h2>
          </div>
          <span>{date}</span>
        </div>
        <Divider size={2} color={Color.SecondaryColor3} />
        <div className={styles.fullCardCity}>
          <div>
            <TfiLocationPin className={styles.fullCardCityIcons} />
            <span className={styles.fullCardCityInfoText}>{city}</span>
          </div>
          <div>
            <span className={styles.fullCardCityInfoView}>77 просмотров</span>
          </div>
        </div>
        <Divider size={2} color={Color.SecondaryColor3} />
      </div>
    </Card>
  )
}
