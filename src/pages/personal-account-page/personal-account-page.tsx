import { UserRole } from 'api/generated'
import useTypedSelector from 'hooks/use-typed-selector'
import { ApplicantRoutes } from './components/applicant-routes/applicant-routes'
import { EmployerRoutes } from './components/employer-routes/employer-routes'
import { SideBar } from './components/side-bar'
import styles from './personal-account-page.module.scss'

export function PersonalAccountPage() {
  const user = useTypedSelector(state => state.auth.user)

  return (
    <div className={styles.page}>
      <SideBar />
      <div className={styles.pageContent}>
        {user?.role === UserRole.Applicant && <ApplicantRoutes />}
        {user?.role === UserRole.Employer && <EmployerRoutes />}
      </div>
    </div>
  )
}
