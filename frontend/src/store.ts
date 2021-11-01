import { configureStore } from '@reduxjs/toolkit'
import authorSlice from './slices/authorSlice'
import userSlice from './slices/userSlice'

export const store = configureStore({
  reducer: {
      login: userSlice,
      author: authorSlice
  },
})