import React from 'react'
import { FullCardVacancy } from 'components/full-card'
import { useGetVacancyQuery } from 'api/enhancedApi'
import { useRoute } from 'wouter'
import { routes } from 'pages/routes'
import { SimilarVacanciesSection } from './components/similar-vacancies-section/similar-vacancies-section'
import styles from './full-vacancy-page.module.scss'

interface FullVacancyPageProps {}

export function FullVacancyPage(props: FullVacancyPageProps) {
  const [, params] = useRoute<{ vacancyId: string }>(routes.allVacancies.nested.vacancy(':vacancyId').exact)
  const { data: vacancyData } = useGetVacancyQuery({ vacancyId: params?.vacancyId as string }, { skip: !params?.vacancyId })

  return (
    <div className={styles.main}>
      <FullCardVacancy
        title='UX/UI Дизайнер'
        date='18 октября'
        price={25000}
        company='Beeline'
        location={2}
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
        isFavorite={false}
      />
      <SimilarVacanciesSection />
    </div>
  )
}
