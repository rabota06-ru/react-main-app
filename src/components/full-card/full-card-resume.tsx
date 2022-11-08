import { Card } from 'components/card'
import { Divider } from 'components/divider'
import { Color } from 'types/index'
import { TfiLocationPin } from 'react-icons/Tfi'
import { HiOutlineEye } from 'react-icons/hi'
import { Button, ButtonSize, ButtonVariant } from 'components/button'
import { useState } from 'react'
import icon from './img/Icon.svg'
import favorites from './img/favorites.svg'
import styles from './full-card-resume.module.scss'

interface FullCardResumeProps {
  title: string
  date: string
  city: string
  soughtPosition: string
  education: string
  experience: string
  aboutMe: string
  viewCount: number
  phoneNumber: string
}

export function FullCardResume({
  title,
  date,
  city,
  soughtPosition,
  education,
  experience,
  aboutMe,
  viewCount,
  phoneNumber,
  ...props
}: FullCardResumeProps) {
  const [phoneState, setPhoneState] = useState<boolean>(false)
  const handleShowNumber = () => setPhoneState(phoneState => !phoneState)

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
          <div className={styles.fullCardCityInfoView}>
            <HiOutlineEye className={styles.fullCardCityInfoViewEye} />
            <span>{viewCount} просмотров</span>
          </div>
        </div>
        <Divider size={2} color={Color.SecondaryColor3} />
        <div className={styles.fullCardDescription}>
          <div>
            <h3>Желаяемая должность:</h3>
            <p>{soughtPosition}</p>
          </div>
          <div>
            <h3>Образование:</h3>
            <p>{education}</p>
          </div>
          <div>
            <h3>Опыт работы:</h3>
            <p>{experience}</p>
          </div>
          <div>
            <h3>О себе:</h3>
            <p>{aboutMe}</p>
          </div>
        </div>
        <div className={styles.fullCardDescriptionButtons}>
          <Button variant={ButtonVariant.Primary} size={ButtonSize.Small} isShadow={false}>
            Пригласить
          </Button>
          <Button variant={ButtonVariant.Outline} size={ButtonSize.Small} isShadow={false} onClick={handleShowNumber}>
            {phoneState ? phoneNumber : 'Показать телефон'}
          </Button>
          <img src={favorites} alt='флажок' />
        </div>
      </div>
    </Card>
  )
}
