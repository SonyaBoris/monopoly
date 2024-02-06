import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    random: (state) => {
      state.value = Math.floor(1 + Math.random() * 6)
    },
  },
})


export const { random } = counterSlice.actions

export default counterSlice.reducer