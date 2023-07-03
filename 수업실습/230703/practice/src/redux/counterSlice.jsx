import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: 0,
};
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incre: (state, action) => {
      state.value = state.value + 1;
    },
    decre: (state, action) => {
      state.value = state.value - 1;
    },
    reset: (state, action) => {
      state.value = initialState.value;
    },
  },
});

export const { incre, decre, reset } = counterSlice.actions;
export default counterSlice;
