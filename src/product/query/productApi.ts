import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import config from '../../api/config';
import { ProductListResponse } from './productTypes';

export const productApi = createApi({
    reducerPath: "product",
    baseQuery: fetchBaseQuery({
        baseUrl: config.defaults.baseUrl
    }),
    endpoints: (builder) => ({
        productListApi: builder.query<ProductListResponse, string>({
            query: () => `products`,
        }),

        // productAddApi:builder.query({
        //     query:()=>
        // }),
    }),

})

export const { useProductListApiQuery } = productApi;