import { Carousel } from 'components/carousel'
import { CarouselCard, CarouselCardProps } from 'components/carousel/carousel-card/carousel-card'
import { IoPersonOutline } from 'react-icons/io5'
import { BiMap } from 'react-icons/bi'
import { routes } from 'pages/routes'
import { FIELDS_OF_ACTIVITY_IMAGE } from 'utils/fields-of-activity'
import { FieldOfActivity } from 'types/index'
import { useState } from 'react'
import { Container } from 'components/container'
import styles from './resumes-section.module.scss'

export function ResumesSection() {
  const [carouselItems] = useState<CarouselCardProps[]>([
    {
      Icon: <img src={FIELDS_OF_ACTIVITY_IMAGE[FieldOfActivity.ITAndInternet]} alt='' />,
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
      Icon: <img src={FIELDS_OF_ACTIVITY_IMAGE[FieldOfActivity.ITAndInternet]} alt='' />,
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
      Icon: <img src={FIELDS_OF_ACTIVITY_IMAGE[FieldOfActivity.ITAndInternet]} alt='' />,
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
      Icon: <img src={FIELDS_OF_ACTIVITY_IMAGE[FieldOfActivity.ITAndInternet]} alt='' />,
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
      Icon: <img src={FIELDS_OF_ACTIVITY_IMAGE[FieldOfActivity.ITAndInternet]} alt='' />,
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
      Icon: <img src={FIELDS_OF_ACTIVITY_IMAGE[FieldOfActivity.ITAndInternet]} alt='' />,
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

  return (
    <Container className={styles.section}>
      <h2>Резюме</h2>
      <Carousel
        Item={CarouselCard}
        items={carouselItems}
        visibleItemsCount={4}
        className={styles.sectionCarousel}
        contentProps={{ className: styles.sectionCarouselContent }}
        slideLeftButtonProps={{ className: styles.sectionCarouselSlideLeftButton }}
        slideRightButtonProps={{ className: styles.sectionCarouselSlideRightButton }}
      />
    </Container>
  )
}
