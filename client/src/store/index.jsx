import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";
import globalReducer from "./reducers/globalReducer";
import authService from "./services/authService";
import createServices from "./services/categoryServices";
import homeProducts from "./services/homeProducts";
import productService from "./services/productServices";

export const Store = configureStore({
  reducer: {
    [authService.reducerPath]: authService.reducer,
    [createServices.reducerPath]: createServices.reducer,
    [productService.reducerPath]: productService.reducer,
    [homeProducts.reducerPath]: homeProducts.reducer,
    authReducer: authReducer,
    globalReducer: globalReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      createServices.middleware,
      productService.middleware,
      homeProducts.middleware,
    ]),
});

export default Store;
