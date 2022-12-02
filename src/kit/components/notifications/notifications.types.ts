export enum NotificationType {
  Success,
  Warning,
  Error,
  Info,
}

interface Notification {
  title: string
  description?: string
  type: NotificationType
  duration?: number
  actions?: NotificationAction[]
}

export interface QueueNotification extends Notification {
  id: string
  isShown: boolean
}

export interface ShowNotificationOptions extends Notification {}

export interface NotificationAction {
  label: string
  onClick: () => void
}
