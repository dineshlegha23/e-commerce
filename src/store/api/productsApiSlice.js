import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://www.course-api.com" }),
  endpoints: (builder) => ({
    fetchProducts: builder.query({
      query: () => `react-store-products`,
    }),
    fetchSingleProduct: builder.query({
      query: (productId) => `react-store-single-product?id=${productId}`,
    }),
  }),
});

export const { useFetchProductsQuery, useFetchSingleProductQuery } =
  productsApiSlice;
