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
    getProductByCategory: builder.query({
      query: (categoryId) => `/products/category/${categoryId}`,
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
  useGetProductByCategoryQuery,
} = productApi;
