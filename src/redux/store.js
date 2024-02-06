import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './appSlice'
import playerSlice from './playerSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    player: playerSlice,
  },
})