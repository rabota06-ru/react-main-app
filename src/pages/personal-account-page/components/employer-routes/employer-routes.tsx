import { routes } from 'pages/routes'
import { Redirect, Route, Switch } from 'wouter'
import { Chat } from '../chat/chat'
import { ChatType } from '../chat/chat.constants'
import { EmployerMessages } from '../employer-messages/employer-messages'
import { EmployerVacancies } from '../employer-vacancies/employer-vacancies'

export function EmployerRoutes() {
  return (
    <Switch>
      <Route path={routes.personalAccount.nested.allResumes.absoluteExact}>allResumes</Route>
      <Route path={routes.personalAccount.nested.myVacancies.absoluteExact}>
        <EmployerVacancies />
      </Route>
      <Route path={routes.personalAccount.nested.messages.absoluteExact}>
        <EmployerMessages />
      </Route>
      <Route path={routes.personalAccount.nested.messages.nested.chat(':chatId').absoluteExact}>
        {params => params.chatId && <Chat chatId={params.chatId} type={ChatType.WithEmployerOrApplicant} />}
      </Route>
      <Route path={routes.personalAccount.nested.settings.absoluteExact}>test4</Route>
      <Redirect to={routes.personalAccount.nested.allResumes.absoluteExact} />
    </Switch>
  )
}
