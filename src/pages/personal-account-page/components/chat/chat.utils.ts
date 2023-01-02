import { GetChatInfoQuery, UserRole } from 'api/generated'
import { SetChatInfoPayload } from 'store/slices/chat.slice'

export function mapGetChatInfoQueryResponse(myRole: UserRole, { chat }: GetChatInfoQuery): SetChatInfoPayload {
  if (chat && chat.applicant.resume) {
    const { employer } = chat
    const applicantResume = chat.applicant.resume
    return {
      chatId: chat.id,
      totalMessagesCount: chat._count?.messages ?? 0,
      myName: myRole === UserRole.Employer ? employer.companyName : applicantResume.firstname + applicantResume.lastname,
      companionName: myRole === UserRole.Employer ? applicantResume.firstname + applicantResume.lastname : employer.companyName,
    }
  }

  throw new Error('Не получилось запросить информацию о чате')
}
