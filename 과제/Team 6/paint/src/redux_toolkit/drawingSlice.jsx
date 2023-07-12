import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dots: [],
  lines: [],
  currentColor: "black",
};

const drawingSlice = createSlice({
  name: "drawing",
  initialState,
  reducers: {
    drawDots: (state, action) => {
      console.log(state);
      console.log(action);
      state.dots = [...state.dots, action.payload];
    },
    lines: (state, action) => {
      console.log(state);
      console.log(action);
      state.lines = [...state.lines, action.payload];
    },
    currentColor: (state, action) => {
      console.log(state);
      console.log(action);
      state.currentColor = action.payload;
    },
  },
});

export const { drawDots, lines, currentColor } = drawingSlice.actions;
export default drawingSlice.reducer;
