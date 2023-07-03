import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
};

const MovieSlice = createSlice({
  name: "movie",
  initialState,
});
