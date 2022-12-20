import { useGetSimilarVacanciesQuery } from 'api/enhancedApi'
import { Button, ButtonSize, ButtonVariant } from 'kit/components/button'
import { Carousel, CarouselCard } from 'kit/components/carousel'
import { Container } from 'kit/components/container'
import { useMediaValue } from 'kit/hooks'
import { routes } from 'pages/routes'
import { createElement } from 'react'
import { BiRuble, BiMap } from 'react-icons/bi'
import { IoIosArrowForward } from 'react-icons/io'
import { FieldOfActivity, Locations } from 'types/index'
import { FIELDS_OF_ACTIVITY_IMAGE } from 'utils/fields-of-activity'
import { LOCATIONS_LABEL } from 'utils/locations'
import styles from './similar-vacancies-section.module.scss'

interface ISimilarVacanciesSectionProps {
  fieldOfActivity: number
  vacancyId: string
}

export function SimilarVacanciesSection({ fieldOfActivity, vacancyId }: ISimilarVacanciesSectionProps) {
  const vacancyData = useGetSimilarVacanciesQuery(
    { fieldOfActivity: fieldOfActivity as number, id: vacancyId as string },
    { skip: !fieldOfActivity }
  )

  const carouselItems = vacancyData?.data?.vacancies.map(item => {
    return {
      Icon: createElement(FIELDS_OF_ACTIVITY_IMAGE[item.fieldOfActivity as FieldOfActivity]),
      title: item.post,
      infoItems: [
        {
          Icon: <BiRuble color='#04CDBF' size={20} />,
          label: item.salary,
        },
        {
          Icon: <BiMap color='#04CDBF' size={20} />,
          label: LOCATIONS_LABEL[item.placeOfWork as Locations],
        },
      ],
      url: routes.allVacancies.nested.vacancy(item.id).absoluteExact,
    }
  })

  const carouselVisibleItemsCount = useMediaValue({ xs: 1, sm: 2, lg: 3, xl: 4 })
  const carouselSlideButtonsHidden = useMediaValue({ xs: true, md: false })
  const isCarouselScrollSnapping = useMediaValue({ xs: false, md: true })
  const carouselCardWidthCoef = useMediaValue({ xs: 0.8, md: 1 })
  const isCarouselHoverShadow = useMediaValue({ xs: false, md: true })
  const buttonVariant = useMediaValue({ xs: ButtonVariant.Text, md: ButtonVariant.Primary })
  const buttonSize = useMediaValue({ xs: ButtonSize.ExtraSmall, md: ButtonSize.Medium })
  const isButtonShadow = useMediaValue({ xs: false, md: false })
  const buttonRightArrow = useMediaValue({ xs: <IoIosArrowForward size={20} />, md: undefined })

  return carouselItems ? (
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
          {vacancyData?.data?.vacancies.length} похожих вакансий {buttonRightArrow}
        </Button>
      </Container>
    </div>
  ) : null
}
