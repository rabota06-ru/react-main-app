import { createContext, PropsWithChildren, useMemo } from 'react'
import { QueueNotification, ShowNotificationOptions } from './notifications.types'

interface INoficationsContext {
  showNotification: (options: ShowNotificationOptions) => QueueNotification['id']
  clearNotification: (id: QueueNotification['id']) => void
}

export const NoficationsContext = createContext<INoficationsContext>({
  showNotification: () => '0',
  clearNotification: () => {},
})

interface NotificationsContextProviderProps extends PropsWithChildren {
  showNotification: (options: ShowNotificationOptions) => QueueNotification['id']
  clearNotification: (id: QueueNotification['id']) => void
}

export function NotificationsContextProvider({ showNotification, clearNotification, children }: NotificationsContextProviderProps) {
  const value = useMemo(() => ({ showNotification, clearNotification }), [showNotification, clearNotification])

  return <NoficationsContext.Provider value={value}>{children}</NoficationsContext.Provider>
}
