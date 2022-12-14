import { useLazyGetChatInfoQuery } from 'api/enhancedApi'
import useTypedDispatch from 'hooks/use-typed-dispatch'
import useTypedSelector from 'hooks/use-typed-selector'
import { useCallback, useEffect, useRef } from 'react'
import { chatSlice } from 'store/slices/chat.slice'
import styles from './chat.module.scss'
import { mapGetChatInfoQueryResponse } from './chat.utils'
import { MessageBar } from './components/message-bar/message-bar'
import { MessagesContainer } from './components/messages-container/messages-container'

interface ChatProps {
  chatId: string
}

export function Chat({ chatId }: ChatProps) {
  const user = useTypedSelector(state => state.auth.user)
  const messagesContainerRef = useRef<HTMLDivElement>(null)
  const [getChatInfoQuery] = useLazyGetChatInfoQuery()
  const dispatch = useTypedDispatch()

  const scrollToBottom = useCallback(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTo({ top: messagesContainerRef.current.scrollHeight })
    }
  }, [])

  useEffect(() => {
    getChatInfoQuery({ chatId })
      .unwrap()
      .then(response => {
        dispatch(chatSlice.actions.setChatInfo(mapGetChatInfoQueryResponse(user!.role, response)))
      })
  }, [chatId])

  return (
    <div className={styles.chat}>
      <MessagesContainer chatId={chatId} ref={messagesContainerRef} />
      <MessageBar chatId={chatId} scrollBottom={scrollToBottom} />
    </div>
  )
}
