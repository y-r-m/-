import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  inputValue: "",
};

const titleSlice = createSlice({
  name: "title",
  initialState,
  reducers: {
    setInputValue: (state, action) => {
      state.inputValue = action.payload;
    },
  },
});

export const { setInputValue } = titleSlice.actions;
export default titleSlice.reducer;
