import { useGetChatMessagesQuery } from 'api/enhancedApi'
import useTypedSelector from 'hooks/use-typed-selector'
import { useParams } from 'react-router-dom'

export function Chat() {
  const { profileId } = useParams<{ profileId: string }>()
  const user = useTypedSelector(state => state.auth.user)
  const getChatMessagesData = useGetChatMessagesQuery(
    { userId: user!.id, applicantId: profileId as string },
    { skip: user === null || !profileId }
  )

  return (
    <div>
      {getChatMessagesData.data?.chatMessages.map(message => (
        <div key={message.id}>
          <p>{message.message}</p>
          <p>{message.createdAt}</p>
        </div>
      ))}
    </div>
  )
}
