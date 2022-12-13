import { Notifications } from 'kit/components/notifications'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { App } from './App'
import { store } from './store'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <Notifications>
      <App />
    </Notifications>
  </Provider>
  // </React.StrictMode>
)
