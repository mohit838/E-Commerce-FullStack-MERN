import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const createCategory = createApi({
  reducerPath: "category",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/",
    prepareHeaders: (headers, { getState }) => {
      const clientToken = getState();
      const cToken = clientToken?.authReducer?.adminToken;
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
      }),
    };
  },
});
export const { useCreateCatMutation } = createCategory;

export default createCategory;
