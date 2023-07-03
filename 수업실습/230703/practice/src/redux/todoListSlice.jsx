import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const todoListSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodos: (state, action) => {
      state, action.payload;
    },
  },
});

export default todoListSlice;
