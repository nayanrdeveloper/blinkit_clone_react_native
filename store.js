import { configureStore } from "@reduxjs/toolkit";
import { sellerApi } from "./src/api/bestSellerApi";
import { brandApi } from "./src/api/brandApi";
import { categoryApi } from "./src/api/categoryApi";
import { featureApi } from "./src/api/featureApi";

const store = configureStore({
  reducer: {
    [sellerApi.reducerPath]: sellerApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    [featureApi.reducerPath]: featureApi.reducer,
    [brandApi.reducerPath]: brandApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      sellerApi.middleware,
      categoryApi.middleware,
      featureApi.middleware,
      brandApi.middleware
    ),
});

export default store;
