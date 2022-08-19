import { configureStore } from "@reduxjs/toolkit";
import authServices from "./services/authServices";

export const store = configureStore({
  reducer: {
    [authServices.reducerPath]: authServices.reducer,
  },
});

export default store;
