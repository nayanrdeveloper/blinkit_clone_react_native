import { configureStore } from "@reduxjs/toolkit";
import { sellerApi } from "./src/api/bestSellerApi";
import { brandApi } from "./src/api/brandApi";
import { categoryApi } from "./src/api/categoryApi";
import { featureApi } from "./src/api/featureApi";
import { productApi } from "./src/api/productApi";
import { subCategoryApi } from "./src/api/subCategoryApi";
import cartSlice from "./src/features/cartSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    [sellerApi.reducerPath]: sellerApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    [featureApi.reducerPath]: featureApi.reducer,
    [brandApi.reducerPath]: brandApi.reducer,
    [subCategoryApi.reducerPath]: subCategoryApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      sellerApi.middleware,
      categoryApi.middleware,
      featureApi.middleware,
      brandApi.middleware,
      subCategoryApi.middleware,
      productApi.middleware
    ),
});

export default store;
