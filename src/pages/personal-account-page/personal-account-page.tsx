import { routes } from 'pages/routes'
import { useEffect } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { SideBar } from './components/side-bar'
import styles from './personal-account-page.module.scss'

export function PersonalAccountPage() {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    if (routes.personalAccount.startsWith(location.pathname)) {
      navigate(routes.personalAccountAllResumes)
    }
  }, [])

  return (
    <div className={styles.page}>
      <SideBar />
      <div className={styles.pageContent}>
        <Routes>
          <Route path={routes.personalAccountAllResumes} element='test1' />
          <Route path={routes.personalAccountMyVacancies} element='test2' />
          <Route path={routes.personalAccountMessages} element='test3' />
          <Route path={routes.personalAccountSettings} element='test4' />
        </Routes>
      </div>
    </div>
  )
}
