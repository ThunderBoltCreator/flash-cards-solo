import type { RootState } from 'app/store/store'

import { createSlice } from '@reduxjs/toolkit'
import { sessionApi } from 'entities/session/api/session-api'
import { userApi } from 'entities/user'

type SessionSliceState = {
  isAuth: boolean
}

const initialState: SessionSliceState = {
  isAuth: false,
}

export const sessionSlice = createSlice({
  extraReducers: builder => {
    builder
      .addMatcher(sessionApi.endpoints.login.matchFulfilled, (state: SessionSliceState) => {
        state.isAuth = true
        console.log('login')
      })
      .addMatcher(sessionApi.endpoints.logout.matchFulfilled, (state: SessionSliceState) => {
        console.log('logout')
        console.log(state.isAuth)
        sessionApi.util.resetApiState()
        state.isAuth = false
        console.log(state.isAuth)
      })
      .addMatcher(userApi.endpoints.me.matchFulfilled, (state: SessionSliceState) => {
        state.isAuth = true
      })
      .addMatcher(userApi.endpoints.me.matchRejected, (state: SessionSliceState) => {
        state.isAuth = false
      })
  },
  initialState,
  name: 'session',
  reducers: {
    onLogout(state: SessionSliceState) {
      state.isAuth = false
    },
  },
})

export const selectIsAuth = (state: RootState) => state.session.isAuth

export const { onLogout } = sessionSlice.actions
