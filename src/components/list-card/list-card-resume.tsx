import { createElement, useMemo } from 'react'
import { Button, ButtonSize, ButtonVariant } from 'kit/components/button'
import { Card } from 'kit/components/card'
import { TfiLocationPin } from 'react-icons/tfi'
import { Divider, DividerDirection } from 'kit/components/divider'
import { FieldOfActivity, Locations } from 'types/index'
import { CssColorVariable } from 'utils/get-css-variable'
import { FIELDS_OF_ACTIVITY_IMAGE } from 'utils/fields-of-activity'
import { LOCATIONS_LABEL } from 'utils/locations'
import styles from './list-card.module.scss'

interface ResumeCardProps {
  title: string | undefined | null
  name: string
  text: string | undefined | null
  location: number
  headerImage: number
}

export function ListCardResume({ headerImage, title, name, text, location, ...props }: ResumeCardProps) {
  const headerImageComponent = useMemo(() => createElement(FIELDS_OF_ACTIVITY_IMAGE[headerImage as FieldOfActivity]), [headerImage])

  return (
    <Card
      shadow={{ color: '#6484C226', blurRadius: 50, spreadRadius: 20 }}
      hoverShadow={{ color: '#395DDE66', blurRadius: 50, spreadRadius: 10 }}
    >
      <div className={styles.resumeCard}>
        <div className={styles.resumeCardHeader}>
          <div>
            <h3>{title}</h3>
            <p>
              <TfiLocationPin className={styles.resumeCardIcon} />
              <span>{LOCATIONS_LABEL[location as Locations]}</span>
            </p>
          </div>
          <div>
            {name}
            {headerImageComponent}
          </div>
        </div>
        <Divider direction={DividerDirection.Horizontal} size={0.5} color={CssColorVariable.SecondaryColor2} />
        <p className={styles.resumeCardText}>{text}</p>
        <div className={styles.resumeCardFooter}>
          <Button
            className={styles.resumeCardButton}
            size={ButtonSize.Large}
            variant={ButtonVariant.Primary}
            isShadow
            children='Посмотреть'
          />
        </div>
      </div>
    </Card>
  )
}
