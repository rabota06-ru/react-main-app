import { Card } from 'components/card'
import { Divider } from 'components/divider'
import { ReactNode } from 'react'
import { Color } from 'types/index'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { getColorVariable } from 'utils/get-color'
import { Link } from 'react-router-dom'
import styles from './carousel-card.module.scss'

export interface CarouselCardProps {
  Icon: ReactNode
  title: string
  infoItems: {
    Icon: ReactNode
    label: string
  }[]
  url: string
}

export function CarouselCard({ Icon, title, infoItems, url }: CarouselCardProps) {
  return (
    <Card
      shadow={`0px 20px 50px -15px ${getColorVariable(Color.CarouselCardShadowColor)}`}
      hoverShadow={`0px 10px 50px 10px ${getColorVariable(Color.CarouselCardHoveredShadowColor)}`}
      className={styles.card}
    >
      <div className={styles.cardIconWrap}>{Icon}</div>
      <h3 className={styles.cardProfession}>{title}</h3>
      <Divider />
      <div className={styles.cardInfo}>
        {infoItems.map((item, index) => (
          <div key={index} className={styles.cardInfoItem}>
            {item.Icon}
            <p className={styles.cardInfoText}>{item.label}</p>
          </div>
        ))}
      </div>
      <Link to={url} className={styles.cardAction}>
        <span className={styles.cardActionText}>Посмотреть</span>
        <HiArrowNarrowRight className={styles.cardActionIcon} size={20} />
      </Link>
    </Card>
  )
}
