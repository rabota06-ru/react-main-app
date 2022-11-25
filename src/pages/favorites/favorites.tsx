import { List } from 'components/list';
import { NewsCard } from 'components/news-card';
import { NewsItem } from 'components/news-card';
import styles from './favorites.module.scss';

const favorites: NewsItem[] = [
  {
    id: '111',
    firstName: 'Анзор',
    lastName: 'Хамхоев',
    createdAt: '3 часа назад',
    title: 'Мероприятие СтудВесна',
    description:
      'Всем добрый день! В начале октября в актовом зале города Магас пройдет мероприятие СтудВесна. Потребуются несколько волонтёров для установки оборудования',
  },
  {
    id: '777',
    firstName: 'Муаз',
    lastName: 'Холухаев',
    createdAt: '5 часов назад',
    title: 'Мероприятие ХуйНа',
    description: 'всем добрый день... Жду зачет...',
  },
];

export function Favorites() {
  return (
    <div className={styles.favorite}>
      <h2 className={styles.favoriteTitle}>Закладки</h2>
      <List items={favorites} Item={NewsCard} gap={30} />
    </div>
  );
}
