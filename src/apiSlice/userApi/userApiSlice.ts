import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { LoginType, responseType, SingUpDataType } from './types';
import { loginSchema } from './validation'
import { setErrorMsg } from '../../slice/login/loginSlice';

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
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        loginSchema.validate(arg)
          .then(async () => {
            queryFulfilled.then((data) => {
              localStorage.setItem('token', data.data.token);
            })
            .catch((err) => {
              dispatch(setErrorMsg(err.error.data));
            })
          })
          .catch((err) => {
            dispatch(setErrorMsg(err.message));
          });
      },
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