import { createSlice } from "@reduxjs/toolkit";

const initialState =  [
  {id: 1, title: 'Qalb iffati', completed: false},
  {id: 2, title: 'Muqaddas quddus', completed: false},
  {id: 3, title: 'Ufq', completed: false},
  {id: 4, title: 'Nafs tarbiyasi', completed: false},
  {id: 5, title: 'Suniy aqidalar', completed: false},
]


const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        title: action.payload.title,
        completed: false
      }

      state.unshift(newTodo);
    },
    toggleComplate: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].completed = action.payload.completed
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id)
    }
  }
})

export const {addTodo, toggleComplate, deleteTodo} = todoSlice.actions
export default todoSlice.reducer