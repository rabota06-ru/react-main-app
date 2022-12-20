import { Carousel } from 'kit/components/carousel'
import { CarouselCard } from 'kit/components/carousel/carousel-card/carousel-card'
import { IoPersonOutline } from 'react-icons/io5'
import { BiMap } from 'react-icons/bi'
import { routes } from 'pages/routes'
import { FIELDS_OF_ACTIVITY_IMAGE } from 'utils/fields-of-activity'
import { FieldOfActivity, Locations } from 'types/index'
import { createElement } from 'react'
import { Container } from 'kit/components/container'
import { useMediaValue } from 'kit/hooks'
import { Button, ButtonSize, ButtonVariant } from 'kit/components/button'
import { IoIosArrowForward } from 'react-icons/io'
import { useGetSimilarResumesQuery } from 'api/enhancedApi'
import { LOCATIONS_LABEL } from 'utils/locations'
import styles from './similar-resumes-section.module.scss'

interface ISimilarResumesSectionProps {
  fildOfActivity: number
  id: string
}

export function SimilarResumesSection({ fildOfActivity, id }: ISimilarResumesSectionProps) {
  const similarResumesData = useGetSimilarResumesQuery(
    { fieldOfActivity: fildOfActivity as number, currentResumeId: id as string },
    { skip: !fildOfActivity }
  )

  const carouselItems = similarResumesData?.data?.resumes.map(el => {
    return {
      Icon: createElement(FIELDS_OF_ACTIVITY_IMAGE[el.fieldOfActivity as FieldOfActivity]),
      title: el.firstname,
      infoItems: [
        {
          Icon: <IoPersonOutline color='#04CDBF' size={20} />,
          label: el.firstname,
        },
        {
          Icon: <BiMap color='#04CDBF' size={20} />,
          label: LOCATIONS_LABEL[el.placeOfResidence as Locations],
        },
      ],
      url: routes.allResumes.nested.resume(el.id).absoluteExact,
    }
  })

  const carouselVisibleItemsCount = useMediaValue({ xs: 1, sm: 2, lg: 3, xl: 4 })
  const carouselSlideButtonsHidden = useMediaValue({ xs: true, md: false })
  const isCarouselScrollSnapping = useMediaValue({ xs: false, md: true })
  const carouselCardWidthCoef = useMediaValue({ xs: 0.8, md: 1 })
  const isCarouselHoverShadow = useMediaValue({ xs: false, md: true })
  const buttonVariant = useMediaValue({ xs: ButtonVariant.Text, md: ButtonVariant.Outline })
  const buttonSize = useMediaValue({ xs: ButtonSize.ExtraSmall, md: ButtonSize.Medium })
  const isButtonShadow = useMediaValue({ xs: false, md: false })
  const buttonRightArrow = useMediaValue({ xs: <IoIosArrowForward size={20} />, md: undefined })

  return similarResumesData?.data?.resumes && carouselItems ? (
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
          {similarResumesData?.data?.resumes.length} похожих резюме {buttonRightArrow}
        </Button>
      </Container>
    </div>
  ) : null
}
