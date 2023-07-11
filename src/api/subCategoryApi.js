import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const subCategoryApi = createApi({
  reducerPath: "subCategoryProductApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://blinkit.onrender.com",
  }),
  endpoints: (builder) => ({
    getSubCategories: builder.query({
      query: () => "/subcategories",
    }),
    getSubCategoriesByCategory: builder.query({
      query: (categoryId) => `/subcategories/${categoryId}`,
    }),
  }),
});

export const { useGetSubCategoriesQuery, useGetSubCategoriesByCategoryQuery } =
  subCategoryApi;
