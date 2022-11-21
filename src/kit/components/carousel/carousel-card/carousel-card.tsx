import { Card } from 'kit/components/card'
import { Divider } from 'kit/components/divider'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { getCssVariable, CssVariable } from 'utils/get-css-variable'
import { Link } from 'react-router-dom'
import styles from './carousel-card.module.scss'
import { ICarouselCard } from './carousel-card.types'

export interface CarouselCardProps extends ICarouselCard {
  isHoverShadow?: boolean
}

export function CarouselCard({ Icon, title, infoItems, url, isHoverShadow = true }: CarouselCardProps) {
  return (
    <Card
      shadow={`0px 20px 50px -15px ${getCssVariable(CssVariable.CarouselCardShadowColor)}`}
      hoverShadow={isHoverShadow ? `0px 10px 50px 10px ${getCssVariable(CssVariable.CarouselCardHoveredShadowColor)}` : undefined}
      className={styles.card}
    >
      <div className={styles.cardIconContainer}>{Icon}</div>
      <h3 className={styles.cardTitle}>{title}</h3>
      <Divider className={styles.cardDivider} />
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
