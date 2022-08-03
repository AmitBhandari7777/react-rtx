import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import config from '../api/config';

export const productionApi = createApi({
    reducerPath: "post-list",
    baseQuery: fetchBaseQuery({
        baseUrl: config.defaults.baseUrl
    }),
    endpoints: (builder) => ({
        postList: builder.query({
            query: () => `products`,
        }),
    }),
});

export default productionApi;