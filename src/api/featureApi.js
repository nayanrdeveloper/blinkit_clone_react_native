import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const featureApi = createApi({
  reducerPath: "featureProductApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://blinkit.onrender.com",
  }),
  endpoints: (builder) => ({
    getFeatures: builder.query({
      query: () => "/features",
    }),
  }),
});

export const { useGetFeaturesQuery } = featureApi;
