import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react"
import Cookies from "js-cookie"

export const userApi = createApi({
  reducerPath: "api/profile",
  tagTypes: ["User"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/api/",
    prepareHeaders: (headers) => {
      headers.set("authorization", `Bearer ${Cookies.get("accessToken")}`)
      return headers
    },
  }),
  endpoints: (builder) => ({
    getProfile: builder.query({
      query: () => "/user/profile",
      providesTags: ["User"],
    }),
    updateProfile: builder.mutation({
      query: (data) => ({ body: data, url: "/user/update", method: "PATCH" }),
      invalidatesTags: ["User"],
    }),
  }),
})

export const { useGetProfileQuery, useUpdateProfileMutation } = userApi
