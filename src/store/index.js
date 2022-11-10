import { configureStore } from "@reduxjs/toolkit";
import curencySlice from "../reducer/curencySlice";

const store = configureStore({
  reducer: curencySlice,
});

export default store;
