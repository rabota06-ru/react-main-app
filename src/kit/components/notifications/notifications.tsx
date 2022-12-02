import { PropsWithChildren, useCallback, useState } from 'react'
import { uniqueId } from 'utils/unique-id'
import { DEFAULT_NOTIFICATION_DURATION, NOTIFICATION_ANIMATION_DURATION } from './notification.constants'
import { NotificationsGroup } from './notifications-group'
import { NotificationsContextProvider } from './notifications.context'
import { QueueNotification, ShowNotificationOptions } from './notifications.types'

interface NotificationsProps extends PropsWithChildren {}

export function Notifications({ children }: NotificationsProps) {
  const [queue, setQueue] = useState<QueueNotification[]>([])

  const clearNotification = useCallback(
    (id: QueueNotification['id']) => {
      setQueue(queue =>
        queue.map(notification => {
          if (notification.id === id) return { ...notification, isShown: false }

          return notification
        })
      )

      setTimeout(() => {
        setQueue(queue => queue.filter(notication => notication.id !== id))
      }, NOTIFICATION_ANIMATION_DURATION + 100)
    },
    [setQueue]
  )

  const showNotification = useCallback(
    (options: ShowNotificationOptions) => {
      const id = uniqueId()
      setQueue(queue => [{ id, isShown: false, ...options }, ...queue])

      setTimeout(
        () =>
          setQueue(queue =>
            queue.map(notification => {
              if (notification.id === id) return { ...notification, isShown: true }
              return notification
            })
          ),
        0
      )
      setTimeout(() => clearNotification(id), options.duration ?? DEFAULT_NOTIFICATION_DURATION)

      return id
    },
    [setQueue, clearNotification]
  )

  return (
    <NotificationsContextProvider showNotification={showNotification} clearNotification={clearNotification}>
      {children}
      <NotificationsGroup queue={queue} onClose={clearNotification} />
    </NotificationsContextProvider>
  )
}
