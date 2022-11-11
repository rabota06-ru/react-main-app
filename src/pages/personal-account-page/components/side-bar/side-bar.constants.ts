import { routes } from 'pages/routes'
import { SideBarMenuItem } from './side-bar.types'
import { ReactComponent as AboutMeIcon } from './about-me.svg'
import { ReactComponent as AllResumesIcon } from './all-resumes.svg'
import { ReactComponent as MyVacanciesIcon } from './my-vacancies.svg'
import { ReactComponent as MessagesIcon } from './messages.svg'
import { ReactComponent as SettingsIcon } from './settings.svg'

export const APPLICANT_SIDE_BAR_ITEMS: SideBarMenuItem[] = [
  { Icon: AboutMeIcon, label: 'Обо мне', route: routes.personalAccountAllResumes },
  { Icon: MyVacanciesIcon, label: 'Все вакансии', route: routes.personalAccountMyVacancies },
  { Icon: MessagesIcon, label: 'Сообщения', route: routes.personalAccountMessages },
  { Icon: SettingsIcon, label: 'Настройки', route: routes.personalAccountSettings },
]

export const EMPLOYER_SIDE_BAR_ITEMS: SideBarMenuItem[] = [
  { Icon: AllResumesIcon, label: 'Все резюме', route: routes.personalAccountAllResumes },
  { Icon: MyVacanciesIcon, label: 'Мои вакансии', route: routes.personalAccountMyVacancies },
  { Icon: MessagesIcon, label: 'Сообщения', route: routes.personalAccountMessages },
  { Icon: SettingsIcon, label: 'Настройки', route: routes.personalAccountSettings },
]
