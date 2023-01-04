import { GetEmployerPublishedVacanciesQuery } from 'api/generated'
import { format } from 'date-fns'
import { ru } from 'date-fns/locale'
import { Box } from 'kit/components/box'
import { Button, ButtonVariant } from 'kit/components/button'
import { Card } from 'kit/components/card'
import { Divider } from 'kit/components/divider'
import { createElement } from 'react'
import { FIELDS_OF_ACTIVITY_IMAGE, numberToFieldOfActivity } from 'utils/fields-of-activity'
import { CssColorVariable } from 'utils/get-css-variable'
import { LOCATIONS_LABEL, numberToLocation } from 'utils/locations'
import { ReactComponent as LocationIcon } from 'assets/images/location.svg'
import { ReactComponent as RubbleIcon } from 'assets/images/ruble.svg'
import styles from './published-vacancy.module.scss'

interface PublishedVacancyProps {
  vacancy: GetEmployerPublishedVacanciesQuery['vacancies'][number]
}

export function PublishedVacancy({ vacancy }: PublishedVacancyProps) {
  return (
    <Card mb={20}>
      <Box p={30}>
        <Box df jcsb mb={20}>
          <Box df aic g={15}>
            <Box df aic jcc w={60} h={60} bdrs='50%' bgcvar={CssColorVariable.SecondaryColor1}>
              {createElement(FIELDS_OF_ACTIVITY_IMAGE[numberToFieldOfActivity(vacancy.fieldOfActivity)])}
            </Box>
            <p className={styles.vacancyTitle}>{vacancy.post}</p>
          </Box>
          <Box df fdc aie g={10}>
            <p>{format(new Date(vacancy.createdAt), 'd MMMM', { locale: ru })}</p>
            <p>{vacancy.views} просмотров</p>
          </Box>
        </Box>
        <Divider color={CssColorVariable.SecondaryColor3} mb={40} />
        <Box df jcsb aie>
          <Box df fdc g={15}>
            <Box df g={10} aic>
              <RubbleIcon />
              <p>{vacancy.salary} руб.</p>
            </Box>
            <Box df g={10} aic>
              <LocationIcon />
              <p>{LOCATIONS_LABEL[numberToLocation(vacancy.placeOfWork)]}</p>
            </Box>
          </Box>
          <Box df g={20}>
            <Button>Посмотреть</Button>
            <Button variant={ButtonVariant.Outline}>В архив</Button>
          </Box>
        </Box>
      </Box>
    </Card>
  )
}
