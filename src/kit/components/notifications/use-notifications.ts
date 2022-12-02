import { useContext } from 'react'
import { NoficationsContext } from './notifications.context'

export function useNotifications() {
  const { showNotification, clearNotification } = useContext(NoficationsContext)

  return { showNotification, clearNotification }
}
