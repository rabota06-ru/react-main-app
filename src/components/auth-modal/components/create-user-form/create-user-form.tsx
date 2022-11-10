import { Button } from 'components/button'
import { uniqueId } from 'utils/unique-id'
import { useCallback, useMemo, useState } from 'react'
import { UserRole } from 'api/generated'
import cn from 'classnames'
import { useCreateAndLoginUserMutation } from 'api/enhancedApi'
import styles from './create-user-form.module.scss'
import SearchJobImage from './search-job.png'
import SearchEmployeeImage from './search-employee.png'

interface CreateUserFormProps {
  authToken: string
  onUserLoggedIn: (accessToken: string) => void
}

export function CreateUserForm({ authToken, onUserLoggedIn }: CreateUserFormProps) {
  const [selectedUserRole, setSelectedUserRole] = useState(UserRole.Applicant)
  const [createAndLoginUserMutation, createAndLoginUserData] = useCreateAndLoginUserMutation()

  const searchJobInputId = useMemo(uniqueId, [])
  const searchEmployeeInputId = useMemo(uniqueId, [])

  const login = useCallback(() => {
    createAndLoginUserMutation({ authToken, data: { role: selectedUserRole } })
      .unwrap()
      .then(response => onUserLoggedIn(response.createAndLoginUser.accessToken))
  }, [createAndLoginUserMutation, authToken, selectedUserRole, onUserLoggedIn])

  return (
    <div className={styles.form}>
      <p className={styles.formTitle}>Создайте бесплатную учетную запись сегодня</p>
      <div className={styles.formOptions}>
        <div
          className={cn(styles.formOption, { [styles.formOption_Selected]: selectedUserRole === UserRole.Applicant })}
          onClick={() => setSelectedUserRole(UserRole.Applicant)}
        >
          <img src={SearchJobImage} className={styles.formOptionImage} alt='Я ищу работу' />
          <label className={styles.formOptionLabel} htmlFor={searchJobInputId}>
            <input
              className={styles.formOptionInput}
              id={searchJobInputId}
              type='radio'
              onChange={() => setSelectedUserRole(UserRole.Applicant)}
              checked={selectedUserRole === UserRole.Applicant}
            />
            Я ищу работу
          </label>
        </div>
        <div
          className={cn(styles.formOption, { [styles.formOption_Selected]: selectedUserRole === UserRole.Employer })}
          onClick={() => setSelectedUserRole(UserRole.Employer)}
        >
          <img src={SearchEmployeeImage} className={styles.formOptionImage} alt='Я ищу работника' />
          <label className={styles.formOptionLabel} htmlFor={searchEmployeeInputId}>
            <input
              className={styles.formOptionInput}
              id={searchEmployeeInputId}
              type='radio'
              onChange={() => setSelectedUserRole(UserRole.Employer)}
              checked={selectedUserRole === UserRole.Employer}
            />
            Я ищу работника
          </label>
        </div>
      </div>
      <Button className={styles.formButton} onClick={login} isLoading={createAndLoginUserData.isLoading}>
        Войти
      </Button>
    </div>
  )
}
