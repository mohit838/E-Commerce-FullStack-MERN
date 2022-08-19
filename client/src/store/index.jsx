import { configureStore } from "@reduxjs/toolkit";
import authService from "./services/authService";

export const Store = configureStore({
  reducer: {
    [authService.reducerPath]: authService.reducer,
  },
});

export default Store;
