import { Card } from 'components/card'
import { CloseButton } from 'components/close-button'
import { Input } from 'components/input'
import { Spinner } from 'components/spinner'
import { TextArea } from 'components/text-area'
import './index.scss'
import { Main } from './pages/main/main'

function App() {
  return (
    <div className='app'>
      <Main />
      <Spinner size={30} />
      <Card hoverShadow={{ blurRadius: 50, spreadRadius: 50 }}>
        <div style={{ height: 100 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, laborum! Illo, natus dolorem facilis obcaecati doloribus
          architecto dolores provident laboriosam?
        </div>
      </Card>
      <TextArea VerticalResize={true} placeholder='Текс сообщения'/>
      <CloseButton />
      <Input label='Вакансия' bottomText='testetst' placeholder='testtest' isLoading />
    </div>
  )
}

export default App
