import { FullCardResume } from 'components/full-card'
import { SimilarResumesSection } from './components/similar-resumes-section/similar-resumes-section'
import styles from './full-resume-page.module.scss'

interface FullResumePageProps {}

export function FullResumePage(props: FullResumePageProps) {
  return (
    <div className={styles.main}>
      <FullCardResume
        title='React разработчик'
        date='18 октября'
        location={4}
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
        isFavorite={false}
      />
      <SimilarResumesSection />
    </div>
  )
}
