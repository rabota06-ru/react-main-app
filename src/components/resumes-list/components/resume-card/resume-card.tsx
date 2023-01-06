import { GetAllResumesQuery } from 'api/generated'
import { Box } from 'kit/components/box'
import { Card } from 'kit/components/card'
import { ReactComponent as LocationIcon } from 'assets/images/location.svg'
import { LOCATIONS_LABEL, numberToLocation } from 'utils/locations'
import { createElement } from 'react'
import { FIELDS_OF_ACTIVITY_IMAGE, numberToFieldOfActivity } from 'utils/fields-of-activity'
import { CssColorVariable } from 'utils/get-css-variable'
import { Divider } from 'kit/components/divider'
import { Button } from 'kit/components/button'
import styles from './resume-card.module.scss'

interface ResumeCardProps {
  resume: GetAllResumesQuery['resumes'][number]
}

export function ResumeCard({ resume }: ResumeCardProps) {
  return (
    <Card pt={15} pb={25} ph={30} mb={30}>
      <Box df jcsb aic>
        <p className={styles.resumeDesiredPost} title={resume.desiredPost}>
          {resume.desiredPost}
        </p>
        <Box df aic g={10}>
          <p className={styles.resumeName}>
            {resume.firstname} {resume.lastname ? `${resume.lastname[0]}.` : null}
          </p>
          <Box df aic jcc w={60} h={60} bdrs='50%' bgcvar={CssColorVariable.SecondaryColor1}>
            {createElement(FIELDS_OF_ACTIVITY_IMAGE[numberToFieldOfActivity(resume.fieldOfActivity)])}
          </Box>
        </Box>
      </Box>
      <Box df g={10} mb={20}>
        <LocationIcon />
        <p>{LOCATIONS_LABEL[numberToLocation(resume.placeOfResidence)]}</p>
      </Box>
      <Divider color={CssColorVariable.SecondaryColor3} mb={20} />
      <Box mb={20}>
        <p className={styles.resumeAboutMe}>{resume.aboutMe}</p>
      </Box>
      <Box df jce>
        <Box df g={20}>
          <Button>Посмотреть</Button>
        </Box>
      </Box>
      {/* <Box df fdc g={20} mt={15}>
          <p className={styles.resumeDesiredPost}>{resume.desiredPost}</p>
          <Box df g={10}>
            <LocationIcon />
            <p>{LOCATIONS_LABEL[numberToLocation(resume.placeOfResidence)]}</p>
          </Box>
        </Box>
        <Box df aic g={10}>
          <p className={styles.resumeName}>
            {resume.firstname} {resume.lastname}
          </p>
          <Box df aic jcc w={60} h={60} bdrs='50%' bgcvar={CssColorVariable.SecondaryColor1}>
            {createElement(FIELDS_OF_ACTIVITY_IMAGE[numberToFieldOfActivity(resume.fieldOfActivity)])}
          </Box>
        </Box> */}
    </Card>
  )
}
