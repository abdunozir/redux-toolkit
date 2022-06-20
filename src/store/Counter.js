import { createSlice } from "@reduxjs/toolkit"

const initialState =  {counter: 0, name: 'Javohir', showCounter: true};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    decrement(state) {
      state.counter--
    },
    increment(state, action) {
      state.counter += action.payload
    },
    toggle(state) {
      state.showCounter = !state.showCounter
    },
  }
})


export const counterActions = counterSlice.actions;
