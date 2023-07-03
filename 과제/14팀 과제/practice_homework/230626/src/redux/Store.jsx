import { configureStore } from "@reduxjs/toolkit";
import MovieStore from "./MovieStore";

const store = configureStore({
  reducer: {
    MoviStore: MovieStore,
  },
});

export default store;
