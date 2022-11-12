import { Carousel, ICarouselCard } from 'components/carousel'
import { CarouselCard } from 'components/carousel/carousel-card/carousel-card'
import { IoPersonOutline } from 'react-icons/io5'
import { BiMap } from 'react-icons/bi'
import { routes } from 'pages/routes'
import { FIELDS_OF_ACTIVITY_IMAGE } from 'utils/fields-of-activity'
import { FieldOfActivity } from 'types/index'
import { createElement, useState } from 'react'
import { Container } from 'components/container'
import { useMediaValue } from 'hooks/use-media-value'
import { Button, ButtonSize, ButtonVariant } from 'components/button'
import { IoIosArrowForward } from 'react-icons/io'
import styles from './similar-resumes-section.module.scss'

export function SimilarResumesSection() {
  const [carouselItems] = useState<ICarouselCard[]>([
    {
      Icon: createElement(FIELDS_OF_ACTIVITY_IMAGE[FieldOfActivity.ITAndInternet]),
      title: 'Бухгалтер',
      infoItems: [
        {
          Icon: <IoPersonOutline color='#04CDBF' size={20} />,
          label: 'Анзор В.',
        },
        {
          Icon: <BiMap color='#04CDBF' size={20} />,
          label: 'Назрань',
        },
      ],
      url: routes.allResumes,
    },
    {
      Icon: createElement(FIELDS_OF_ACTIVITY_IMAGE[FieldOfActivity.ITAndInternet]),
      title: 'Бухгалтер',
      infoItems: [
        {
          Icon: <IoPersonOutline color='#04CDBF' size={20} />,
          label: 'Ахмед С.',
        },
        {
          Icon: <BiMap color='#04CDBF' size={20} />,
          label: 'Назрань',
        },
      ],
      url: routes.allResumes,
    },
    {
      Icon: createElement(FIELDS_OF_ACTIVITY_IMAGE[FieldOfActivity.ITAndInternet]),
      title: 'Бухгалтер',
      infoItems: [
        {
          Icon: <IoPersonOutline color='#04CDBF' size={20} />,
          label: 'Адам Т.',
        },
        {
          Icon: <BiMap color='#04CDBF' size={20} />,
          label: 'Назрань',
        },
      ],
      url: routes.allResumes,
    },
    {
      Icon: createElement(FIELDS_OF_ACTIVITY_IMAGE[FieldOfActivity.ITAndInternet]),
      title: 'Бухгалтер',
      infoItems: [
        {
          Icon: <IoPersonOutline color='#04CDBF' size={20} />,
          label: 'Ада Ч.',
        },
        {
          Icon: <BiMap color='#04CDBF' size={20} />,
          label: 'Назрань',
        },
      ],
      url: routes.allResumes,
    },
    {
      Icon: createElement(FIELDS_OF_ACTIVITY_IMAGE[FieldOfActivity.ITAndInternet]),
      title: 'Бухгалтер',
      infoItems: [
        {
          Icon: <IoPersonOutline color='#04CDBF' size={20} />,
          label: 'Ада Ч.',
        },
        {
          Icon: <BiMap color='#04CDBF' size={20} />,
          label: 'Назрань',
        },
      ],
      url: routes.allResumes,
    },
    {
      Icon: createElement(FIELDS_OF_ACTIVITY_IMAGE[FieldOfActivity.ITAndInternet]),
      title: 'Бухгалтер',
      infoItems: [
        {
          Icon: <IoPersonOutline color='#04CDBF' size={20} />,
          label: 'Ада Ч.',
        },
        {
          Icon: <BiMap color='#04CDBF' size={20} />,
          label: 'Назрань',
        },
      ],
      url: routes.allResumes,
    },
  ])
  const carouselVisibleItemsCount = useMediaValue({ xs: 1, sm: 2, lg: 3, xl: 4 })
  const carouselSlideButtonsHidden = useMediaValue({ xs: true, md: false })
  const isCarouselScrollSnapping = useMediaValue({ xs: false, md: true })
  const carouselCardWidthCoef = useMediaValue({ xs: 0.8, md: 1 })
  const isCarouselHoverShadow = useMediaValue({ xs: false, md: true })
  const buttonVariant = useMediaValue({ xs: ButtonVariant.Text, md: ButtonVariant.Outline })
  const buttonSize = useMediaValue({ xs: ButtonSize.ExtraSmall, md: ButtonSize.Medium })
  const isButtonShadow = useMediaValue({ xs: false, md: false })
  const buttonRightArrow = useMediaValue({ xs: <IoIosArrowForward size={20} />, md: undefined })

  return (
    <div className={styles.section}>
      <Container className={styles.sectionContainer}>
        <h2 className={styles.sectionTitle}>Похожие резюме</h2>
        <Carousel
          Item={CarouselCard}
          itemAdditionalProps={{ isHoverShadow: isCarouselHoverShadow }}
          items={carouselItems}
          visibleItemsCount={carouselVisibleItemsCount}
          slideButtonsHidden={carouselSlideButtonsHidden}
          isScrollSnapping={isCarouselScrollSnapping}
          cardWithCoef={carouselCardWidthCoef}
          className={styles.sectionCarousel}
          contentProps={{ className: styles.sectionCarouselContent }}
          slideLeftButtonProps={{ className: styles.sectionCarouselSlideLeftButton }}
          slideRightButtonProps={{ className: styles.sectionCarouselSlideRightButton }}
        />
        <Button variant={buttonVariant} size={buttonSize} isShadow={isButtonShadow} className={styles.sectionButton}>
          Посмотреть все резюме {buttonRightArrow}
        </Button>
      </Container>
    </div>
  )
}
