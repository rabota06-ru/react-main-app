import { routes } from 'pages/routes'
import { Redirect, Route, Switch } from 'wouter'
import { Chat } from '../chat/chat'

export function ApplicantRoutes() {
  return (
    <Switch>
      <Route path={routes.personalAccount.nested.allResumes.exact}>allResumes</Route>
      <Route path={routes.personalAccount.nested.myVacancies.exact}>myVacancies</Route>
      <Route path={routes.personalAccount.nested.messages.exact}>messages</Route>
      <Route path={routes.personalAccount.nested.messages.nested.chat(':profileId').exact}>
        <Chat />
      </Route>
      <Route path={routes.personalAccount.nested.settings.exact}>test4</Route>
      <Redirect to={routes.personalAccount.nested.allResumes.absoluteExact} />
    </Switch>
  )
}
