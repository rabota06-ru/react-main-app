import './index.scss'
import { Routes, Route, Navigate } from 'react-router-dom'
import { routes } from 'pages/routes'
import { UnauthorizedLayout } from 'layouts/unauthorized-layout'
import { MainPage } from 'pages/main-page'
import { AllVacanciesPage } from 'pages/all-vacancies-page'

export function App() {
  return (
    <div className='app'>
      <UnauthorizedLayout>
        <Routes>
          <Route path={routes.main} element={<MainPage />} />
          <Route path={routes.allVacancies} element={<AllVacanciesPage />} />
          <Route path='*' element={<Navigate to={routes.main} />} />
        </Routes>
      </UnauthorizedLayout>
    </div>
  )
}
