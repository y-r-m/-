import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import authSlice from "./authSlice";
import cartSlice from "./cartSlice";
import todoListSlice from "./todoListSlice";

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
    carts: cartSlice.reducer,
    todos: todoListSlice.reducer,
  },
});
export default store;
