import { CloseButton } from 'components/close-button'
import { Spinner } from 'components/spinner'
import './index.scss'
import { Main } from './pages/main/main'

function App() {
  return (
    <div className='app'>
      <Main />
      <Spinner size={30} />
      <CloseButton />
    </div>
  )
}

export default App
