// redux toolkit allows you to use slices, which are a way to define state, actions, and reducers all in the same place.
// regular redux requires you to define each of these separately

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  count: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    // "increment" is an action, state.count += 1 is the reducer
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.count += 1
    },
    decrement: (state) => {
      state.count -= 1
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload
    },
  },
})

// Action creators are generated for each case reducer function

// must export all actions AND reducer. Actions are called by other components, reducer is PASSED INTO THE STORE. Store template has reducer key
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer