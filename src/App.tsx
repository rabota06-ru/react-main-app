import './index.scss'
import { Routes, Route, Navigate } from 'react-router-dom'
import { routes } from 'pages/routes'
import { UnauthorizedLayout } from 'layouts/unauthorized-layout'
import { MainPage } from 'pages/main-page'
import { AuthModal } from 'components/auth-modal/auth-modal'
import useTypedSelector from 'hooks/use-typed-selector'
import { AuthorizedLayout } from 'layouts/authorized-layout'
import { LoadingOverlay } from 'components/loading-overlay'
import { PersonalAccountPage } from 'pages/personal-account-page/personal-account-page'
import { FullResumePage } from 'pages/full-resume-page'
import { FullVacancyPage } from 'pages/full-vacancy-page'
import { AllVacanciesPage } from 'pages/all-vacancies-page'
import { AllResumesPage } from 'pages/all-resume-page/all-resumes-page'
import { CreateVacancyPage } from 'pages/create-vacancy-page'
import { CreateResumePage } from 'pages/create-resume-page'
import { useAuthorization } from 'hooks/use-authorization'

export interface CarouselCard {
  iconUrl: string
  profession: string
  name: string
  location: string
  fullResumeLink: string
}

export function App() {
  const accessToken = useTypedSelector(state => state.auth.accessToken)
  const { isLoading: isAuthorizationLoading } = useAuthorization()
  const isLoggedIn = !!accessToken

  return (
    <div className='app'>
      {isLoggedIn ? (
        <AuthorizedLayout>
          <Routes>
            <Route path={routes.createVacancy.exact} element={<CreateVacancyPage />} />
            <Route path={routes.createResume.exact} element={<CreateResumePage />} />
            <Route path={routes.personalAccount.inexact} element={<PersonalAccountPage />} />
            <Route path='*' element={<Navigate to={routes.personalAccount.exact} />} />
          </Routes>
        </AuthorizedLayout>
      ) : (
        <UnauthorizedLayout>
          <Routes>
            <Route path={routes.resume.exact(':vacancyId')} element={<FullVacancyPage />} />
            <Route path={routes.resume.exact(':resumeId')} element={<FullResumePage />} />
            <Route path={routes.main.exact} element={<MainPage />} />
            <Route path={routes.allVacancies.exact} element={<AllVacanciesPage />} />
            <Route path={routes.allResumes.exact} element={<AllResumesPage />} />
            <Route path='*' element={<Navigate to={routes.main.exact} />} />
          </Routes>
          <AuthModal />
        </UnauthorizedLayout>
      )}
      {isAuthorizationLoading && <LoadingOverlay isAbsolute isBlurredBackground spinnerSize={60} />}
    </div>
  )
}
