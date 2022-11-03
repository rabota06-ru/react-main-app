import { Card } from 'components/card'
import { Carousel, ResumeCard } from 'components/carousel'
import { Checkbox } from 'components/checkbox'
import { CloseButton } from 'components/close-button'
import { Divider, DividerDirection } from 'components/divider'
import { Dropdown } from 'components/dropdown'
import { Input, InputStatus } from 'components/input'
import { PhoneInput } from 'components/phone-input'
import { PasswordInput } from 'components/password-input'
import { Spinner } from 'components/spinner'
import { Tabs, TabList, Tab, TabPanel } from 'components/tabs'
import { useState } from 'react'
import { TextArea } from 'components/text-area'
import './index.scss'
import { Main } from './pages/main/main'
import { Color } from './types'

export interface CarouselCard {
  iconUrl: string
  profession: string
  name: string
  location: string
  fullResumeLink: string
}

function App() {
  const [tabIndex, setTabIndex] = useState(0)
  const [list, setList] = useState<CarouselCard[]>([
    {
      iconUrl: '',
      profession: 'Программист',
      name: 'Адам Х.',
      location: 'Галаши',
      fullResumeLink: '#',
    },
    {
      iconUrl: '',
      profession: 'Программист',
      name: 'Адам Х.',
      location: 'Галаши',
      fullResumeLink: '#',
    },
    {
      iconUrl: '',
      profession: 'Программист',
      name: 'Адам Х.',
      location: 'Галаши',
      fullResumeLink: '#',
    },
    {
      iconUrl: '',
      profession: 'Программист',
      name: 'Адам Х.',
      location: 'Галаши',
      fullResumeLink: '#',
    },
    {
      iconUrl: '',
      profession: 'Программист',
      name: 'Адам Х.',
      location: 'Галаши',
      fullResumeLink: '#',
    },
    {
      iconUrl: '',
      profession: 'Программист',
      name: 'Адам Х.',
      location: 'Галаши',
      fullResumeLink: '#',
    },
  ])

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
      <TextArea isVerticalResize={true} placeholder='Текс сообщения' />
      <Checkbox text='Adlan' checked />
      <Checkbox text='Ruslan' />
      <Checkbox text='Movsar' />
      <CloseButton />
      <Input label='Вакансия' bottomText='testetst' placeholder='testtest' isLoading />
      {/* <Dropdown
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
      /> */}
      <Divider direction={DividerDirection.Horizontal} size={4} color={Color.SuccessColor} />
      <Carousel Item={ResumeCard} items={list} visibleItemsCount={4} skipItemsCount={1} />
      <Tabs selectedIndex={tabIndex} onSelect={index => setTabIndex(index)}>
        <TabList>
          <Tab>Title 1</Tab>
          <Tab>Title 2</Tab>
          <Tab>Title 3</Tab>
        </TabList>

        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 3</h2>
        </TabPanel>
      </Tabs>
    </div>
  )
}

export default App
