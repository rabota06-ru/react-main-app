import { Button, ButtonSize, ButtonVariant } from 'kit/components/button'
import { Carousel, CarouselCard, ICarouselCard } from 'kit/components/carousel'
import { Container } from 'kit/components/container'
import { useMediaValue } from 'kit/hooks'
import { routes } from 'pages/routes'
import { createElement, useState } from 'react'
import { BiRuble, BiMap } from 'react-icons/bi'
import { IoIosArrowForward } from 'react-icons/io'
import { FieldOfActivity } from 'types/index'
import { FIELDS_OF_ACTIVITY_IMAGE } from 'utils/fields-of-activity'
import styles from './similar-vacancies-section.module.scss'

export function SimilarVacanciesSection() {
  const [carouselItems] = useState<ICarouselCard[]>([
    {
      Icon: createElement(FIELDS_OF_ACTIVITY_IMAGE[FieldOfActivity.ITAndInternet]),
      title: 'Бухгалтер',
      infoItems: [
        {
          Icon: <BiRuble color='#04CDBF' size={20} />,
          label: '25 000',
        },
        {
          Icon: <BiMap color='#04CDBF' size={20} />,
          label: 'Назрань',
        },
      ],
      url: routes.allVacancies.nested.vacancy('1').exact,
    },
    {
      Icon: createElement(FIELDS_OF_ACTIVITY_IMAGE[FieldOfActivity.ITAndInternet]),
      title: 'Бухгалтер',
      infoItems: [
        {
          Icon: <BiRuble color='#04CDBF' size={20} />,
          label: '25 000',
        },
        {
          Icon: <BiMap color='#04CDBF' size={20} />,
          label: 'Назрань',
        },
      ],
      url: routes.allVacancies.nested.vacancy('2').exact,
    },
    {
      Icon: createElement(FIELDS_OF_ACTIVITY_IMAGE[FieldOfActivity.ITAndInternet]),
      title: 'Бухгалтер',
      infoItems: [
        {
          Icon: <BiRuble color='#04CDBF' size={20} />,
          label: '25 000',
        },
        {
          Icon: <BiMap color='#04CDBF' size={20} />,
          label: 'Назрань',
        },
      ],
      url: routes.allVacancies.nested.vacancy('3').exact,
    },
    {
      Icon: createElement(FIELDS_OF_ACTIVITY_IMAGE[FieldOfActivity.ITAndInternet]),
      title: 'Бухгалтер',
      infoItems: [
        {
          Icon: <BiRuble color='#04CDBF' size={20} />,
          label: '25 000',
        },
        {
          Icon: <BiMap color='#04CDBF' size={20} />,
          label: 'Назрань',
        },
      ],
      url: routes.allVacancies.nested.vacancy('4').exact,
    },
    {
      Icon: createElement(FIELDS_OF_ACTIVITY_IMAGE[FieldOfActivity.ITAndInternet]),
      title: 'Бухгалтер',
      infoItems: [
        {
          Icon: <BiRuble color='#04CDBF' size={20} />,
          label: '25 000',
        },
        {
          Icon: <BiMap color='#04CDBF' size={20} />,
          label: 'Назрань',
        },
      ],
      url: routes.allVacancies.nested.vacancy('4').exact,
    },
    {
      Icon: createElement(FIELDS_OF_ACTIVITY_IMAGE[FieldOfActivity.ITAndInternet]),
      title: 'Бухгалтер',
      infoItems: [
        {
          Icon: <BiRuble color='#04CDBF' size={20} />,
          label: '25 000',
        },
        {
          Icon: <BiMap color='#04CDBF' size={20} />,
          label: 'Назрань',
        },
      ],
      url: routes.allVacancies.nested.vacancy('5').exact,
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
        <h2 className={styles.sectionTitle}>Похожие вакансии</h2>
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
          Посмотреть все вакансии {buttonRightArrow}
        </Button>
      </Container>
    </div>
  )
}
