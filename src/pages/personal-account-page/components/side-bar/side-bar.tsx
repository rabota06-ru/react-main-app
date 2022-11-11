import { useState } from 'react'
import cn from 'classnames'
import { useLocation, useNavigate } from 'react-router-dom'
import { routes } from 'pages/routes'
import styles from './side-bar.module.scss'
import avatarImage from './avatar.png'
import { SideBarMenuItem } from './side-bar.types'
import { ReactComponent as AllResumesIcon } from './all-resumes.svg'
import { ReactComponent as MyVacanciesIcon } from './my-vacancies.svg'
import { ReactComponent as MessagesIcon } from './messages.svg'
import { ReactComponent as SettingsIcon } from './settings.svg'

export function SideBar() {
  const [menuItems] = useState<SideBarMenuItem[]>([
    { Icon: AllResumesIcon, label: 'Все резюме', route: routes.personalAccountAllResumes },
    { Icon: MyVacanciesIcon, label: 'Мои вакансии', route: routes.personalAccountMyVacancies },
    { Icon: MessagesIcon, label: 'Сообщения', route: routes.personalAccountMessages },
    { Icon: SettingsIcon, label: 'Настройки', route: routes.personalAccountSettings },
  ])
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <div className={styles.sideBar}>
      <div className={styles.sideBarTop}>
        <p className={styles.sideBarTitle}>Личный кабинет работодателя</p>
        <img className={styles.sideBarAvatar} src={avatarImage} alt='Аватар пользователя' />
        <p className={styles.sideBarName}>Ахмед К.</p>
      </div>
      <div className={styles.sideBarMenu}>
        {menuItems.map(({ Icon, label, route }) => (
          <div
            key={route.exact}
            className={cn(styles.sideBarMenuItem, {
              [styles.sideBarMenuItem_Active]: location.pathname.startsWith(route.absoluteExact),
            })}
            onClick={() => navigate(route.absoluteExact)}
          >
            <Icon className={styles.sideBarMenuItemIcon} />
            <p className={styles.sideBarMenuItemLabel}>{label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
