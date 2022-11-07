import { Card } from 'components/card'
import { Divider } from 'components/divider'
import { Color } from 'types/index'
import { BiRuble } from 'react-icons/Bi'
import { TfiLocationPin } from 'react-icons/Tfi'
import icon from './img/Icon.svg'
import styles from './full-card-vacancy.module.scss'

interface FullCardVacancyProps {
  title: string
  date: string
  price: string
  operator: string
  city: string
  description: string
  responsibilities: string
  requirements: string
  schedule: string
}

export function FullCardVacancy({
  title,
  date,
  price,
  operator,
  city,
  description,
  responsibilities,
  requirements,
  schedule,
  ...props
}: FullCardVacancyProps) {
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
              <span className={styles.fullCardSalaryInfoText}>{price}</span>
            </div>
            <div>
              <span className={styles.fullCardSalaryInfoPriceView}>{operator}</span>
            </div>
          </div>
          <div className={styles.fullCardSalaryInfoCity}>
            <div>
              <TfiLocationPin className={styles.fullCardSalaryIcons} />
              <span className={styles.fullCardSalaryInfoText}>{city}</span>
            </div>
            <div>
              <span className={styles.fullCardSalaryInfoPriceView}>77 просмотров</span>
            </div>
          </div>
        </div>
        <Divider size={2} color={Color.SecondaryColor3} />
      </div>
    </Card>
  )
}
