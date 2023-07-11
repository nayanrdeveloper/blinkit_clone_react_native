import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productProApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://blinkit.onrender.com",
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/products",
    }),
    getProductBySubCategory: builder.query({
      query: (subCategoryId) => `/products/subcategory/${subCategoryId}`,
    }),
    getProductByBrand: builder.query({
      query: (brandId) => `/products/brand/${brandId}`,
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductBySubCategoryQuery,
  useGetProductByBrandQuery,
} = productApi;
