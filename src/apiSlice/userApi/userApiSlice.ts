import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import signup from '../../../pages/signup';
import { UserAccountType, responseType, SingUpDataType } from './types';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.API_URL }),
  endpoints: (builder) => ({
    userLoginService: builder.mutation<responseType, UserAccountType>({
      query: (userAccount) => ({
        url: '/login',
        method: 'POST',
        body: userAccount,
      }),
    }),
    signUpDataService: builder.mutation<responseType, SingUpDataType>({
      query: (signupData) => ({
        url: './signup',
        method: 'POST',
        body: signupData,
      })
    })
  }),
});

export const { useUserLoginServiceMutation, useSignUpDataServiceMutation } = userApi;
export default userApi.reducer;