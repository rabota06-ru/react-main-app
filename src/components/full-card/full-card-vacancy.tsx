import { Card } from 'components/card'
import { Divider } from 'components/divider'
import { Color } from 'types/index'
import { BiRuble } from 'react-icons/Bi'
import { TfiLocationPin } from 'react-icons/Tfi'
import { HiOutlineEye } from 'react-icons/hi'
import { Button, ButtonSize, ButtonVariant } from 'components/button'
import { useState } from 'react'
import icon from './img/Icon.svg'
import favorites from './img/favorites.svg'
import styles from './full-card-vacancy.module.scss'

interface FullCardVacancyProps {
  title: string
  date: string
  price: string
  company: string
  city: string
  description: string
  responsibilities: string
  requirements: string
  schedule: string
  viewCount: number
  phoneNumber: string
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
  ...props
}: FullCardVacancyProps) {
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
        <Divider size={2} color={Color.SecondaryColor3} />
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
          <Button variant={ButtonVariant.Primary} size={ButtonSize.Small} isShadow={false}>
            Откликнуться
          </Button>
          <Button variant={ButtonVariant.Outline} size={ButtonSize.Small} isShadow={false} onClick={handleShowNumber}>
            Показать телефон
          </Button>
          <img src={favorites} alt='флажок' />
        </div>
      </div>
    </Card>
  )
}
