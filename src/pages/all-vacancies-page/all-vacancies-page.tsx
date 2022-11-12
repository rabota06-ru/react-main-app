import { Container } from 'components/container'
import { List } from 'components/list'
import { ItemType } from 'components/list/list'
import styles from './all-vacancies-page.module.scss'

const item = [
  {
    title: 'test',
    company: 'test',
    headerImage: 1,
    date: '19.09',
    text: 'testtesttest',
    price: 10000,
    location: 'Москва',
  },
  { title: 'test', company: 'test', headerImage: 10, date: '19.09', text: 'testtesttest', price: 10000, location: 'Москва' },
  { title: 'test', company: 'test', headerImage: 1, date: '19.09', text: 'testtesttest', price: 10000, location: 'Москва' },
]

export function AllVacanciesPage() {
  return (
    <div className={styles.allVacanciesPage}>
      <List title={'Все вакансии'} items={item} type={ItemType.Vacancy} />
    </div>
  )
}
