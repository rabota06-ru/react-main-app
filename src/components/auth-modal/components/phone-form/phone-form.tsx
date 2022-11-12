import { useSendAuthCodeMessageMutation } from 'api/enhancedApi'
import { Button } from 'components/button'
import { PhoneInput } from 'components/phone-input'
import { RUSSIAN_CLEAR_NUMBER_REGEX } from 'constants/regexes'
import { useCallback, useState } from 'react'
import styles from './phone-form.module.scss'

interface PhoneFormProps {
  onSuccess: (authToken: string, phone: string) => void
}

export function PhoneForm({ onSuccess }: PhoneFormProps) {
  const [phone, setPhone] = useState('')
  const [sendAuthCodeMessageMutation, sendAuthCodeMessageData] = useSendAuthCodeMessageMutation()

  const goAhead = useCallback(() => {
    sendAuthCodeMessageMutation({ phone })
      .unwrap()
      .then(response => onSuccess(response.sendAuthCodeMessage.authToken, phone))
  }, [onSuccess, sendAuthCodeMessageMutation, phone])

  return (
    <div className={styles.form}>
      <p className={styles.formTitle}>Вход и регистрация</p>
      <div className={styles.formContainer}>
        <PhoneInput
          onChange={({ clear }) => setPhone(clear)}
          isDisabled={sendAuthCodeMessageData.isLoading}
          value={phone}
          containerProps={{ className: styles.formPhone }}
        />
        <Button isDisabled={!RUSSIAN_CLEAR_NUMBER_REGEX.test(phone)} isLoading={sendAuthCodeMessageData.isLoading} onClick={goAhead}>
          Далее
        </Button>
      </div>
    </div>
  )
}
