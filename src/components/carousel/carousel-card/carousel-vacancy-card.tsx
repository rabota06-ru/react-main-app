import { Card } from 'components/card'
import { Divider } from 'components/divider'
import { Color } from 'types/index'
import { getColorVariable } from 'utils/get-color'
import styles from './carousel-card.module.scss'

export interface VacancyCardProps {
  iconUrl: string
  profession: string
  price: number
  location: string
  fullResumeLink: string
}

export function VacancyCard({ iconUrl, profession, price, location, fullResumeLink }: VacancyCardProps) {
  return (
    <Card
      shadow={`0px 20px 50px -15px ${getColorVariable(Color.CarouselCardShadowColor)}`}
      hoverShadow={`0px 10px 50px 10px ${getColorVariable(Color.CarouselCardHoveredShadowColor)}`}
      className={styles.card}
    >
      <div className={styles.cardIconWrap}>
        <img className={styles.cardIcon} src={iconUrl} alt='card icon' />
      </div>
      <h3 className={styles.cardProfession}>{profession}</h3>
      <Divider />
      <div className={styles.cardInfo}>
        <div className={styles.cardInfoItem}>
          <svg className={styles.cardInfoIcon} xmlns='http://www.w3.org/2000/svg' width='15' height='17' viewBox='0 0 15 17' fill='none'>
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M9.5 1H3.5H3H1V2H3V9H1V10H3V12.5H1V13.5H3V16H4V13.5H9V12.5H4V10H9.5C11.9853 10 14 7.98528 14 5.5C14 3.01472 11.9853 1 9.5 1ZM9.5 2H4V9H9.5C11.433 9 13 7.433 13 5.5C13 3.567 11.433 2 9.5 2Z'
              fill='#04CDBF'
            />
            <path
              d='M1 1V0.75H0.75V1H1ZM1 2H0.75V2.25H1V2ZM3 2H3.25V1.75H3V2ZM3 9V9.25H3.25V9H3ZM1 9V8.75H0.75V9H1ZM1 10H0.75V10.25H1V10ZM3 10H3.25V9.75H3V10ZM3 12.5V12.75H3.25V12.5H3ZM1 12.5V12.25H0.75V12.5H1ZM1 13.5H0.75V13.75H1V13.5ZM3 13.5H3.25V13.25H3V13.5ZM3 16H2.75V16.25H3V16ZM4 16V16.25H4.25V16H4ZM4 13.5V13.25H3.75V13.5H4ZM9 13.5V13.75H9.25V13.5H9ZM9 12.5H9.25V12.25H9V12.5ZM4 12.5H3.75V12.75H4V12.5ZM4 10V9.75H3.75V10H4ZM4 2V1.75H3.75V2H4ZM4 9H3.75V9.25H4V9ZM3.5 1.25H9.5V0.75H3.5V1.25ZM3 1.25H3.5V0.75H3V1.25ZM1 1.25H3V0.75H1V1.25ZM1.25 2V1H0.75V2H1.25ZM3 1.75H1V2.25H3V1.75ZM3.25 9V2H2.75V9H3.25ZM1 9.25H3V8.75H1V9.25ZM1.25 10V9H0.75V10H1.25ZM3 9.75H1V10.25H3V9.75ZM3.25 12.5V10H2.75V12.5H3.25ZM1 12.75H3V12.25H1V12.75ZM1.25 13.5V12.5H0.75V13.5H1.25ZM3 13.25H1V13.75H3V13.25ZM3.25 16V13.5H2.75V16H3.25ZM4 15.75H3V16.25H4V15.75ZM3.75 13.5V16H4.25V13.5H3.75ZM9 13.25H4V13.75H9V13.25ZM8.75 12.5V13.5H9.25V12.5H8.75ZM4 12.75H9V12.25H4V12.75ZM3.75 10V12.5H4.25V10H3.75ZM9.5 9.75H4V10.25H9.5V9.75ZM13.75 5.5C13.75 7.84721 11.8472 9.75 9.5 9.75V10.25C12.1234 10.25 14.25 8.12335 14.25 5.5H13.75ZM9.5 1.25C11.8472 1.25 13.75 3.15279 13.75 5.5H14.25C14.25 2.87665 12.1234 0.75 9.5 0.75V1.25ZM4 2.25H9.5V1.75H4V2.25ZM4.25 9V2H3.75V9H4.25ZM9.5 8.75H4V9.25H9.5V8.75ZM12.75 5.5C12.75 7.29493 11.2949 8.75 9.5 8.75V9.25C11.5711 9.25 13.25 7.57107 13.25 5.5H12.75ZM9.5 2.25C11.2949 2.25 12.75 3.70507 12.75 5.5H13.25C13.25 3.42893 11.5711 1.75 9.5 1.75V2.25Z'
              fill='#04CDBF'
            />
          </svg>
          <p className={styles.cardInfoText}>{price}</p>
        </div>
        <div className={styles.cardInfoItem}>
          <svg className={styles.cardInfoIcon} xmlns='http://www.w3.org/2000/svg' width='14' height='20' viewBox='0 0 14 20' fill='none'>
            <path
              d='M10.3226 1.9823C8.30361 0.672565 5.69497 0.672565 3.67721 1.9823C1.07685 3.66757 0.244406 6.95171 1.74115 9.62073L6.99988 18.9997L12.2586 9.62073C13.7554 6.95171 12.9241 3.66757 10.3226 1.9823ZM11.2201 9.07011L7.00107 16.5956L2.78082 9.07011C1.58011 6.92752 2.24677 4.29307 4.3344 2.94071C5.14435 2.41543 6.07152 2.15164 6.99988 2.15164C7.92824 2.15164 8.85542 2.41428 9.66537 2.93956C11.753 4.29307 12.4208 6.92752 11.2201 9.07011Z'
              fill='#04CEC0'
              stroke='#04CEC0'
              strokeWidth='0.5'
            />
            <circle cx='7' cy='6' r='2' stroke='#04CEC0' strokeWidth='1.4' />
          </svg>
          <p className={styles.cardInfoText}>{location}</p>
        </div>
      </div>
      <div className={styles.cardAction}>
        <a href={fullResumeLink} className={styles.cardActionLink}>
          <span className={styles.cardActionLinkText}>Посмотреть</span>
          <svg
            className={styles.cardActionLinkIcon}
            xmlns='http://www.w3.org/2000/svg'
            width='18'
            height='15'
            viewBox='0 0 18 15'
            fill='none'
          >
            <path
              d='M17.7071 8.20711C18.0976 7.81658 18.0976 7.18342 17.7071 6.79289L11.3431 0.428933C10.9526 0.0384088 10.3195 0.0384087 9.92893 0.428933C9.53841 0.819457 9.53841 1.45262 9.92893 1.84315L15.5858 7.5L9.92893 13.1569C9.53841 13.5474 9.53841 14.1805 9.92893 14.5711C10.3195 14.9616 10.9526 14.9616 11.3431 14.5711L17.7071 8.20711ZM-8.74228e-08 8.5L17 8.5L17 6.5L8.74228e-08 6.5L-8.74228e-08 8.5Z'
              fill='#395DDE'
            />
          </svg>
        </a>
      </div>
    </Card>
  )
}
