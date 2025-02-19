import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const profileApi = createApi({
  reducerPath: "profileApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://portfolio-backend-r82z.onrender.com/portfolio/",
  }),
  tagTypes: ["Profile"],
  endpoints: (builder) => ({
    getProfile: builder.query({
      query: () => "profile",
      providesTags: ["Profile"],
    }),
  }),
});

export const { useGetProfileQuery } = profileApi;
