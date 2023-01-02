import { useLazyGetChatMessagesQuery } from 'api/enhancedApi'
import cn from 'classnames'
import { format } from 'date-fns'
import { ru } from 'date-fns/locale'
import useTypedDispatch from 'hooks/use-typed-dispatch'
import useTypedSelector from 'hooks/use-typed-selector'
import { useForwardedRef } from 'kit/hooks'
import { forwardRef, UIEvent, useEffect } from 'react'
import { chatSlice } from 'store/slices/chat.slice'
import { ChatType } from '../../chat.constants'
import { NextMessagesLoading } from './components/next-messages-loading/next-messages-loading'
import styles from './messages-container.module.scss'

interface MessagesContainerProps {
  chatId: string
  type: ChatType
}

export const MessagesContainer = forwardRef<HTMLDivElement, MessagesContainerProps>(({ chatId, type }, ref) => {
  const user = useTypedSelector(state => state.auth.user)
  const messages = useTypedSelector(state => state.chat.messages)
  const page = useTypedSelector(state => state.chat.page)
  const chatInfo = useTypedSelector(({ chat }) => ({
    totalMessagesCount: chat.totalMessagesCount,
    myName: chat.myName,
    companionName: chat.companionName,
  }))
  const dispatch = useTypedDispatch()
  const [getChatMessagesQuery, getChatMessagesQueryData] = useLazyGetChatMessagesQuery()
  const messagesContainerRef = useForwardedRef(ref)

  useEffect(() => {
    if (chatId) {
      getChatMessagesQuery({ chatId, skip: (page - 1) * 40, take: 40 })
        .unwrap()
        .then(response => {
          dispatch(chatSlice.actions.addMessagesToEnd(JSON.parse(JSON.stringify(response.chatMessages)).reverse()))
          if (page === 1) setTimeout(() => messagesContainerRef.current?.scrollTo({ top: messagesContainerRef.current.scrollHeight }), 0)
        })
        .finally(() => {})
    }
  }, [chatId, page])

  function handleMessagesContainerScroll(event: UIEvent<HTMLDivElement>) {
    if (
      !getChatMessagesQueryData.isFetching &&
      event.currentTarget.scrollTop < 1000 &&
      chatInfo.totalMessagesCount &&
      messages.length < chatInfo.totalMessagesCount
    ) {
      dispatch(chatSlice.actions.increasePage())
    }
  }

  return (
    <div className={styles.chatMessages} ref={messagesContainerRef} onScroll={handleMessagesContainerScroll}>
      {getChatMessagesQueryData.isFetching && <NextMessagesLoading />}
      {messages.length === 0 && !getChatMessagesQueryData.isFetching && (
        <p className={styles.chatMessagesEmpty}>Чат пока пуст. Напишите первое сообщение!</p>
      )}
      {messages.map(message => (
        <div className={styles.chatMessageContainer}>
          <div className={cn(styles.chatMessageInfo, { [styles.chatMessageInfoMe]: message.sender === user?.role })}>
            <p className={styles.chatMessageInfoSender}>{user?.role === message.sender ? chatInfo.myName : chatInfo.companionName}</p>
            <p className={styles.chatMessageInfoDate}>{format(new Date(message.createdAt), 'd MMMM yyyy, HH:mm', { locale: ru })}</p>
          </div>
          <div
            key={message.id}
            className={cn(styles.chatMessage, {
              [styles.chatMessageMe]: message.sender === user?.role,
              [styles.chatMessageInterlocutor]: message.sender !== user?.role,
              [styles.chatMessageWithAdmin]: type === ChatType.WithAdmin && message.sender !== user?.role,
              [styles.chatMessageWithEmployerOrApplicant]: type === ChatType.WithEmployerOrApplicant && message.sender !== user?.role,
            })}
          >
            <p className={styles.chatMessageText}>{message.message}</p>
          </div>
        </div>
      ))}
    </div>
  )
})
