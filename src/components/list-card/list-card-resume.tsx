import styles from './list-card.module.scss'
import { Card } from 'components/card'
import { Button, ButtonSize, ButtonVariant } from 'components/button'
import { TfiLocationPin } from 'react-icons/Tfi'
import { Divider, DividerDirection } from 'components/divider'
import { Color } from 'types/index'

interface resumeCardProps {
  title: string
  name: string
  text: string
  location: string
}

export function ListCardResume({ title, name, text, location, ...props }: resumeCardProps) {
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
              <span>{location}</span>
            </p>
          </div>
          <div>
            {name}
            {/* <div className={styles.listCardHeaderIcon}></div> */}
          </div>
        </div>
        <Divider direction={DividerDirection.Horizontal} size={0.5} color={Color.SecondaryColor2} />
        <p className={styles.resumeCardText}>{text}</p>
        <div className={styles.resumeCardFooter}>
          <Button
            className={styles.resumeCardButton}
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
