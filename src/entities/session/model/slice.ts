import type { RootState } from 'app/store/store'

import { createSlice } from '@reduxjs/toolkit'
import { sessionApi } from 'entities/session/api/session-api'

type SessionSliceState =
  | {
      accessToken: null
      isAuth: false
    }
  | {
      accessToken: string
      isAuth: true
    }

const initialState: SessionSliceState = {
  accessToken: null,
  isAuth: false,
}

export const sessionSlice = createSlice({
  extraReducers: builder => {
    builder
      .addMatcher(
        sessionApi.endpoints.login.matchFulfilled,
        (state: SessionSliceState, { payload }) => {
          state.isAuth = true

          if (state.isAuth) {
            state.accessToken = payload.accessToken
          }
        }
      )
      .addMatcher(sessionApi.endpoints.logout.matchFulfilled, (state: SessionSliceState) => {
        state.accessToken = null
        state.isAuth = false
      })
  },
  initialState,
  name: 'session',
  reducers: {
    clearSession(state) {
      state.accessToken = null
      state.isAuth = false
    },
  },
})

export const selectIsAuth = (state: RootState) => state.session.isAuth
export const { clearSession } = sessionSlice.actions
