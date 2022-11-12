import { useLazyGetOneUserByPhoneQuery, useLoginUserMutation } from 'api/enhancedApi'
import { LoadingOverlay } from 'components/loading-overlay'
import { useEffect } from 'react'
import styles from './user-existence-checking.module.scss'

interface UserExistenceCheckingProps {
  authToken: string
  phone: string
  onLoggedIn: (accessToken: string) => void
  onUserNotExists: () => void
}

export function UserExistenceChecking({ phone, authToken, onLoggedIn, onUserNotExists }: UserExistenceCheckingProps) {
  const [getOneUserByPhoneQuery] = useLazyGetOneUserByPhoneQuery()
  const [loginUserMutation] = useLoginUserMutation()

  useEffect(() => {
    getOneUserByPhoneQuery({ phone })
      .unwrap()
      .then(response => {
        if (response.user !== null) {
          loginUserMutation({ authToken })
            .unwrap()
            .then(response => onLoggedIn(response.loginUser.accessToken))
        } else {
          onUserNotExists()
        }
      })
  }, [])

  return (
    <div className={styles.container}>
      <LoadingOverlay isAbsolute />
    </div>
  )
}
