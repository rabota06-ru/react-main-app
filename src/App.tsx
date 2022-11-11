import './index.scss'
import { Routes, Route, Navigate } from 'react-router-dom'
import { routes } from 'pages/routes'
import { UnauthorizedLayout } from 'layouts/unauthorized-layout'
import { MainPage } from 'pages/main-page'
import { AuthModal } from 'components/auth-modal/auth-modal'
import useTypedSelector from 'hooks/use-typed-selector'
import { AuthorizedLayout } from 'layouts/authorized-layout'
import { useLazyCheckIsAuthenticatedQuery, useLazyGetUserQuery, useRefreshAccessTokenMutation } from 'api/enhancedApi'
import { useEffect } from 'react'
import useTypedDispatch from 'hooks/use-typed-dispatch'
import { authSlice } from 'store/slices/auth.slice'
import { LoadingOverlay } from 'components/loading-overlay'
import { PersonalAccountPage } from 'pages/personal-account-page/personal-account-page'
import { parseJwt } from 'utils/parse-jwt'

export interface CarouselCard {
  iconUrl: string
  profession: string
  name: string
  location: string
  fullResumeLink: string
}

export function App() {
  const accessToken = useTypedSelector(state => state.auth.accessToken)
  const isLoggedIn = !!accessToken
  const [checkIsAuthenticatedQuery, checkIsAuthenticatedData] = useLazyCheckIsAuthenticatedQuery()
  const [refreshAccessTokenMutation] = useRefreshAccessTokenMutation()
  const [getUserQuery] = useLazyGetUserQuery()
  const dispatch = useTypedDispatch()

  useEffect(() => {
    checkIsAuthenticatedQuery()
      .unwrap()
      .then(response => {
        if (response.checkIsAuthenticated.authenticated) {
          dispatch(authSlice.actions.setAccessToken(response.checkIsAuthenticated.accessToken!))
        }
      })

    const intervalTimer = setInterval(() => {
      refreshAccessTokenMutation()
        .unwrap()
        .then(response => {
          dispatch(authSlice.actions.setAccessToken(response.refreshAccessToken.accessToken))
        })
    }, 29 * 60 * 1000)

    return () => {
      clearInterval(intervalTimer)
    }
  }, [])

  useEffect(() => {
    // TODO: отрефакторить
    if (accessToken !== null) {
      const { userId } = parseJwt(accessToken)
      getUserQuery({ userId })
        .unwrap()
        .then(response => {
          const user = response.findFirstUser
          if (user) {
            let name: string | null = null
            if (user.applicantProfile?.resume) {
              name = user.applicantProfile.resume.firstname + user.applicantProfile.resume.lastname
            }

            if (user.employerProfile) {
              name = user.employerProfile.companyName
            }

            dispatch(
              authSlice.actions.setUserInfo({
                id: user.id,
                role: user.role,
                name,
              })
            )
          }
        })
    }
  }, [accessToken])

  return (
    <div className='app'>
      {isLoggedIn ? (
        <AuthorizedLayout>
          <Routes>
            <Route path={routes.personalAccount.inexact} element={<PersonalAccountPage />} />
            <Route path='*' element={<Navigate to={routes.personalAccount.exact} />} />
          </Routes>
        </AuthorizedLayout>
      ) : (
        <UnauthorizedLayout>
          <Routes>
            <Route path={routes.main.exact} element={<MainPage />} />
            <Route path='*' element={<Navigate to={routes.main.exact} />} />
          </Routes>
          <AuthModal />
        </UnauthorizedLayout>
      )}
      {checkIsAuthenticatedData.isLoading && <LoadingOverlay isAbsolute isBlurredBackground spinnerSize={60} />}
    </div>
  )
}
