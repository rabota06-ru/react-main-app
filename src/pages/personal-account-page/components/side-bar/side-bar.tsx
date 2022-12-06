import useTypedSelector from 'hooks/use-typed-selector'
import { UserRole } from 'api/generated'
import styles from './side-bar.module.scss'
import avatarImage from './assets/avatar.png'
import { UserName } from './components/user-name'
import { MenuItems } from './components/menu-items'

export function SideBar() {
  const user = useTypedSelector(state => state.auth.user)

  return (
    <div className={styles.sideBar}>
      <div className={styles.sideBarTop}>
        <p className={styles.sideBarTitle}>Личный кабинет {user?.role === UserRole.Applicant ? 'соискателя' : 'работодателя'}</p>
        <img className={styles.sideBarAvatar} src={avatarImage} alt='Аватар пользователя' />
        <UserName />
      </div>
      <MenuItems />
    </div>
  )
}
