import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const productService = createApi({
  reducerPath: "products",
  tagTypes: "products",
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
      cProduct: builder.mutation({
        query: (data) => {
          return {
            url: "/create-product",
            method: "POST",
            body: data,
          };
        },
        invalidatesTags: ["products"],
      }),
    };
  },
});
export const { useCProductMutation } = productService;
export default productService;
