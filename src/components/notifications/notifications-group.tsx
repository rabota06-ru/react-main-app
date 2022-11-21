import { useMemo } from 'react'
import { createPortal } from 'react-dom'
import cn from 'classnames'
import { NotificationType, QueueNotification } from './notifications.types'
import styles from './notifications-group.module.scss'
import { NOTIFICATION_ANIMATION_DURATION } from './notification.constants'

interface NotificationsGroupProps {
  queue: QueueNotification[]
}

export function NotificationsGroup({ queue }: NotificationsGroupProps) {
  const notificationsContainerElement = useMemo(() => document.getElementById('notifications') as Element, [])

  return createPortal(
    <div className={styles.container}>
      {queue.map(notification => (
        <div
          key={notification.id}
          className={cn(styles.notificationWrapper, { [styles.notificationWrapper_Shown]: notification.isShown })}
          style={{ transitionDuration: `${NOTIFICATION_ANIMATION_DURATION}ms` }}
        >
          <div
            className={cn(styles.notification, {
              [styles.notification_Success]: notification.type === NotificationType.Success,
              [styles.notification_Error]: notification.type === NotificationType.Error,
              [styles.notification_Warning]: notification.type === NotificationType.Warning,
              [styles.notification_Info]: notification.type === NotificationType.Info,
              [styles.notification_Shown]: notification.isShown,
            })}
            style={{ transitionDuration: `${NOTIFICATION_ANIMATION_DURATION}ms` }}
          >
            <span className={styles.notificationTitle}>{notification.title}</span>
            {notification.description && <span className={styles.notificationDescription}>{notification.description}</span>}
            {notification.actions && (
              <div className={styles.notificationActions}>
                {notification.actions.map(action => (
                  <button className={styles.notificationAction} key={action.label}>
                    {action.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>,
    notificationsContainerElement
  )
}
