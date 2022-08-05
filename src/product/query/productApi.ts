import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import config from '../../api/config';
import Product, { ProductAddRequest, ProductListResponse } from './productTypes';

export const productApi = createApi({
    reducerPath: "product",
    tagTypes: ['ProductList', 'ProductAdd'],
    baseQuery: fetchBaseQuery({
        baseUrl: config.defaults.baseUrl
    }),
    endpoints: (builder) => ({
        productListApi: builder.query<ProductListResponse, void>({
            query: () => `products`,
            providesTags: ["ProductList"]
        }),

        productAddApi: builder.mutation<Product, ProductAddRequest>({
            query: (payload) => ({
                url: `products/add`,
                method: "POST",
                body: payload,

            }),
            invalidatesTags: ['ProductList'],
        }),
    }),

})

export const { useProductListApiQuery, useProductAddApiMutation } = productApi;