import { Card } from 'components/card'
import { CloseButton } from 'components/close-button'
import { InputBase, InputStatus } from 'components/input-base'
import { Spinner } from 'components/spinner'
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
      <CloseButton />
      <InputBase bottomText='testetst' status={InputStatus.Error} isDisabled>
        test
      </InputBase>
    </div>
  )
}

export default App
