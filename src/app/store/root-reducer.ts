import { combineReducers } from '@reduxjs/toolkit'
import { baseApi } from 'shared/api/base-api'

export const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
})
