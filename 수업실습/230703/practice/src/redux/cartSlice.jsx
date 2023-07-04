import { createSlice } from "@reduxjs/toolkit";
const initialState = [];

const cartSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    addCarts: (state, action) => {
      return (state = [...state, action.payload]);
    },
    deleteCarts: (state, action) => {
      const index = action.payload;
      return state.filter((item, i) => i !== index);
    },
  },
});
export default cartSlice;
export const { addCarts, deleteCarts } = cartSlice.actions;
