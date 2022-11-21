import { api as generatedApi } from './generated'

export const api = generatedApi.enhanceEndpoints({
  endpoints: {},
})

export const {
  useCreateAndLoginUserMutation,
  useLazyGetOneUserByPhoneQuery,
  useLoginUserMutation,
  useSendAuthCodeMessageMutation,
  useVerifyAuthCodeMutation,
  useLazyCheckIsAuthenticatedQuery,
  useRefreshAccessTokenMutation,
  useGetVacancyQuery,
  useGetResumeQuery,
  useGetVacanciesQuery,
  useGetResumesQuery,
  useCreateVacancyMutation,
  useCreateResumeMutation,
  useLazyGetUserQuery,
  useGetVacanciesWithResponsesQuery,
  useLazyGetVacancyResponsesQuery,
  useLazyGetChatMessagesQuery,
  useSendMessageMutation,
} = api