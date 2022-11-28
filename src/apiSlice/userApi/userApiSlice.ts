import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { LoginType, responseType, SingUpDataType } from './types';

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
    signUpApi: builder.mutation<responseType, SingUpDataType>({
      query: (signupData) => ({
        url: './signup',
        method: 'POST',
        body: signupData,
      })
    })
  }),
});

export const { useLoginApiMutation, useSignUpApiMutation } = userApi;
export default userApi.reducer;