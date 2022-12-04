import { useLazyGetUserQuery } from 'api/enhancedApi'
import { UserRole } from 'api/generated'
import useTypedDispatch from 'hooks/use-typed-dispatch'
import { useCallback } from 'react'
import { authSlice } from 'store/slices/auth.slice'
import { parseJwt } from 'utils/parse-jwt'

export function useFetchAndSetAuthorizedUser() {
  const [getUserQuery] = useLazyGetUserQuery()
  const dispatch = useTypedDispatch()

  const fetchAndSetUser = useCallback(
    (accessToken: string) => {
      const { userId } = parseJwt(accessToken)
      getUserQuery({ userId })
        .unwrap()
        .then(response => {
          const user = response.findFirstUser
          if (user) {
            if (user.applicantProfile?.resume) {
              dispatch(
                authSlice.actions.setUserInfo({
                  id: user.id,
                  name: user.applicantProfile.resume.firstname + user.applicantProfile.resume.lastname,
                  role: UserRole.Applicant,
                  applicantId: user.applicantProfile.id,
                })
              )
            }

            if (user.employerProfile) {
              dispatch(
                authSlice.actions.setUserInfo({
                  id: user.id,
                  name: user.employerProfile.companyName,
                  role: UserRole.Employer,
                  employerId: user.employerProfile.id,
                })
              )
            }
          }
        })
    },
    [dispatch, getUserQuery]
  )

  return fetchAndSetUser
}
