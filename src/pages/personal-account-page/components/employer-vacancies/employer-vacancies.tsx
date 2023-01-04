import { Box } from 'kit/components/box'
import { useState } from 'react'
import { Button } from 'kit/components/button'
import { Tab, TabList, TabPanel, Tabs } from 'kit/components/tabs'
import styles from './employer-vacancies.module.scss'
import { PublishedVacancies } from './components/published-vacancies/published-vacancies'
import { ArchivedVacancies } from './components/archived-vacancies/archived-vacancies'

export function EmployerVacancies() {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0)

  return (
    <Box dg gtr='max-content max-content auto' w100 h100 pt={40}>
      <Box df jcsb mb={30} mh={40}>
        <p className={styles.vacanciesTitle}>Мои вакансии</p>
        <Button>Создать вакансию</Button>
      </Box>
      <Tabs selectedIndex={selectedTabIndex} onSelect={setSelectedTabIndex}>
        <TabList mh={40}>
          <Tab index={0}>Опубликованные</Tab>
          <Tab index={1}>Архив</Tab>
        </TabList>
        <TabPanel index={0} h100 oh>
          <PublishedVacancies />
        </TabPanel>
        <TabPanel index={1} h100 oh>
          <ArchivedVacancies />
        </TabPanel>
      </Tabs>
    </Box>
  )
}
