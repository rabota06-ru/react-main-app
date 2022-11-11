import { useMemo } from 'react'
import cn from 'classnames'
import { useLocation, useNavigate } from 'react-router-dom'
import useTypedSelector from 'hooks/use-typed-selector'
import { UserRole } from 'api/generated'
import styles from './side-bar.module.scss'
import avatarImage from './avatar.png'
import { APPLICANT_SIDE_BAR_ITEMS, EMPLOYER_SIDE_BAR_ITEMS } from './side-bar.constants'

export function SideBar() {
  const user = useTypedSelector(state => state.auth.user)
  const navigate = useNavigate()
  const location = useLocation()

  const menuItems = useMemo(() => {
    if (user?.role === UserRole.Applicant) return APPLICANT_SIDE_BAR_ITEMS
    if (user?.role === UserRole.Employer) return EMPLOYER_SIDE_BAR_ITEMS
    return []
  }, [user?.role])

  const userName = useMemo(() => {
    let name: string = ''
    if (user === null) name = 'Войдите в аккаунт'
    else if (user.name !== null) {
      name = user.name
    } else {
      if (user.role === UserRole.Applicant) name = 'Соискатель'
      if (user.role === UserRole.Employer) name = 'Работодатель'
    }

    return name
  }, [user])

  return (
    <div className={styles.sideBar}>
      <div className={styles.sideBarTop}>
        <p className={styles.sideBarTitle}>Личный кабинет {user?.role === UserRole.Applicant ? 'соискателя' : 'работодателя'}</p>
        <img className={styles.sideBarAvatar} src={avatarImage} alt='Аватар пользователя' />
        <p className={styles.sideBarName}>{userName}</p>
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
