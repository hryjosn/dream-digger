import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { LoginType, responseType } from './types';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.API_URL }),
  endpoints: (builder) => ({
    loginApi: builder.mutation<responseType, LoginType>({
      query: (userAccount) => ({
        url: '/login',
        method: 'POST',
        body: userAccount,
      }),
    }),
  }),
});

export const { useLoginApiMutation } = userApi;
export default userApi.reducer;