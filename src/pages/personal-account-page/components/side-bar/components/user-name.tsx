import { UserRole } from 'api/generated'
import useTypedSelector from 'hooks/use-typed-selector'
import { useMemo } from 'react'
import styles from '../side-bar.module.scss'

export function UserName() {
  const user = useTypedSelector(state => state.auth.user)

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

  return <p className={styles.sideBarName}>{userName}</p>
}
