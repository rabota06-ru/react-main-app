import { useLazyGetChatMessagesQuery, useSendMessageMutation } from 'api/enhancedApi'
import { GetChatMessagesQuery, UserRole } from 'api/generated'
import { Button, ButtonSize } from 'kit/components/button'
import { TextArea } from 'kit/components/text-area'
import useTypedSelector from 'hooks/use-typed-selector'
import { useCallback, useEffect, useRef, useState } from 'react'
import cn from 'classnames'
import { format } from 'date-fns'
import ru from 'date-fns/locale/ru'
import { useRoute } from 'wouter'
import { routes } from 'pages/routes'
import styles from './chat.module.scss'

export function Chat() {
  const [, params] = useRoute<{ chatId: string }>(routes.personalAccount.nested.messages.nested.chat(':chatId').absoluteExact)
  const chatId = params?.chatId
  const user = useTypedSelector(state => state.auth.user)
  const [messages, setMessages] = useState<GetChatMessagesQuery['chatMessages']>([])
  const [getChatMessagesQuery] = useLazyGetChatMessagesQuery()
  const [sendMessageMutation, sendMessageData] = useSendMessageMutation()
  const [message, setMessage] = useState('')
  const messagesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (chatId) {
      getChatMessagesQuery({ chatId, skip: 0, take: 40 })
        .unwrap()
        .then(response => {
          setMessages(prev => [...JSON.parse(JSON.stringify(response.chatMessages)).reverse(), ...prev])
          setTimeout(() => messagesRef.current?.scrollTo({ top: messagesRef.current.scrollHeight }), 0)
        })
    }
  }, [chatId, getChatMessagesQuery])

  const sendMessage = useCallback(() => {
    if (chatId) {
      sendMessageMutation({ chatId, message, sender: UserRole.Employer })
        .unwrap()
        .then(response => {
          setMessages(prev => [...prev, response.createOneChatMessage])
          setTimeout(() => messagesRef.current?.scrollTo({ top: messagesRef.current.scrollHeight }), 0)
          setMessage('')
        })
    }
  }, [chatId, message, sendMessageMutation])

  return (
    <div className={styles.chat}>
      <div className={styles.chatMessages} ref={messagesRef}>
        {messages.map(message => (
          <div
            key={message.id}
            className={cn(styles.chatMessage, {
              [styles.chatMessageMe]: message.sender === user?.role,
              [styles.chatMessageInterlocutor]: message.sender !== user?.role,
            })}
          >
            <p>{message.message}</p>

            <div className={styles.chatMessageInfo}>
              <p className={styles.chatMessageInfoSender}>TODO!</p>
              <p>{format(new Date(message.createdAt), 'd MMMM yyyy, HH:mm', { locale: ru })}</p>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.chatSendBar}>
        <TextArea className={styles.chatTextArea} value={message} onChange={event => setMessage(event.target.value)} />
        <Button size={ButtonSize.Small} isDisabled={message.length === 0 || sendMessageData.isLoading} onClick={sendMessage}>
          Отправить
        </Button>
      </div>
    </div>
  )
}
