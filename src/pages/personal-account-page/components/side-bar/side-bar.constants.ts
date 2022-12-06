import { routes } from 'pages/routes'
import { SideBarMenuItem } from './side-bar.types'
import { ReactComponent as AboutMeIcon } from './assets/about-me.svg'
import { ReactComponent as AllResumesIcon } from './assets/all-resumes.svg'
import { ReactComponent as MyVacanciesIcon } from './assets/my-vacancies.svg'
import { ReactComponent as MessagesIcon } from './assets/messages.svg'
import { ReactComponent as SettingsIcon } from './assets/settings.svg'

export const APPLICANT_SIDE_BAR_ITEMS: SideBarMenuItem[] = [
  { Icon: AboutMeIcon, label: 'Обо мне', route: routes.personalAccount.nested.allResumes },
  { Icon: MyVacanciesIcon, label: 'Все вакансии', route: routes.personalAccount.nested.myVacancies },
  { Icon: MessagesIcon, label: 'Сообщения', route: routes.personalAccount.nested.messages },
  { Icon: SettingsIcon, label: 'Настройки', route: routes.personalAccount.nested.settings },
]

export const EMPLOYER_SIDE_BAR_ITEMS: SideBarMenuItem[] = [
  { Icon: AllResumesIcon, label: 'Все резюме', route: routes.personalAccount.nested.allResumes },
  { Icon: MyVacanciesIcon, label: 'Мои вакансии', route: routes.personalAccount.nested.myVacancies },
  { Icon: MessagesIcon, label: 'Сообщения', route: routes.personalAccount.nested.messages },
  { Icon: SettingsIcon, label: 'Настройки', route: routes.personalAccount.nested.settings },
]
