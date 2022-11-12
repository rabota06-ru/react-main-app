import styles from './list-card.module.scss'
import { Card } from 'components/card'
import { Button, ButtonSize, ButtonVariant } from 'components/button'
import { BiRuble } from 'react-icons/Bi'
import { TfiLocationPin } from 'react-icons/Tfi'
import { Divider, DividerDirection } from 'components/divider'
import { Color } from 'types/index'

interface VacancyCardProps {
  title: string
  date: string
  operator: string
  text: string
  price: number
  location: string
}

export function ListCardVacancy({ title, date, operator, text, price, location, ...props }: VacancyCardProps) {
  return (
    <Card
      shadow={{ color: '#6484C226', blurRadius: 50, spreadRadius: 20 }}
      hoverShadow={{ color: '#395DDE66', blurRadius: 50, spreadRadius: 10 }}
    >
      <div className={styles.vacancyCard}>
        <div className={styles.vacancyCardHeader}>
          {/* <div className={styles.listCardHeaderIcon}></div> */}
          <h3>{title}</h3>
          <div>
            <p>{date}</p>
            <p>{operator}</p>
          </div>
        </div>
        <Divider direction={DividerDirection.Horizontal} size={0.5} color={Color.SecondaryColor2} />
        <p className={styles.vacancyCardText}>{text}</p>
        <div className={styles.vacancyCardFooter}>
          <div className={styles.vacancyCardFooterDiv1}>
            <p className={styles.vacancyCardFooterDiv1Price}>
              <BiRuble className={styles.vacancyCardIcon} />
              <span>{price}</span>
            </p>
            <p>
              <TfiLocationPin className={styles.vacancyCardIcon} />
              <span>{location}</span>
            </p>
          </div>
          <Button
            className={styles.vacancyCardButton}
            size={ButtonSize.Large}
            variant={ButtonVariant.Primary}
            isShadow
            children={'Посмотреть'}
          />
        </div>
      </div>
    </Card>
  )
}
