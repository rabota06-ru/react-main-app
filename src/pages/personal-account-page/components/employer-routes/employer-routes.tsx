import { routes } from 'pages/routes'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Chat } from '../chat/chat'
import { EmployerMessages } from '../employer-messages/employer-messages'

export function EmployerRoutes() {
  return (
    <Routes>
      <Route path={routes.personalAccount.nested.allResumes.exact} element='allResumes' />
      <Route path={routes.personalAccount.nested.myVacancies.exact} element='myVacancies' />
      <Route path={routes.personalAccount.nested.messages.exact} element={<EmployerMessages />} />
      <Route path={routes.personalAccount.nested.messages.nested.chat(':profileId').exact} element={<Chat />} />
      <Route path={routes.personalAccount.nested.settings.exact} element='test4' />
      <Route path='*' element={<Navigate to={routes.personalAccount.nested.allResumes.absoluteExact} />} />
    </Routes>
  )
}
