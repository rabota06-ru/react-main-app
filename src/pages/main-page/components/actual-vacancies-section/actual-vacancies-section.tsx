import { Button } from 'components/button'
import { Carousel } from 'components/carousel'
import { CarouselCard, CarouselCardProps } from 'components/carousel/carousel-card/carousel-card'
import { Container } from 'components/container'
import { routes } from 'pages/routes'
import { useState } from 'react'
import { BiRuble, BiMap } from 'react-icons/bi'
import { FieldOfActivity } from 'types/index'
import { FIELDS_OF_ACTIVITY_IMAGE } from 'utils/fields-of-activity'
import styles from './actual-vacancies-section.module.scss'

export function ActualVacanciesSection() {
  const [carouselItems] = useState<CarouselCardProps[]>([
    {
      Icon: <img src={FIELDS_OF_ACTIVITY_IMAGE[FieldOfActivity.ITAndInternet]} alt='' />,
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
      url: routes.allResumes,
    },
    {
      Icon: <img src={FIELDS_OF_ACTIVITY_IMAGE[FieldOfActivity.ITAndInternet]} alt='' />,
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
      url: routes.allResumes,
    },
    {
      Icon: <img src={FIELDS_OF_ACTIVITY_IMAGE[FieldOfActivity.ITAndInternet]} alt='' />,
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
      url: routes.allResumes,
    },
    {
      Icon: <img src={FIELDS_OF_ACTIVITY_IMAGE[FieldOfActivity.ITAndInternet]} alt='' />,
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
      url: routes.allResumes,
    },
    {
      Icon: <img src={FIELDS_OF_ACTIVITY_IMAGE[FieldOfActivity.ITAndInternet]} alt='' />,
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
      url: routes.allResumes,
    },
    {
      Icon: <img src={FIELDS_OF_ACTIVITY_IMAGE[FieldOfActivity.ITAndInternet]} alt='' />,
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
      url: routes.allResumes,
    },
  ])

  return (
    <Container className={styles.section}>
      <h2 className={styles.sectionTitle}>Актуальные вакансии</h2>
      <Carousel
        Item={CarouselCard}
        items={carouselItems}
        visibleItemsCount={4}
        className={styles.sectionCarousel}
        contentProps={{ className: styles.sectionCarouselContent }}
        slideLeftButtonProps={{ className: styles.sectionCarouselSlideLeftButton }}
        slideRightButtonProps={{ className: styles.sectionCarouselSlideRightButton }}
      />
      <Button>Посмотреть все вакансии</Button>
    </Container>
  )
}
