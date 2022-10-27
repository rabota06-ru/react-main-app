import { Card } from 'components/card'
import { CloseButton } from 'components/close-button'
import { Dropdown } from 'components/dropdown'
import { Input, InputStatus } from 'components/input'
import { Spinner } from 'components/spinner'
import { useState } from 'react'
import './index.scss'
import { Main } from './pages/main/main'

function App() {
  const [selectedItem, setSelectedItem] = useState({ id: 1, label: 'ntcn1' })

  return (
    <div className='app' style={{ padding: 20 }}>
      <Main />
      <Spinner size={30} />
      <Card hoverShadow={{ blurRadius: 50, spreadRadius: 50 }}>
        <div style={{ height: 100 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, laborum! Illo, natus dolorem facilis obcaecati doloribus
          architecto dolores provident laboriosam?
        </div>
      </Card>
      <CloseButton />
      <Input label='Вакансия' bottomText='testetst' placeholder='testtest' isLoading />
      <Dropdown
        isCollapsed
        // isDisabled
        isLoading
        status={InputStatus.Error}
        bottomText='test'
        items={[
          { id: 1, label: 'тест1' },
          { id: 2, label: 'тест2' },
          { id: 3, label: 'тест3' },
        ]}
        onSelectItem={setSelectedItem}
        selectedItem={selectedItem}
      />
    </div>
  )
}

export default App
