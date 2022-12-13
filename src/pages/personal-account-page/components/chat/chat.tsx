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
  const [, params] = useRoute<{ profileId: string }>(routes.personalAccount.nested.messages.nested.chat(':chatId').exact)
  const profileId = params?.profileId
  const user = useTypedSelector(state => state.auth.user)
  const [messages, setMessages] = useState<GetChatMessagesQuery['chatMessages']>([])
  const [getChatMessagesQuery, getChatMessagesData] = useLazyGetChatMessagesQuery()
  const [sendMessageMutation, sendMessageData] = useSendMessageMutation()
  const [message, setMessage] = useState('')
  const messagesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (profileId && user) {
      getChatMessagesQuery({ applicantId: profileId, userId: user.id, skip: 0, take: 40 })
        .unwrap()
        .then(response => {
          setMessages(prev => [...JSON.parse(JSON.stringify(response.chatMessages)).reverse(), ...prev])
          setTimeout(() => messagesRef.current?.scrollTo({ top: messagesRef.current.scrollHeight }), 0)
        })
    }
  }, [])

  const sendMessage = useCallback(() => {
    if (getChatMessagesData.data?.findFirstChat) {
      sendMessageMutation({ chatId: getChatMessagesData.data.findFirstChat.id, message, sender: UserRole.Employer })
        .unwrap()
        .then(response => {
          setMessages(prev => [...prev, response.createOneChatMessage])
          setTimeout(() => messagesRef.current?.scrollTo({ top: messagesRef.current.scrollHeight }), 0)
          setMessage('')
        })
    }
  }, [message, sendMessageMutation, getChatMessagesData])

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
              <p className={styles.chatMessageInfoSender}>
                {message.sender === user?.role ? 'Вы' : getChatMessagesData.data?.findFirstChat?.applicant.resume?.firstname}
              </p>
              <p>{format(new Date(message.createdAt), 'd MMMM yyyy, HH:mm', { locale: ru })}</p>
            </div>
          </div>
        ))}
      </div>
      <TextArea className={styles.chatTextArea} value={message} onChange={event => setMessage(event.target.value)} />
      <div className={styles.chatButtonContainer}>
        <Button size={ButtonSize.Small} isDisabled={message.length === 0 || sendMessageData.isLoading} onClick={sendMessage}>
          Отправить
        </Button>
      </div>
    </div>
  )
}
