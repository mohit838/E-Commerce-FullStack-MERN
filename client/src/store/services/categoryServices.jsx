import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const createCategory = createApi({
  reducerPath: "category",
  tagTypes: "categories",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/",
    prepareHeaders: (headers, { getState }) => {
      const clientToken = getState();
      const cToken = clientToken?.authReducer?.adminToken;
      headers.set("authorization", cToken ? `Bearer ${cToken}` : "");
      return headers;
    },
  }),
  endpoints: (builder) => {
    return {
      createCat: builder.mutation({
        query: (name) => {
          return {
            url: "/create-category",
            method: "POST",
            body: name,
          };
        },
        invalidatesTags: ["categories"],
      }),
      get: builder.query({
        query: (page) => {
          return { url: `categories/${page}`, method: "GET" };
        },
        providesTags: ["categories"],
      }),
    };
  },
});
export const { useCreateCatMutation, useGetQuery } = createCategory;

export default createCategory;
