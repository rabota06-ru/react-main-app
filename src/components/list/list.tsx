import React, { HTMLAttributes } from 'react'
import styles from './list.module.scss'
import { ListCardVacancy, ListCardResume } from '../list-card'
import { SlArrowDown } from 'react-icons/sl'
import { Button } from '../button'
import { GetVacanciesQuery, GetResumesQuery } from 'api/generated'

type ListProps = {} & Props<HTMLAttributes<HTMLDivElement>, HTMLDivElement> &
  (
    | {
        type: ItemType.Vacancy
        items: GetVacanciesQuery['vacancies']
      }
    | {
        type: ItemType.Resume
        items: GetResumesQuery['resumes']
      }
  )

export enum ItemType {
  Resume,
  Vacancy,
}

export function List({ items, type, title, ...props }: ListProps) {
  if (type === ItemType.Resume) {
    return (
      <div className={styles.list}>
        <div className={styles.listTitle}>
          <p>Все резюме</p>
        </div>
        {items?.map(el => (
          <ListCardResume
            key={el.id}
            headerImage={el.fieldOfActivity}
            title={el.education}
            name={el.firstname + ' ' + el.lastname}
            location={el.placeOfResidence}
            text={el.aboutMe}
          />
        ))}
        <Button isShadow={false} className={styles.listButton}>
          <SlArrowDown className={styles.listButtonIcon} />
          <p>Показать еще</p>
        </Button>
      </div>
    )
  }
  if (type === ItemType.Vacancy) {
    return (
      <div className={styles.list}>
        <div className={styles.listTitle}>
          <p>Все вакансии</p>
        </div>
        {items?.map(el => (
          <ListCardVacancy
            key={el.id}
            headerImage={el.fieldOfActivity}
            title={el.post}
            date={el.createdAt}
            company={el.employer.companyName}
            text={el.description}
            price={el.salary}
            location={el.placeOfWork}
          />
        ))}
        <Button isShadow={false} className={styles.listButton}>
          <SlArrowDown className={styles.listButtonIcon} />
          <p>Показать еще</p>
        </Button>
      </div>
    )
  }

  return null
}
