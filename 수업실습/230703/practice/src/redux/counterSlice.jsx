import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0, //값이 많아질때 관리해주기 좋음
};
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.value = state.value + 1; //객체이기 때문에 .value
    },
    decrement: (state, action) => {
      state.value = state.value - 1;
    },
    reset: (state, action) => {
      state.value = initialState.value;
    },
  },
});

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice;
