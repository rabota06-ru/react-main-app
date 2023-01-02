import { GetVacancyResponsesQuery, UserRole } from 'api/generated'
import { Button, ButtonVariant } from 'kit/components/button'
import { Divider } from 'kit/components/divider'
import { format } from 'date-fns'
import ru from 'date-fns/locale/ru'
import { routes } from 'pages/routes'
import { createElement } from 'react'
import { FIELDS_OF_ACTIVITY_IMAGE, numberToFieldOfActivity } from 'utils/fields-of-activity'
import useTypedSelector from 'hooks/use-typed-selector'
import { AuthenticatedUser } from 'store/slices/auth.slice'
import { useCreateChatMutation, useLazyGetChatQuery } from 'api/enhancedApi'
import { useLocation } from 'wouter'
import { CssColorVariable } from 'utils/get-css-variable'
import { Box } from 'kit/components/box'
import styles from './responses-to-vacancies.module.scss'

interface ResponseToVacancyProps {
  response: GetVacancyResponsesQuery['responseToVacancies'][number]
}

export function ResponseToVacancy({ response }: ResponseToVacancyProps) {
  const user = useTypedSelector(state => state.auth.user as AuthenticatedUser<UserRole.Employer>)
  const [getChatQuery, getChatQueryData] = useLazyGetChatQuery()
  const [createChatMutation, createChatMutationData] = useCreateChatMutation()
  const [, setLocation] = useLocation()

  async function goToChatWithApplicant(applicantId: string) {
    const getChatQueryResponse = await getChatQuery({ applicantId, employerId: user.employerId }).unwrap()
    let chatId = getChatQueryResponse.chat?.id

    if (chatId === undefined) {
      const createChatMutationResponse = await createChatMutation({ applicantId, employerId: user.employerId }).unwrap()
      chatId = createChatMutationResponse.createOneChat.id
    }

    setLocation(routes.personalAccount.nested.messages.nested.chat(chatId).absoluteExact)
  }

  return (
    <div className={styles.responseToVacancy}>
      <div className={styles.responseToVacancyTop}>
        <div className={styles.responseToVacancyTopLeft}>
          <Box df g={10} mr={20} pr={3}>
            <p className={styles.responseToVacancyTopLeftFromWho}>От кого:</p>
            <p className={styles.responseToVacancyTopLeftName}>{response.resume.firstname}</p>
          </Box>
          <div className={styles.responseToVacancyTopLeftIconContainer}>
            {createElement(FIELDS_OF_ACTIVITY_IMAGE[numberToFieldOfActivity(response.resume.fieldOfActivity)])}
          </div>
        </div>
        <p className={styles.responseToVacancyDate}>{format(new Date(response.createdAt), 'HH:mm, d MMMM', { locale: ru })}</p>
      </div>
      <Divider color={CssColorVariable.SecondaryColor3} />
      {response.coverLetter && <p className={styles.responseToVacancyCoverLetter}>{response.coverLetter}</p>}
      <div className={styles.responseToVacancyActions}>
        <Button
          onClick={() => goToChatWithApplicant(response.resume.applicantProfileId)}
          isLoading={getChatQueryData.isLoading || createChatMutationData.isLoading}
        >
          Ответить
        </Button>
        <Button variant={ButtonVariant.Outline}>Показать телефон</Button>
      </div>
    </div>
  )
}
