import UserIcon from 'assets/images/user-icon.svg';
import HomeIcon from 'assets/images/home-icon.svg';
import StarIcon from 'assets/images/star-icon.svg';
import ScheduleIcon from 'assets/images/schedule-icon.svg';

import { MenuItem } from './nav-bar.types';
import { routes } from 'pages/routes';

export const menuItems: MenuItem[] = [
  {
    url: routes.profile,
    Icon: UserIcon,
    label: 'Профиль',
  },
  {
    url: routes.news,
    Icon: HomeIcon,
    label: 'Новости',
  },
  {
    url: routes.favorites,
    Icon: StarIcon,
    label: 'Закладки',
  },
  {
    url: routes.events,
    Icon: ScheduleIcon,
    label: 'Мероприятия',
  },
];
