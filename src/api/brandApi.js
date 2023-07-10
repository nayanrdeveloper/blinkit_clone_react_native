import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const brandApi = createApi({
  reducerPath: "brandProductApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://blinkit.onrender.com",
  }),
  endpoints: (builder) => ({
    getBrands: builder.query({
      query: () => "/brand",
    }),
  }),
});

export const { useGetBrandsQuery } = brandApi;
