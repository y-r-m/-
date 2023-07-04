import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const todoListSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addToDos: (state, action) => {
      state.push(action.payload);
    },
    toggleToDo: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

export default todoListSlice;
export const { addToDos, toggleToDo } = todoListSlice.actions;
