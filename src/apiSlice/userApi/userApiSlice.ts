import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setErrorMsg } from '../../slice/login/loginSlice';
import { LoginType, responseType, SingUpDataType, userData, getUserByToken } from './types';
import { loginSchema, valueSchema } from './validation';
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
        url: '/signup',
        method: 'POST',
        body: signupData,
      }),
      async onQueryStarted(arg,{dispatch,queryFulfilled}){
        valueSchema.validate(arg)
        .then(async () =>{
          queryFulfilled.then((data) => {
            localStorage.setItem('token', data.data.token)
          })
          .catch((error) =>{
            dispatch(setErrorMsg(error.error.data))
          })
        })
        .catch((error) =>{
          dispatch(setErrorMsg(error.message))
        })
      }
    }),
    getUserApi: builder.query<userData, getUserByToken>({
      query: () => ({
        url: '/getuser',
      })
    })
  }),
});

export const { 
  useLoginApiMutation, 
  useSignUpApiMutation,
  useLazyGetUserApiQuery,
} = userApi;
export default userApi.reducer;