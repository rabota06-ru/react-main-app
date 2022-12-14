import { UserRole } from 'api/generated'

export function getMessageSenderNameByRole(myRole: UserRole, senderRole: UserRole, myName: string, companionName: string) {
  if (myRole === senderRole) return myName
  return companionName
}
