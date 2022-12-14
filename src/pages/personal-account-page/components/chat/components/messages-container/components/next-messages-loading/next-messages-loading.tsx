import { Spinner } from 'kit/components/spinner'
import styles from './next-messages-loading.module.scss'

export function NextMessagesLoading() {
  return (
    <div className={styles.container}>
      <Spinner size={40} />
    </div>
  )
}
