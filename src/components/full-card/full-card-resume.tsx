import { Card } from 'components/card'
import { Divider } from 'components/divider'
import { Color, FieldOfActivity } from 'types/index'
import { TfiLocationPin } from 'react-icons/Tfi'
import { HiOutlineEye } from 'react-icons/hi'
import { Button, ButtonSize, ButtonVariant } from 'components/button'
import { useState, createElement, useMemo } from 'react'
import { Container } from 'components/container'
import { FIELDS_OF_ACTIVITY_IMAGE } from 'utils/fields-of-activity'
import favorites from './img/favorites.svg'
// import favoritesTrue from './img/favoritesTrue.svg'
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
  headerImage: number
  isFavorite: boolean
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
  headerImage,
  isFavorite,
  ...props
}: FullCardResumeProps) {
  const headerImageComponent = useMemo(() => createElement(FIELDS_OF_ACTIVITY_IMAGE[headerImage as FieldOfActivity]), [headerImage])

  const [phoneState, setPhoneState] = useState<boolean>(false)
  const handleShowNumber = () => setPhoneState(phoneState => !phoneState)

  return (
    <Container>
      <Card className={styles.card} shadow={{ blurRadius: 40, spreadRadius: 5 }}>
        <div className={styles.fullCard}>
          <div className={styles.fullCardHeader}>
            <div className={styles.fullCardHeaderIcon}>
              <div>{headerImageComponent}</div>
              <h2>{title}</h2>
            </div>
            <span>{date}</span>
          </div>
          <Divider size={2} color={Color.SecondaryColor2} />
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
          <Divider size={2} color={Color.SecondaryColor2} />
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
            <Button variant={ButtonVariant.Primary} size={ButtonSize.Medium} isShadow={false}>
              Пригласить
            </Button>
            <Button variant={ButtonVariant.Outline} size={ButtonSize.Medium} isShadow={false} onClick={handleShowNumber}>
              {phoneState ? phoneNumber : 'Показать телефон'}
            </Button>
            <div>
              <img src={favorites} alt='флажок' />
            </div>
          </div>
        </div>
      </Card>
    </Container>
  )
}
