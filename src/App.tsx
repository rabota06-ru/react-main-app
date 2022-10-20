import './styles.scss'
import { Modal } from 'components/modal'
import { Main } from './pages/main/main'

function App() {
  return (
    <div className='app'>
      <Main />
      <Modal isShown>
        <div>tetsesfsadf</div>
      </Modal>
    </div>
  )
}

export default App
