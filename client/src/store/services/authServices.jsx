import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const authServices = createApi({
  reducerPath: "auth",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/api/",
  }),
});
