import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";
import globalReducerCat from "./reducers/globalReducerCat";
import authService from "./services/authService";
import createCategory from "./services/categoryServices";

export const Store = configureStore({
  reducer: {
    [authService.reducerPath]: authService.reducer,
    [createCategory.reducerPath]: createCategory.reducer,
    authReducer: authReducer,
    globalReducerCat: globalReducerCat,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([createCategory.middleware]),
});

export default Store;
