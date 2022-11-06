import React, { HTMLAttributes } from 'react'
import styles from './list.module.scss'
import { ListCardVacancy, ListCardResume } from '../list-card'
import { Value } from 'classnames'

interface ListProps extends Props<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  type: VacansyOrResume
  items: []
}

export enum VacansyOrResume {
  Resume,
  Vacancy,
}

export function List({ items, type, title, ...props }: ListProps) {
  function listHandler(items: []): any {
    if (type === VacansyOrResume.Resume)
      items.map(el => {
        return <ListCardResume cardState={el} />
      })
    else {
      items.map(el => {
        return <ListCardVacancy cardState={el} />
      })
    }
  }

  return <div className={styles.list}>{listHandler}</div>
}
