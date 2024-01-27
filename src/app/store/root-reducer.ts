import { combineReducers } from '@reduxjs/toolkit'
import { sessionSlice } from 'entities/session'
import { baseApi } from 'shared/api/base-api'

export const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  [sessionSlice.name]: sessionSlice.reducer,
})
