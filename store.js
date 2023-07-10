import { configureStore } from "@reduxjs/toolkit";
import { sellerApi } from "./src/api/bestSellerApi";

const store = configureStore({
  reducer: {
    [sellerApi.reducerPath]: sellerApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sellerApi.middleware),
});

export default store;
