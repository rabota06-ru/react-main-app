import { useEffect, useMemo } from 'react'
import { createPortal } from 'react-dom'
import cn from 'classnames'
import { NotificationType, QueueNotification } from './notifications.types'
import styles from './notifications-group.module.scss'
import { NOTIFICATION_ANIMATION_DURATION } from './notification.constants'

interface NotificationsGroupProps {
  queue: QueueNotification[]
  onClose: (noticationId: QueueNotification['id']) => void
}

export function NotificationsGroup({ queue, onClose }: NotificationsGroupProps) {
  const notificationsContainerElement = useMemo(() => {
    const body = document.querySelector('body')
    const element = document.createElement('div')
    element.className = styles.notificationsWrapper
    body?.appendChild(element)
    return element
  }, [])

  useEffect(() => {
    notificationsContainerElement.scrollTo({ top: 0, behavior: 'auto' })
  }, [queue])

  return createPortal(
    <div className={styles.notificationsContainer}>
      {queue.map(notification => (
        <div
          key={notification.id}
          className={cn(styles.notificationWrapper, {
            [styles.notificationWrapper_OnlyTitle]: !notification.description && !notification.actions,
            [styles.notificationWrapper_OnlyTitleWithActions]: !notification.description && notification.actions,
            [styles.notificationWrapper_Shown]: notification.isShown,
          })}
          style={{ transitionDuration: `${NOTIFICATION_ANIMATION_DURATION}ms` }}
          onClick={() => onClose(notification.id)}
        >
          <div
            className={cn(styles.notification, {
              [styles.notification_OnlyTitle]: !notification.description && !notification.actions,
              [styles.notification_OnlyTitleWithActions]: !notification.description && notification.actions,
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
                {notification.actions.map((action, index) => (
                  <button
                    className={styles.notificationAction}
                    key={index}
                    onClick={event => {
                      event.stopPropagation()
                      action.onClick()
                    }}
                  >
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
