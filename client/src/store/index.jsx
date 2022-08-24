import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";
import authService from "./services/authService";
import createCategory from "./services/createCategory";

export const Store = configureStore({
  reducer: {
    [authService.reducerPath]: authService.reducer,
    [createCategory.reducerPath]: createCategory.reducer,
    authReducer: authReducer,
  },
});

export default Store;
