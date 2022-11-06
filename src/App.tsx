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
import { Main } from './pages/main/main'
import { Color } from './types'
import { ListCardVacancy } from 'components/list-card'
import { ListCardResume } from 'components/list-card'

const vacancyState = {
  title: 'UX/UI Дизайнер (удаленно)',
  date: '18 октября',
  operator: 'Beeline',
  text: 'Делать архитектуру продукта в форме чарта. По нему понятны все шаги, которые пользователь может сделать в приложении. Работать над Вайрфреймами каждого экрана. Без использования цветов с фокусом на лэйаут каждого экрана. Наконец рисовать сам дизайн продукта. Продумывать дизайн систему продукта и прорабатывать дизайн, чтобы он подходил конкретной группе пользователей',
  price: 2500,
  location: 'Назрань',
}
const resumeState = {
  title: 'UX/UI Дизайнер (удаленно)',
  name: 'Adlan B.',
  text: 'Делать архитектуру продукта в форме чарта. По нему понятны все шаги, которые пользователь может сделать в приложении. Работать над Вайрфреймами каждого экрана. Без использования цветов с фокусом на лэйаут каждого экрана. Наконец рисовать сам дизайн продукта. Продумывать дизайн систему продукта и прорабатывать дизайн, чтобы он подходил конкретной группе пользователей',
  location: 'Назрань',
}

function App() {
  return (
    <div className='app' style={{ padding: 20 }}>
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
      <ListCardResume
        title={'UX/UI Дизайнер (удаленно)'}
        name={'Adlan'}
        location={'Назрань'}
        text={
          'Делать архитектуру продукта в форме чарта. По нему понятны все шаги, которые пользователь может сделать в приложении. Работать над Вайрфреймами каждого экрана. Без использования цветов с фокусом на лэйаут каждого экрана. Наконец рисовать сам дизайн продукта. Продумывать дизайн систему продукта и прорабатывать дизайн, чтобы он подходил конкретной группе пользователей'
        }
      />
      <ListCardVacancy
        title={'UX/UI Дизайнер (удаленно)'}
        date={'18 octember'}
        operator={'beline'}
        text={
          'Делать архитектуру продукта в форме чарта. По нему понятны все шаги, которые пользователь может сделать в приложении. Работать над Вайрфреймами каждого экрана. Без использования цветов с фокусом на лэйаут каждого экрана. Наконец рисовать сам дизайн продукта. Продумывать дизайн систему продукта и прорабатывать дизайн, чтобы он подходил конкретной группе пользователей'
        }
        price={2500}
        location={'Назрань'}
      />
      <TextArea isVerticalResize={true} placeholder='Текс сообщения' />
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
