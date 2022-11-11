import './index.scss'
import { Routes, Route, Navigate } from 'react-router-dom'
import { routes } from 'pages/routes'
import { UnauthorizedLayout } from 'layouts/unauthorized-layout'
import { MainPage } from 'pages/main-page'

export interface CarouselCard {
  iconUrl: string
  profession: string
  name: string
  location: string
  fullResumeLink: string
}

export function App() {
  return (
    <div className='app'>
      <UnauthorizedLayout>
        <Routes>
          <Route path={routes.main} element={<MainPage />} />
          <Route path='*' element={<Navigate to={routes.main} />} />
        </Routes>
      </UnauthorizedLayout>
    </div>
  )
}
