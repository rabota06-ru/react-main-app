import { Card } from 'components/card'
import { Checkbox } from 'components/checkbox'
import { CloseButton } from 'components/close-button'
import { Divider, DividerDirection } from 'components/divider'
import { Dropdown } from 'components/dropdown'
import { Input, InputStatus } from 'components/input'
import { PhoneInput } from 'components/phone-input'
import { PasswordInput } from 'components/password-input'
import { Spinner } from 'components/spinner'
import { TextArea } from 'components/text-area'
import './index.scss'
import { FullCardResume, FullCardVacancy } from 'components/full-card'
import { Main } from './pages/main/main'
import { Color } from './types'

function App() {
  return (
    <div className='app' style={{ padding: 20 }}>
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
      />
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
      />
      <Main />
      <PasswordInput />
      <Spinner size={30} />
      <PhoneInput />
      <Card hoverShadow={{ blurRadius: 50, spreadRadius: 50 }}>
        <div style={{ height: 100 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, laborum! Illo, natus dolorem facilis obcaecati doloribus
          architecto dolores provident laboriosam?
        </div>
      </Card>
      <TextArea isVerticalResize placeholder='Текс сообщения' />
      <Checkbox text='Adlan' checked />
      <Checkbox text='Ruslan' />
      <Checkbox text='Movsar' />
      <CloseButton />
      <Input label='Вакансия' bottomText='testetst' placeholder='testtest' isLoading />
      <Dropdown
        // isDisabled
        status={InputStatus.Success}
        bottomText='test'
        items={[
          { id: 1, label: 'тест1' },
          { id: 2, label: 'тест2' },
          { id: 3, label: 'тест3' },
          { id: 4, label: 'тест1' },
          { id: 5, label: 'тест2' },
          { id: 6, label: 'тест3' },
          { id: 7, label: 'тест1' },
          { id: 8, label: 'тест2' },
          { id: 9, label: 'тест3' },
          { id: 10, label: 'тест1' },
          { id: 11, label: 'тест2' },
          { id: 12, label: 'тест3' },
        ]}
      />
      <Divider direction={DividerDirection.Horizontal} size={4} color={Color.SuccessColor} />
    </div>
  )
}

export default App
