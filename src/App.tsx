import './index.scss'
import { Routes, Route, Navigate } from 'react-router-dom'
import { routes } from 'pages/routes'
import { UnauthorizedLayout } from 'layouts/unauthorized-layout'
import { MainPage } from 'pages/main-page'
import { AuthModal } from 'components/auth-modal/auth-modal'
import useTypedSelector from 'hooks/use-typed-selector'
import { AuthorizedLayout } from 'layouts/authorized-layout'
import { useLazyCheckIsAuthenticatedQuery } from 'api/enhancedApi'
import { useEffect } from 'react'
import useTypedDispatch from 'hooks/use-typed-dispatch'
import { authSlice } from 'store/slices/auth.slice'
import { LoadingOverlay } from 'components/loading-overlay'

export interface CarouselCard {
  iconUrl: string
  profession: string
  name: string
  location: string
  fullResumeLink: string
}

export function App() {
  const isLoggedIn = useTypedSelector(state => !!state.auth.accessToken)
  const [checkIsAuthenticatedQuery, checkIsAuthenticatedData] = useLazyCheckIsAuthenticatedQuery()
  const dispatch = useTypedDispatch()

  useEffect(() => {
    checkIsAuthenticatedQuery()
      .unwrap()
      .then(response => {
        if (response.checkIsAuthenticated.authenticated) {
          dispatch(authSlice.actions.setAccessToken(response.checkIsAuthenticated.accessToken!))
        }
      })
  }, [])

  return (
    <div className='app'>
      {isLoggedIn ? (
        <AuthorizedLayout>
          <Routes>{/* <Route /> */}</Routes>
        </AuthorizedLayout>
      ) : (
        <UnauthorizedLayout>
          <Routes>
            <Route path={routes.main} element={<MainPage />} />
            <Route path='*' element={<Navigate to={routes.main} />} />
          </Routes>
          <AuthModal />
        </UnauthorizedLayout>
      )}
      {checkIsAuthenticatedData.isLoading && <LoadingOverlay isAbsolute isBlurredBackground spinnerSize={60} />}
    </div>
  )
}
