import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const authServices = createApi({
  reducerPath: "auth",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/",
  }),

  // @Mutation for POST or PUT Method
  // @Query for GET Method
  endpoints: (builder) => {
    return {
      authLogin: builder.mutation({
        query: (logInData) => {
          return {
            url: "/login",
            method: "POST",
            body: "logInData",
          };
        },
      }),
    };
  },
});

export const { useAuthLoginMutation } = authServices;

export default authServices;
