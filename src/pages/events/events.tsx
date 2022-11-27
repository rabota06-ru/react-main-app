import { EventCard, EventItem } from 'components/event-card';
import { List } from 'components/list';
import styles from './events.module.scss';

const events: EventItem[] = [
  {
    id: '1',
    title: 'День учителя',
    date: '5 октября',
    location: 'Магас, главный корпус',
    seatsCountOccupied: 20,
    seatsCountTotal: 20,
    description:
      'В ФизМат корпусе будет проходит конференция юных программистов. Будут представители из МФТИ, ВШЭ и МГУ',
  },
  {
    id: '2',
    title: 'День учителя',
    date: '5 октября',
    location: 'Магас, главный корпус',
    seatsCountOccupied: 7,
    seatsCountTotal: 20,
    description:
      'В ФизМат корпусе будет проходит конференция юных программистов. Будут представители из МФТИ, ВШЭ и МГУ',
  },
  {
    id: '3',
    title: 'День учителя',
    date: '5 октября',
    location: 'Магас, главный корпус',
    seatsCountOccupied: 7,
    seatsCountTotal: 20,
    description:
      'В ФизМат корпусе будет проходит конференция юных программистов. Будут представители из МФТИ, ВШЭ и МГУ',
  },
  {
    id: '4',
    title: 'День учителя',
    date: '5 октября',
    location: 'Магас, главный корпус',
    seatsCountOccupied: 7,
    seatsCountTotal: 20,
    description:
      'В ФизМат корпусе будет проходит конференция юных программистов. Будут представители из МФТИ, ВШЭ и МГУ',
  },
  {
    id: '5',
    title: 'День учителя',
    date: '5 октября',
    location: 'Магас, главный корпус',
    seatsCountOccupied: 7,
    seatsCountTotal: 20,
    description:
      'В ФизМат корпусе будет проходит конференция юных программистов. Будут представители из МФТИ, ВШЭ и МГУ',
  },
];

export function Events() {
  return (
    <div className={styles.events}>
      <List items={events} Item={EventCard} listProps={{ className: styles.eventsList }} />
    </div>
  );
}
