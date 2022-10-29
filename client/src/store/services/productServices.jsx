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
      createProduct: builder.mutation({
        query: (data) => {
          return {
            url: "/create-product",
            method: "POST",
            body: data,
          };
        },
        invalidatesTags: ["products"],
      }),

      updateProduct: builder.mutation({
        query: (data) => {
          return {
            url: "/product",
            method: "PUT",
            body: data,
          };
        },
        invalidatesTags: ["products"],
      }),

      deleteProduct: builder.mutation({
        query: (id) => {
          return {
            url: `/delete/${id}`,
            method: "DELETE",
          };
        },
        invalidatesTags: ["products"],
      }),

      getProducts: builder.query({
        query: (page) => {
          return {
            url: `/products/${page}`,
            method: "GET",
          };
        },
        providesTags: ["products"],
      }),

      getProduct: builder.query({
        query: (pid) => {
          return {
            url: `/product/${pid}`,
            method: "GET",
          };
        },
        providesTags: ["products"],
      }),
    };
  },
});
export const {
  useCreateProductMutation,
  useDeleteProductMutation,
  useUpdateProductMutation,
  useGetProductsQuery,
  useGetProductQuery,
} = productService;
export default productService;
