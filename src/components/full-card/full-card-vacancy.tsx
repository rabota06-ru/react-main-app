import { Card } from 'components/card'
import { Divider } from 'components/divider'
import { Color, FieldOfActivity } from 'types/index'
import { BiRuble } from 'react-icons/bi'
import { TfiLocationPin } from 'react-icons/Tfi'
import { HiOutlineEye } from 'react-icons/hi'
import { Button, ButtonSize, ButtonVariant } from 'components/button'
import { useState, createElement, useMemo } from 'react'
import { FIELDS_OF_ACTIVITY_IMAGE } from 'utils/fields-of-activity'
import { Container } from 'components/container'
import Fav from './img/favorites.svg'
// import favoritesTrue from './img/favoritesTrue.svg'
// import { ReactComponent as Fav } from './img/favorites.svg'
import styles from './full-card-vacancy.module.scss'

interface FullCardVacancyProps {
  title: string
  date: string
  price: number
  company: string
  city: string
  description: string
  responsibilities: string
  requirements: string
  schedule: string
  viewCount: number
  phoneNumber: string
  headerImage: number
  isFavorite: boolean
}

export function FullCardVacancy({
  title,
  date,
  price,
  company,
  city,
  description,
  responsibilities,
  requirements,
  schedule,
  viewCount,
  phoneNumber,
  headerImage,
  isFavorite,
  ...props
}: FullCardVacancyProps) {
  const headerImageComponent = useMemo(() => createElement(FIELDS_OF_ACTIVITY_IMAGE[headerImage as FieldOfActivity]), [headerImage])

  const [phoneState, setPhoneState] = useState<boolean>(false)

  const handleShowNumber = () => setPhoneState(phoneState => !phoneState)

  return (
    <Container>
      <Card shadow={{ blurRadius: 5, spreadRadius: 5 }}>
        <div className={styles.fullCard}>
          <div className={styles.fullCardHeader}>
            <div className={styles.fullCardHeaderIcon}>
              {headerImageComponent}
              <h2>{title}</h2>
            </div>
            <span>{date}</span>
          </div>
          <Divider size={2} color={Color.SecondaryColor2} />
          <div className={styles.fullCardSalary}>
            <div className={styles.fullCardSalaryInfoPrice}>
              <div>
                <BiRuble className={styles.fullCardSalaryIcons} />
                <span className={styles.fullCardSalaryInfoText}>{price} руб</span>
              </div>
              <div>
                <span className={styles.fullCardSalaryInfoPriceView}>{company}</span>
              </div>
            </div>
            <div className={styles.fullCardSalaryInfoCity}>
              <div>
                <TfiLocationPin className={styles.fullCardSalaryIcons} />
                <span className={styles.fullCardSalaryInfoText}>{city}</span>
              </div>
              <div className={styles.fullCardSalaryInfoPriceView}>
                <HiOutlineEye className={styles.fullCardSalaryInfoPriceViewEye} />
                <span>{viewCount} просмотров</span>
              </div>
            </div>
          </div>
          <Divider size={2} color={Color.SecondaryColor2} />
          <div className={styles.fullCardDescription}>
            <div>
              <p>{description}</p>
            </div>
            <div>
              <h3>Обязанности:</h3>
              <p>{responsibilities}</p>
            </div>
            <div>
              <h3>Требования:</h3>
              <p>{requirements}</p>
            </div>
            <div>
              <h3>Рабочий график</h3>
              <p>{schedule}</p>
            </div>
          </div>
          <div className={styles.fullCardDescriptionButtons}>
            <Button variant={ButtonVariant.Primary} size={ButtonSize.Medium} isShadow={false}>
              Откликнуться
            </Button>
            <Button variant={ButtonVariant.Outline} size={ButtonSize.Medium} isShadow={false} onClick={handleShowNumber}>
              {phoneState ? phoneNumber : 'Показать телефон'}
            </Button>
            <div>
              <img src={Fav} alt='флажок' />
            </div>
          </div>
        </div>
      </Card>
    </Container>
  )
}
