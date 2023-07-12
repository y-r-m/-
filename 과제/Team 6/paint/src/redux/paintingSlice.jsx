import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  dots: [],
};
const paintingSlice = createSlice({
  name: "painting",
  initialState,
  reducers: {
    drawDots: (state, action) => {
      state.dots.push(action.payload);
    },
  },
});
export const { drawDots } = paintingSlice.actions;
export default paintingSlice.reducer;
