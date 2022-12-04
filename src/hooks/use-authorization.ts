import { useLazyCheckIsAuthenticatedQuery, useRefreshAccessTokenMutation } from 'api/enhancedApi'
import { useEffect } from 'react'
import { authSlice } from 'store/slices/auth.slice'
import useTypedDispatch from './use-typed-dispatch'

export function useAuthorization() {
  const [checkIsAuthenticatedQuery, checkIsAuthenticatedData] = useLazyCheckIsAuthenticatedQuery()
  const [refreshAccessTokenMutation] = useRefreshAccessTokenMutation()
  const dispatch = useTypedDispatch()

  useEffect(() => {
    checkIsAuthenticatedQuery()
      .unwrap()
      .then(response => {
        if (response.checkIsAuthenticated.authenticated) {
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
  }, [checkIsAuthenticatedQuery, refreshAccessTokenMutation, dispatch])

  return {
    isLoading: checkIsAuthenticatedData.isLoading,
  }
}
