import React, { HTMLAttributes } from 'react'
import { VacancyStateTypes } from './list-card.types'
import styles from './list-card.module.scss'
import { Card } from 'components/card'
import { Button, ButtonSize, ButtonVariant } from 'components/button'
import { BiRuble } from 'react-icons/Bi'
import { TfiLocationPin } from 'react-icons/Tfi'
import { Divider, DividerDirection } from 'components/divider'
import { Color } from 'types/index'

interface ListCardProps extends Props<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  cardState: VacancyStateTypes
}

export function ListCardVacancy({ cardState, ...props }: ListCardProps) {
  return (
    <Card
      shadow={{ color: '#6484C226', blurRadius: 50, spreadRadius: 20 }}
      hoverShadow={{ color: '#395DDE66', blurRadius: 50, spreadRadius: 10 }}
    >
      <div className={styles.vacancyCard}>
        <div className={styles.vacancyCardHeader}>
          {/* <div className={styles.listCardHeaderIcon}></div> */}
          <h3>{cardState.title}</h3>
          <div>
            <p>{cardState.date}</p>
            <p>{cardState.operator}</p>
          </div>
        </div>
        <Divider direction={DividerDirection.Horizontal} size={0.5} color={Color.SecondaryColor2} />
        <p className={styles.vacancyCardText}>{cardState.text}</p>
        <div className={styles.vacancyCardFooter}>
          <div className={styles.vacancyCardFooterDiv1}>
            <p className={styles.vacancyCardFooterDiv1Price}>
              <BiRuble className={styles.vacancyCardIcon} />
              <span>{cardState.price}</span>
            </p>
            <p>
              <TfiLocationPin className={styles.vacancyCardIcon} />
              <span>{cardState.location}</span>
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
