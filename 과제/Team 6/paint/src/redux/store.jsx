import { configureStore } from "@reduxjs/toolkit";
import paintingReducer from "./paintingSlice";

const store = configureStore({
  reducer: {
    painting: paintingReducer,
  },
});

export default store;
