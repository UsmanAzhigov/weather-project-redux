import { configureStore } from "@reduxjs/toolkit";
import cityReducer from "./slice/citySlice";

const store = configureStore({
  reducer: {
    cities: cityReducer,
  },
});

export default store;
