import 'scss/index.scss'
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
import { Redirect, Route, Switch } from 'wouter'

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
          <Switch>
            <Route path={routes.createVacancy.exact}>
              <CreateVacancyPage />
            </Route>
            <Route path={routes.createResume.exact}>
              <CreateResumePage />
            </Route>
            <Route path={routes.personalAccount.inexact}>
              <PersonalAccountPage />
            </Route>
            <Redirect to={routes.personalAccount.inexact} />
          </Switch>
        </AuthorizedLayout>
      ) : (
        <UnauthorizedLayout>
          <Switch>
            <Route path={routes.allVacancies.nested.vacancy(':vacancyId').absoluteExact}>
              <FullVacancyPage />
            </Route>
            <Route path={routes.allResumes.nested.resume(':resumeId').absoluteExact}>
              <FullResumePage />
            </Route>
            <Route path={routes.main.exact}>
              <MainPage />
            </Route>
            <Route path={routes.allVacancies.exact}>
              <AllVacanciesPage />
            </Route>
            <Route path={routes.allResumes.exact}>
              <AllResumesPage />
            </Route>
            {/* <Redirect to={routes.main.exact} /> */}
          </Switch>
          <AuthModal />
        </UnauthorizedLayout>
      )}
      {isAuthorizationLoading && <LoadingOverlay isAbsolute isBlurredBackground spinnerSize={60} />}
    </div>
  )
}
