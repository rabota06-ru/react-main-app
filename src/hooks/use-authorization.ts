import { useLazyCheckIsAuthenticatedQuery, useLazyGetUserQuery, useRefreshAccessTokenMutation } from 'api/enhancedApi'
import { UserRole } from 'api/generated'
import { useCallback, useEffect } from 'react'
import { authSlice } from 'store/slices/auth.slice'
import { parseJwt } from 'utils/parse-jwt'
import useTypedDispatch from './use-typed-dispatch'

export function useAuthorization() {
  const [checkIsAuthenticatedQuery, checkIsAuthenticatedData] = useLazyCheckIsAuthenticatedQuery()
  const [refreshAccessTokenMutation] = useRefreshAccessTokenMutation()
  const fetchAndSetUser = useFetchAndSetAuthorizedUser()
  const dispatch = useTypedDispatch()

  useEffect(() => {
    checkIsAuthenticatedQuery()
      .unwrap()
      .then(response => {
        if (response.checkIsAuthenticated.authenticated) {
          dispatch(authSlice.actions.setAccessToken(response.checkIsAuthenticated.accessToken!))
          fetchAndSetUser(response.checkIsAuthenticated.accessToken!)
        }
      })

    const intervalTimer = setInterval(() => {
      refreshAccessTokenMutation()
        .unwrap()
        .then(response => {
          dispatch(authSlice.actions.setAccessToken(response.refreshAccessToken.accessToken))
        })
    }, 29 * 60 * 1000)

    return () => {
      clearInterval(intervalTimer)
    }
  }, [checkIsAuthenticatedQuery, refreshAccessTokenMutation, fetchAndSetUser, dispatch])

  return {
    isLoading: checkIsAuthenticatedData.isLoading,
  }
}

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
