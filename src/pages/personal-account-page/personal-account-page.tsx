import { routes } from 'pages/routes'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Chat } from './components/chat/chat'
import { EmployerMessages } from './components/employer-messages/employer-messages'
import { SideBar } from './components/side-bar'
import styles from './personal-account-page.module.scss'

export function PersonalAccountPage() {
  return (
    <div className={styles.page}>
      <SideBar />
      <div className={styles.pageContent}>
        <Routes>
          <Route path={routes.personalAccount.nested.allResumes.exact} element='test1' />
          <Route path={routes.personalAccount.nested.myVacancies.exact} element='test2' />
          <Route path={routes.personalAccount.nested.messages.exact} element={<EmployerMessages />} />
          <Route path={routes.personalAccount.nested.messages.nested.chat(':profileId').exact} element={<Chat />} />
          <Route path={routes.personalAccount.nested.settings.exact} element='test4' />
          <Route path='*' element={<Navigate to={routes.personalAccount.nested.allResumes.absoluteExact} />} />
        </Routes>
      </div>
    </div>
  )
}
