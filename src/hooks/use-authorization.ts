import { useLazyCheckIsAuthenticatedQuery, useLazyGetUserQuery, useRefreshAccessTokenMutation } from 'api/enhancedApi'
import { useCallback, useEffect } from 'react'
import { authSlice } from 'store/slices/auth.slice'
import { parseJwt } from 'utils/parse-jwt'
import useTypedDispatch from './use-typed-dispatch'

export function useAuthorization() {
  const [checkIsAuthenticatedQuery, checkIsAuthenticatedData] = useLazyCheckIsAuthenticatedQuery()
  const [refreshAccessTokenMutation] = useRefreshAccessTokenMutation()
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
            let name: string | null = null
            if (user.applicantProfile?.resume) {
              name = user.applicantProfile.resume.firstname + user.applicantProfile.resume.lastname
            }

            if (user.employerProfile) {
              name = user.employerProfile.companyName
            }

            dispatch(
              authSlice.actions.setUserInfo({
                id: user.id,
                role: user.role,
                name,
              })
            )
          }
        })
    },
    [dispatch, getUserQuery]
  )

  useEffect(() => {
    checkIsAuthenticatedQuery()
      .unwrap()
      .then(response => {
        if (response.checkIsAuthenticated.authenticated) {
          fetchAndSetUser(response.checkIsAuthenticated.accessToken!)
          dispatch(authSlice.actions.setAccessToken(response.checkIsAuthenticated.accessToken!))
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
  }, [checkIsAuthenticatedQuery, refreshAccessTokenMutation, dispatch, fetchAndSetUser])

  return {
    isLoading: checkIsAuthenticatedData.isLoading,
  }
}
