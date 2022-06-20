import { createSlice } from "@reduxjs/toolkit";

const initialState =  {name: 'name', age: ''};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser(state) {
      state.name = 'Javohir'
    }
  }
})


export const userActions = userSlice.actions;
