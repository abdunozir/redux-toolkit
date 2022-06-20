import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./Counter";
import { userSlice } from "./User";

const store = configureStore({
  reducer: {
      counter: counterSlice.reducer,
      user: userSlice.reducer
    },
});

export default store;