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

      updateCategory: builder.mutation({
        query: (data) => {
          return {
            url: `/update-category/${data.id}`,
            method: "PUT",
            body: { name: data.name },
          };
        },
        invalidatesTags: ["categories"],
      }),

      deleteCategory: builder.mutation({
        query: (id) => {
          return {
            url: `/delete-category/${id}`,
            method: "DELETE",
          };
        },
        invalidatesTags: ["categories"],
      }),

      get: builder.query({
        query: (page) => {
          return { url: `/categories/${page}`, method: "GET" };
        },
        providesTags: ["categories"],
      }),

      fetchCategory: builder.query({
        query: (id) => {
          return {
            url: `/fetch-category/${id}`,
            method: "GET",
          };
        },
        providesTags: ["categories"],
      }),

      allCategories: builder.query({
        query: () => {
          return {
            url: "/allcategories",
            method: "GET",
          };
        },
      }),
    };
  },
});
export const {
  useCreateCatMutation,
  useGetQuery,
  useFetchCategoryQuery,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
  useAllCategoriesQuery,
} = createCategory;

export default createCategory;
