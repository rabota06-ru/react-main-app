import { Card } from 'components/card'
import { Divider } from 'components/divider'
import { FieldOfActivity, Locations } from 'types/index'
import { CssVariable } from 'utils/get-css-variable'
import { TfiLocationPin } from 'react-icons/tfi'
import { HiOutlineEye } from 'react-icons/hi'
import { Button, ButtonSize, ButtonVariant } from 'components/button'
import { useState, createElement, useMemo } from 'react'
import { Container } from 'components/container'
import cn from 'classnames'
import { FIELDS_OF_ACTIVITY_IMAGE } from 'utils/fields-of-activity'
import { LOCATIONS_LABEL } from 'utils/locations'
import { ReactComponent as Favorite } from './img/favorites.svg'
import styles from './full-card-resume.module.scss'

interface FullCardResumeProps {
  firstname: string
  date: string
  location: number
  soughtPosition: string
  education: string
  experience: string
  aboutMe: string
  viewCount: number
  phoneNumber: string
  phoneHidden: boolean
  headerImage: number
  isFavorite: boolean
}

export function FullCardResume({
  firstname,
  date,
  location,
  soughtPosition,
  education,
  experience,
  aboutMe,
  viewCount,
  phoneNumber,
  phoneHidden,
  headerImage,
  isFavorite,
  ...props
}: FullCardResumeProps) {
  const headerImageComponent = useMemo(() => createElement(FIELDS_OF_ACTIVITY_IMAGE[headerImage as FieldOfActivity]), [headerImage])

  const [phoneState, setPhoneState] = useState<boolean>(false)
  const handleShowNumber = () => {
    if (phoneHidden) {
      setPhoneState(phoneState => !phoneState)
    }
  }
  return (
    <Container>
      <Card className={styles.card} shadow={{ blurRadius: 40, spreadRadius: -25 }}>
        <div {...props} className={styles.fullCard}>
          <div className={styles.fullCardHeader}>
            <div className={styles.fullCardHeaderIcon}>
              <div>{headerImageComponent}</div>
              <h2>{firstname}</h2>
            </div>
            <span>{date}</span>
          </div>
          <Divider size={2} color={CssVariable.SecondaryColor2} />
          <div className={styles.fullCardCity}>
            <div>
              <TfiLocationPin className={styles.fullCardCityIcons} />
              <span className={styles.fullCardCityInfoText}>{LOCATIONS_LABEL[location as Locations]}</span>
            </div>
            <div className={styles.fullCardCityInfoView}>
              <HiOutlineEye className={styles.fullCardCityInfoViewEye} />
              <span>{viewCount} просмотров</span>
            </div>
          </div>
          <Divider size={2} color={CssVariable.SecondaryColor2} />
          <div className={styles.fullCardDescription}>
            {soughtPosition && (
              <div>
                <h3>Желаяемая должность:</h3>
                <p>{soughtPosition}</p>
              </div>
            )}
            {education && (
              <div>
                <h3>Образование:</h3>
                <p>{education}</p>
              </div>
            )}
            {experience && (
              <div>
                <h3>Опыт работы:</h3>
                <p>{experience}</p>
              </div>
            )}
            {aboutMe && (
              <div>
                <h3>О себе:</h3>
                <p>{aboutMe}</p>
              </div>
            )}
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
                <Favorite
                  className={cn(styles.fullCardDescriptionButtonsCheckbox_NoShaded, {
                    [styles.fullCardDescriptionButtonsCheckbox_Shaded]: isFavorite,
                  })}
                />
              </div>
            </div>
          </div>
        </div>
      </Card>
    </Container>
  )
}
