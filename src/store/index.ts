import { configureStore } from '@reduxjs/toolkit'
import { api } from 'api/generated'
import { SlicesNames } from './slices-names'
import { authSlice } from './slices/auth.slice'

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    [SlicesNames.Auth]: authSlice.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(api.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
