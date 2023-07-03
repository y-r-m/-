import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  logInState: false,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.logInState = true;
    },
    logout: (state) => {
      state.logInState = false;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice;
