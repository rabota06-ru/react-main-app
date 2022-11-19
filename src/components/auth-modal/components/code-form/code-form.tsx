import { useVerifyAuthCodeMutation } from 'api/enhancedApi'
import { Button } from 'kit/components/button'
import { Input, InputStatus } from 'kit/components/input'
import { AUTH_CODE_REGEX } from 'constants/regexes'
import { useCallback, useState } from 'react'
import styles from './code-form.module.scss'

interface CodeFormProps {
  authToken: string
  onSuccess: (authToken: string) => void
}

export function CodeForm({ authToken, onSuccess }: CodeFormProps) {
  const [messageCode, setMessageCode] = useState('')
  const [verifyAuthCodeMutation, verifyAuthCodeData] = useVerifyAuthCodeMutation()
  const [errorMessage, setErrorMessage] = useState<string>()

  const verifyAuthCode = useCallback(() => {
    verifyAuthCodeMutation({ authToken, code: messageCode })
      .unwrap()
      .then(response => {
        if (!response.verifyAuthCode.authenticated) setErrorMessage('Неверный код, попробуйте ещё раз')
        else {
          setErrorMessage(undefined)
          if (response.verifyAuthCode.authToken) onSuccess(response.verifyAuthCode.authToken)
        }
      })
  }, [messageCode, authToken, verifyAuthCodeMutation, onSuccess])

  return (
    <div className={styles.form}>
      <p className={styles.formTitle}>Вход и регистрация</p>
      <div className={styles.formContainer}>
        <Input
          onChange={event => setMessageCode(event.target.value)}
          placeholder='Введите сюда код'
          value={messageCode}
          containerProps={{ className: styles.formCode }}
          isDisabled={verifyAuthCodeData.isLoading}
          status={errorMessage ? InputStatus.Error : undefined}
          bottomText={errorMessage}
        />
        <Button isDisabled={!AUTH_CODE_REGEX.test(messageCode)} isLoading={verifyAuthCodeData.isLoading} onClick={verifyAuthCode}>
          Далее
        </Button>
      </div>
    </div>
  )
}
