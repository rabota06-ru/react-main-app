import styles from './list-card.module.scss'
import { Button, ButtonSize, ButtonVariant } from 'components/button'
import { Card } from 'components/card'
import { BiRuble } from 'react-icons/bi'
import { TfiLocationPin } from 'react-icons/Tfi'
import { Divider, DividerDirection } from 'components/divider'
import { Color, FieldOfActivity } from 'types/index'
import { createElement, useMemo } from 'react'
import { FIELDS_OF_ACTIVITY_IMAGE } from 'utils/fields-of-activity'

interface VacancyCardProps {
  title: string
  headerImage: number
  date: string
  company: string
  text: string
  price: number
  location: string
}

export function ListCardVacancy({ title, headerImage, date, company, text, price, location, ...props }: VacancyCardProps) {
  const headerImageComponent = useMemo(() => createElement(FIELDS_OF_ACTIVITY_IMAGE[headerImage as FieldOfActivity]), [headerImage])

  return (
    <Card
      shadow={{ color: '#6484C226', blurRadius: 50, spreadRadius: 20 }}
      hoverShadow={{ color: '#395DDE66', blurRadius: 50, spreadRadius: 10 }}
      className={styles.vacancyCardShadow}
    >
      <div className={styles.vacancyCard}>
        <div className={styles.vacancyCardHeader}>
          <div className={styles.vacancyCardHeaderImageAndTitleDiv}>
            <div className={styles.vacancyCardHeaderIcon}>{headerImageComponent}</div>
            <h3>{title}</h3>
          </div>
          <div className={styles.vacancyCardHeaderDataDiv}>
            <p>{date}</p>
            <p>{company}</p>
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
