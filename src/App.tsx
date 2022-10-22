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
      <CloseButton />
      <InputBase bottomText='testetst' status={InputStatus.Error} />
    </div>
  )
}

export default App
