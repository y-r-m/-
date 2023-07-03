import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  nullCart: [],
};

const cartSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    addPro1: (state, action) => {
      state, action.payload;
    },
    addPro2: (state, action) => {
      state, action.payload;
    },
    deleteCarts: (state, action) => {
      state;
    },
  },
});
export default cartSlice;
export const { addPro1, addPro2, deleteCarts } = cartSlice.actions;
