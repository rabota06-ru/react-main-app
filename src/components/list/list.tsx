import React, { HTMLAttributes, useState } from 'react'
import styles from './list.module.scss'
import { ListCardVacancy, ListCardResume } from '../list-card'

interface ListProps extends Props<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  type: ItemType
  items: any
}

export enum ItemType {
  Resume,
  Vacancy,
}

export function List({ items, type, title, ...props }: ListProps) {
  const [amountCard, setAmount] = useState(10)

  if (type === ItemType.Resume) {
    return (
      <div className={styles.list}>
        {items?.map(el => (
          <ListCardResume headerImage={el.headerImage} title={el.title} name={el.name} location={el.location} text={el.text} />
        ))}
      </div>
    )
  }
  if (type === ItemType.Vacancy) {
    return (
      <div className={styles.list}>
        {items?.map(el => (
          <ListCardVacancy
            headerImage={el.headerImage}
            title={el.title}
            date={el.date}
            company={el.company}
            text={el.text}
            price={el.price}
            location={el.location}
          />
        ))}
      </div>
    )
  }
}
