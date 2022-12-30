import { useLazyGetNewMessagesQuery, useSendMessageMutation } from 'api/enhancedApi'
import { UserRole } from 'api/generated'
import useTypedDispatch from 'hooks/use-typed-dispatch'
import useTypedSelector from 'hooks/use-typed-selector'
import { Button, ButtonSize } from 'kit/components/button'
import { TextArea } from 'kit/components/text-area'
import { useCallback, useState } from 'react'
import { chatSlice } from 'store/slices/chat.slice'
import styles from './message-bar.module.scss'

interface MessageBarProps {
  chatId: string
  scrollBottom: () => void
}

export function MessageBar({ chatId, scrollBottom }: MessageBarProps) {
  const [sendMessageMutation, sendMessageData] = useSendMessageMutation()
  const [getNewMessagesQuery, getNewMessagesQueryData] = useLazyGetNewMessagesQuery()
  const [message, setMessage] = useState('')
  const dispatch = useTypedDispatch()
  const lastMessageCreatedAt = useTypedSelector(
    state => state.chat.messages[state.chat.messages.length - 1]?.createdAt as string | undefined
  )

  const sendMessage = useCallback(() => {
    if (chatId) {
      getNewMessagesQuery({ chatId: chatId as string, messageFrom: lastMessageCreatedAt })
        .unwrap()
        .then(response => {
          dispatch(chatSlice.actions.addMessagesToStart(response.chatMessages))
          sendMessageMutation({ chatId, message, sender: UserRole.Employer })
            .unwrap()
            .then(response => {
              dispatch(chatSlice.actions.addMessagesToStart([response.createOneChatMessage]))
              setTimeout(scrollBottom, 0)
              setMessage('')
            })
        })
    }
  }, [chatId, message, scrollBottom])

  return (
    <div className={styles.chatSendBar}>
      <TextArea
        className={styles.chatTextArea}
        placeholder='Текст сообщения'
        value={message}
        isAutoAdaptableHeight
        maxHeight={300}
        onChange={event => setMessage(event.target.value)}
      />
      <Button
        size={ButtonSize.Small}
        isLoading={sendMessageData.isLoading || getNewMessagesQueryData.isLoading}
        isDisabled={message.length === 0}
        onClick={sendMessage}
      >
        Отправить
      </Button>
    </div>
  )
}
