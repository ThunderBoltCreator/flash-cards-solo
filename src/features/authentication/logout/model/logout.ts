import type { RootState } from 'app/store/store'

import { createAsyncThunk } from '@reduxjs/toolkit'
import { clearSession, sessionApi } from 'entities/session'

export const logoutThunk = createAsyncThunk<void, void, { state: RootState }>(
  'authentication/logout',
  async (_, { dispatch }) => {
    dispatch(clearSession())

    console.log('ya tuta')

    await new Promise(resolve => setTimeout(resolve, 10))

    // dispatch(sessionApi.util.invalidateTags(['SESSION']))
  }
)
