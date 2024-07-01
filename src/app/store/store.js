import { configureStore } from "@reduxjs/toolkit";
import shopReducer from "../feature/shopSlice";

export const store = configureStore({
  reducer: {
    data: shopReducer,
  },
});
