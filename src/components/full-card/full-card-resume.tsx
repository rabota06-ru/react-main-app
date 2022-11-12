import { Card } from 'components/card'
import { Divider } from 'components/divider'
import { Color, FieldOfActivity } from 'types/index'
import { TfiLocationPin } from 'react-icons/Tfi'
import { HiOutlineEye } from 'react-icons/hi'
import { Button, ButtonSize, ButtonVariant } from 'components/button'
import { useState, createElement, useMemo } from 'react'
import { Container } from 'components/container'
import cn from 'classnames'
import { FIELDS_OF_ACTIVITY_IMAGE } from 'utils/fields-of-activity'
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
        <div {...props} className={styles.fullCard}>
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
            <div>
              <Button variant={ButtonVariant.Outline} size={ButtonSize.Medium} isShadow={false} onClick={handleShowNumber}>
                {phoneState ? phoneNumber : 'Показать телефон'}
              </Button>
              <div className={styles.fullCardDescriptionButtonsCheckbox}>
                <svg
                  className={cn(styles.fullCardDescriptionButtonsCheckbox_NoShaded, {
                    [styles.fullCardDescriptionButtonsCheckbox_Shaded]: isFavorite,
                  })}
                  width='40'
                  height='49'
                  viewBox='0 0 40 49'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M0.5 2C0.5 1.17157 1.17157 0.5 2 0.5H38C38.8284 0.5 39.5 1.17157 39.5 2V46.3915C39.5 47.5697 38.2041 48.2879 37.205 47.6635L21.325 37.7385C20.5143 37.2318 19.4857 37.2318 18.675 37.7385L2.795 47.6635C1.79593 48.2879 0.5 47.5697 0.5 46.3915V2Z'
                    stroke='#395DDE'
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </Container>
  )
}
