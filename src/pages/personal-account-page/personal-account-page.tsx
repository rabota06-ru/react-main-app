import { routes } from 'pages/routes'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Chat } from './components/chat/chat'
import { EmployerMessages } from './components/employer-messages/employer-messages'
import { SideBar } from './components/side-bar'
import styles from './personal-account-page.module.scss'

export function PersonalAccountPage() {
  console.log(routes.personalAccountChat.exact(':profileId'))
  return (
    <div className={styles.page}>
      <SideBar />
      <div className={styles.pageContent}>
        <Routes>
          <Route path={routes.personalAccountAllResumes.exact} element='test1' />
          <Route path={routes.personalAccountMyVacancies.exact} element='test2' />
          <Route path={routes.personalAccountMessages.exact} element={<EmployerMessages />} />
          <Route path={routes.personalAccountChat.exact(':profileId')} element={<Chat />} />
          <Route path={routes.personalAccountSettings.exact} element='test4' />
          <Route path='*' element={<Navigate to={routes.personalAccountAllResumes.absoluteExact} />} />
        </Routes>
      </div>
    </div>
  )
}
