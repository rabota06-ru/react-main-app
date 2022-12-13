import { UserRole } from 'api/generated'
import useTypedSelector from 'hooks/use-typed-selector'
import { useMemo } from 'react'
import cn from 'classnames'
import { useLocation } from 'wouter'
import { APPLICANT_SIDE_BAR_ITEMS, EMPLOYER_SIDE_BAR_ITEMS } from '../side-bar.constants'
import styles from '../side-bar.module.scss'

export function MenuItems() {
  const user = useTypedSelector(state => state.auth.user)
  const [location, setLocation] = useLocation()

  const menuItems = useMemo(() => {
    if (user?.role === UserRole.Applicant) return APPLICANT_SIDE_BAR_ITEMS
    if (user?.role === UserRole.Employer) return EMPLOYER_SIDE_BAR_ITEMS
    return []
  }, [user?.role])

  return (
    <div className={styles.sideBarMenu}>
      {menuItems.map(({ Icon, label, route }) => (
        <div
          key={route.exact}
          className={cn(styles.sideBarMenuItem, {
            [styles.sideBarMenuItem_Active]: location.startsWith(route.absoluteExact),
          })}
          onClick={() => setLocation(route.absoluteExact)}
        >
          <Icon className={styles.sideBarMenuItemIcon} />
          <p className={styles.sideBarMenuItemLabel}>{label}</p>
        </div>
      ))}
    </div>
  )
}
