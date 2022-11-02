import { Card } from 'components/card'
import { CloseButton } from 'components/close-button'
import { Divider, DividerDirection } from 'components/divider'
import { Dropdown } from 'components/dropdown'
import { Input, InputStatus } from 'components/input'
import { PasswordInput } from 'components/password-input'
import { Spinner } from 'components/spinner'
import { TextArea } from 'components/text-area'
import './index.scss'
import { Main } from './pages/main/main'
import { Color } from './types'

function App() {
  return (
    <div className='app' style={{ padding: 20 }}>
      <Main />
      <PasswordInput />
      <Spinner size={30} />
      <Card hoverShadow={{ blurRadius: 50, spreadRadius: 50 }}>
        <div style={{ height: 100 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, laborum! Illo, natus dolorem facilis obcaecati doloribus
          architecto dolores provident laboriosam?
        </div>
      </Card>
      <TextArea isVerticalResize={true} placeholder='Текс сообщения' />
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
