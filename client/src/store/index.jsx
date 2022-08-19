import { configureStore } from "@reduxjs/toolkit";
import authServices from "./services/authServices";

export const Store = configureStore({
  reducer: {
    [authServices.reducerPath]: authServices.reducer,
  },
});

export default Store;
