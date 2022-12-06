import { Modal } from 'kit/components/modal'
import useTypedDispatch from 'hooks/use-typed-dispatch'
import useTypedSelector from 'hooks/use-typed-selector'
import { routes } from 'pages/routes'
import { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { authSlice } from 'store/slices/auth.slice'
import { useFetchAndSetAuthorizedUser } from 'hooks/use-authorization'
import styles from './auth-modal.module.scss'
import { AuthModalStep } from './auth-modal.types'
import { CodeForm } from './components/code-form/code-form'
import { CreateUserForm } from './components/create-user-form/create-user-form'
import { PhoneForm } from './components/phone-form/phone-form'
import { UserExistenceChecking } from './components/user-existence-checking/user-existence-checking'

export function AuthModal() {
  const isModalShown = useTypedSelector(state => state.auth.isAuthModalShown)
  const [step, setStep] = useState(AuthModalStep.Phone)
  const [phone, setPhone] = useState<string>('')
  const [phoneAuthToken, setPhoneAuthToken] = useState('')
  const [codeAuthToken, setCodeAuthToken] = useState('')
  const navigate = useNavigate()
  const dispatch = useTypedDispatch()
  const fetchAndSetUser = useFetchAndSetAuthorizedUser()

  const onPhoneFormSuccess = useCallback((authToken: string, phone: string) => {
    setPhone(phone)
    setPhoneAuthToken(authToken)
    setStep(AuthModalStep.MessageCode)
  }, [])

  const onCodeFormSuccess = useCallback((authToken: string) => {
    setCodeAuthToken(authToken)
    setStep(AuthModalStep.UserExistenceChecking)
  }, [])

  const resetAndClose = useCallback(() => {
    setStep(AuthModalStep.Phone)
    setPhone('')
    setPhoneAuthToken('')
    setCodeAuthToken('')
    dispatch(authSlice.actions.hideAuthModal())
  }, [dispatch])

  const onUserLoggedId = useCallback(
    (accessToken: string) => {
      dispatch(authSlice.actions.setAccessToken(accessToken))
      fetchAndSetUser(accessToken)
      navigate(routes.allVacancies.exact)
      resetAndClose()
    },
    [navigate, resetAndClose, dispatch, fetchAndSetUser]
  )

  const onUserNotExists = useCallback(() => {
    setStep(AuthModalStep.CreateUser)
  }, [])

  return (
    <Modal isShown={isModalShown} onClose={resetAndClose} modalProps={{ className: styles.authContent }}>
      {step === AuthModalStep.Phone && <PhoneForm onSuccess={onPhoneFormSuccess} />}
      {step === AuthModalStep.MessageCode && <CodeForm authToken={phoneAuthToken} onSuccess={onCodeFormSuccess} />}
      {step === AuthModalStep.UserExistenceChecking && (
        <UserExistenceChecking authToken={codeAuthToken} phone={phone} onLoggedIn={onUserLoggedId} onUserNotExists={onUserNotExists} />
      )}
      {step === AuthModalStep.CreateUser && <CreateUserForm authToken={codeAuthToken} onUserLoggedIn={onUserLoggedId} />}
    </Modal>
  )
}
