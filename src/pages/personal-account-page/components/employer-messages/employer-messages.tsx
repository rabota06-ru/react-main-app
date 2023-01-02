import { Tab, TabList, TabPanel, Tabs, TabsSize } from 'kit/components/tabs'
import { useMediaValue } from 'kit/hooks'
import { useState } from 'react'
import { ResponsesToVacancies } from './components/responses-to-vacancies/responses-to-vacancies'
import styles from './employer-messages.module.scss'
import { EmployerMessagesTab } from './employer-messages.types'

export function EmployerMessages() {
  const [selectedTab, setSelectedTab] = useState(EmployerMessagesTab.FromEmployers)
  const tabsSize = useMediaValue({ xs: TabsSize.Small, lg: TabsSize.Medium })

  return (
    <div className={styles.messages}>
      <p className={styles.messagesTitle}>Сообщения</p>
      <Tabs onSelect={setSelectedTab} selectedIndex={selectedTab} size={tabsSize}>
        <TabList className={styles.messagesTabList}>
          <Tab index={EmployerMessagesTab.FromEmployers}>От работодателей</Tab>
          <Tab index={EmployerMessagesTab.FromAdmins}>От администрации</Tab>
        </TabList>
        <TabPanel index={EmployerMessagesTab.FromEmployers} className={styles.messagesTabPanel}>
          <ResponsesToVacancies />
        </TabPanel>
        <TabPanel index={EmployerMessagesTab.FromAdmins}>admin</TabPanel>
      </Tabs>
    </div>
  )
}
