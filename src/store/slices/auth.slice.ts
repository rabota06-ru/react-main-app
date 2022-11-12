import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SlicesNames } from 'store/slices-names'

interface AuthSliceState {
  isAuthModalShown: boolean
  accessToken: string | null
}

export const authSlice = createSlice({
  name: SlicesNames.Auth,
  initialState: {
    isAuthModalShown: false,
    accessToken: null,
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
  },
})
