import { FC, HtmlHTMLAttributes, LinkHTMLAttributes } from 'react';
import cn from 'classnames';
import styles from './list.module.scss';

interface ListProps<T> {
  items: T[];
  Item: FC<T>;
  gap?: number;
  listProps?: Props<HtmlHTMLAttributes<HTMLUListElement>, HTMLUListElement>;
  itemProps?: Props<LinkHTMLAttributes<HTMLLIElement>, HTMLLIElement>;
}

export function List<T extends Record<any, any>>({
  items,
  Item,
  gap,
  listProps,
  itemProps,
}: ListProps<T>) {
  return (
    <ul {...listProps} className={cn(styles.list, listProps?.className)} style={{ gap }}>
      {items.map((item) => (
        <li {...itemProps} key={item.id} className={cn(styles.listItem, itemProps?.className)}>
          <Item key={item.id} {...item} />
        </li>
      ))}
    </ul>
  );
}
