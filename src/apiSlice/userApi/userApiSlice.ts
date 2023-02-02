import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setErrorMsg } from '../../slice/SignUp/SignUpSlice';
import { UserAccountType, responseType, SingUpDataType } from './types';
import { valueSchema } from './validation';
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
    signUpApi: builder.mutation<responseType, SingUpDataType>({
      query: (signupData) => ({
        url: './signup',
        method: 'POST',
        body: signupData,
      }),
      async onQueryStarted(arg,{dispatch,queryFulfilled}){
        valueSchema.validate(arg)
        .then(async () =>{
          queryFulfilled.then((data) =>{
            localStorage.setItem('token', data.data.token)
            return './main'
          })
          .catch((error) =>{
            dispatch(setErrorMsg(error))
          })
        })
        .catch((error) =>{
          dispatch(setErrorMsg(error))
        })
      }
    })
  }),
});

export const { useUserLoginServiceMutation, useSignUpApiMutation } = userApi;
export default userApi.reducer;