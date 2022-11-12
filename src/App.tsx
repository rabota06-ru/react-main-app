import './index.scss'
import { Routes, Route, Navigate } from 'react-router-dom'
import { routes } from 'pages/routes'
import { UnauthorizedLayout } from 'layouts/unauthorized-layout'
import { MainPage } from 'pages/main-page'
import { FullCardResume } from './components/full-card/full-card-resume'
import { FullCardVacancy } from './components/full-card/full-card-vacancy'

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
          <Route
            path={routes.resume('1')}
            element={
              <FullCardResume
                title='UX/UI Дизайнер'
                date='18 октября'
                city='Назрань'
                soughtPosition='Frontend разработчик'
                education='Московский государственный технический университет имени Н.Э.Баумана'
                experience='- опыт работы с HTML5, CSS3, JS;
        - знание JavaScript/JQuery;
        - опыт адаптивной верстки;
        - опыт создания HTML-страницы сайта на основе дизайн-макетов;
        - опыт вёрстки сайтов и шаблонов для CMS;
        - навыки привязки к пользовательскому интерфейсу скриптов, которые обеспечивают визуализацию и анимацию страниц сайта;
        - навыки обеспечения необходимого уровня пользовательского интерфейса (UI — User Interface) и опыта взаимодействия (UX — User Experience);'
                aboutMe='Умение работать в режиме многозадачности и высокие аналитические способности позволяют мне эффективно работать с большими объёмами информации, быстро находить качественные решения сложных задач.'
                viewCount={77}
                phoneNumber='+7 (999) 999-99-99'
                headerImage={1}
                isFavorite
              />
            }
          />
          <Route
            path={routes.resume('2')}
            element={
              <FullCardVacancy
                title='UX/UI Дизайнер'
                date='18 октября'
                price={25000}
                company='Beeline'
                city='Назрань'
                viewCount={77}
                description='Наша команда ищет Мидл/Старшего UI/UX Дизайнера. Важно, чтобы это был человек, 
        который способен не только создать красивый интерфейс, но и может полностью продумать продукт, 
        его логику, UX. Мы в свою очередь обещаем работу над интересными 
        продуктами и задачами в команде специалистов своего дела!'
                responsibilities='1) Создавать крутые продукты!
        2) Делать архитектуру продукта в форме чарта. По нему понятны все шаги, которые пользователь может сделать в приложении.
        3) Работать над Вайрфреймами каждого экрана. Без использования цветов с фокусом на лэйаут каждого экрана.
        4) Наконец рисовать сам дизайн продукта. Продумывать дизайн систему продукта и прорабатывать дизайн, чтобы он подходил конкретной группе пользователей'
                requirements='1) Удаленная работа.
        2) Работаем организованно: используем месенджеры, таск менеджеры (в которых ведем спринты), и тайм трекеры.
        3) Большая часть работы ведется на английском языке, поэтому необходимо знание языка достаточного для изучения профессиональной литературы и общения на рабочие темы.'
                schedule='1) Полный рабочий день - 8 часов.
        2) График работы: Обязательно работать в период 9 утра - 6 вечера.'
                phoneNumber='+7 (999) 999-99-99'
                headerImage={1}
                isFavorite
              />
            }
          />
          <Route path={routes.main} element={<MainPage />} />
          <Route path='*' element={<Navigate to={routes.main} />} />
        </Routes>
      </UnauthorizedLayout>
    </div>
  )
}
