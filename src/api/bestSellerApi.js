import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const sellerApi = createApi({
  reducerPath: "newsCategoryApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://blinkit.onrender.com",
  }),
  endpoints: (builder) => ({
    getSellers: builder.query({
      query: () => "/bestseller",
    }),
  }),
});

export const { useGetSellersQuery } = sellerApi;
