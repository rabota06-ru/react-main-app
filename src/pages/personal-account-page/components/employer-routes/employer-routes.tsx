import { routes } from 'pages/routes'
import { Redirect, Route, Switch } from 'wouter'
import { Chat } from '../chat/chat'
import { EmployerMessages } from '../employer-messages/employer-messages'

export function EmployerRoutes() {
  return (
    <Switch>
      <Route path={routes.personalAccount.nested.allResumes.absoluteExact}>allResumes</Route>
      <Route path={routes.personalAccount.nested.myVacancies.absoluteExact}>myVacancies</Route>
      <Route path={routes.personalAccount.nested.messages.absoluteExact}>
        <EmployerMessages />
      </Route>
      <Route path={routes.personalAccount.nested.messages.nested.chat(':profileId').absoluteExact}>
        <Chat />
      </Route>
      <Route path={routes.personalAccount.nested.settings.absoluteExact}>test4</Route>
      <Redirect to={routes.personalAccount.nested.allResumes.absoluteExact} />
    </Switch>
  )
}
