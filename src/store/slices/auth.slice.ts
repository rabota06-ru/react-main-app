import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserRole } from 'api/generated'
import { SlicesNames } from 'store/slices-names'

interface AuthSliceState {
  isAuthModalShown: boolean
  accessToken: string | null
  user: {
    id: string
    role: UserRole
    name: string | null
  } | null
}

export const authSlice = createSlice({
  name: SlicesNames.Auth,
  initialState: {
    isAuthModalShown: false,
    accessToken: null,
    user: null,
  } as AuthSliceState,
  reducers: {
    showAuthModal(state) {
      state.isAuthModalShown = true
    },
    hideAuthModal(state) {
      state.isAuthModalShown = false
    },
    setAccessToken(state, action: PayloadAction<AuthSliceState['accessToken']>) {
      state.accessToken = action.payload
    },
    setUserInfo(state, action: PayloadAction<AuthSliceState['user']>) {
      state.user = action.payload
    },
  },
})
