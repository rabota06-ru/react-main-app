import { routes } from 'pages/routes'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Messages } from './components/messages/messages'
import { SideBar } from './components/side-bar'
import styles from './personal-account-page.module.scss'

export function PersonalAccountPage() {
  return (
    <div className={styles.page}>
      <SideBar />
      <div className={styles.pageContent}>
        <Routes>
          <Route path={routes.personalAccountAllResumes.exact} element='test1' />
          <Route path={routes.personalAccountMyVacancies.exact} element='test2' />
          <Route path={routes.personalAccountMessages.exact} element={<Messages />} />
          <Route path={routes.personalAccountSettings.exact} element='test4' />
          <Route path='*' element={<Navigate to={routes.personalAccountAllResumes.absoluteExact} />} />
        </Routes>
      </div>
    </div>
  )
}
