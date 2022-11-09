import React, { HTMLAttributes, useState } from 'react'
import styles from './list.module.scss'
import { ListCardVacancy, ListCardResume } from '../list-card'

interface ListProps extends Props<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  type: ItemType
  items: []
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
        {items.map((el, index) => (
          <ListCardResume cardState={el} />
        ))}
      </div>
    )
  }
  if (type === ItemType.Vacancy) {
    return (
      <div className={styles.list}>
        {items.map(el => (
          <ListCardVacancy cardState={el} />
        ))}
      </div>
    )
  }
}
