import { configureStore } from "@reduxjs/toolkit";
import { sellerApi } from "./src/api/bestSellerApi";
import { categoryApi } from "./src/api/categoryApi";

const store = configureStore({
  reducer: {
    [sellerApi.reducerPath]: sellerApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sellerApi.middleware, categoryApi.middleware),
});

export default store;
