import './index.scss'
import { Routes, Route, Navigate } from 'react-router-dom'
import { routes } from 'pages/routes'
import { UnauthorizedLayout } from 'layouts/unauthorized-layout'
import { MainPage } from 'pages/main-page'
import { AuthModal } from 'components/auth-modal/auth-modal'
import useTypedSelector from 'hooks/use-typed-selector'

export interface CarouselCard {
  iconUrl: string
  profession: string
  name: string
  location: string
  fullResumeLink: string
}

export function App() {
  const isLoggedIn = useTypedSelector(state => !!state.auth.accessToken)

  return (
    <div className='app'>
      {isLoggedIn ? (
        <div />
      ) : (
        <UnauthorizedLayout>
          <Routes>
            <Route path={routes.main} element={<MainPage />} />
            <Route path='*' element={<Navigate to={routes.main} />} />
          </Routes>
          <AuthModal />
        </UnauthorizedLayout>
      )}
    </div>
  )
}
