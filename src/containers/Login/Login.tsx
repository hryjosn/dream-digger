import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../store/configureStore';
import { getEmail, getPassword, setErrorMsg } from '../../slice/login/loginSlice';
import { Input } from '../../components/Input/Input';
import { useLoginApiMutation } from '../../apiSlice/userApi/userApiSlice';

const Login = () => {
  const email: string = useAppSelector(state => state.loginPageState.params.email);
  const password: string = useAppSelector(state => state.loginPageState.params.password);
  const errorMsg: string = useAppSelector(state => state.loginPageState.errorMsg);
  const dispatch = useAppDispatch();
  const [ trigger ] = useLoginApiMutation();

  const loginHandler = async () => {
    try{
      if(email && password){
        const result = await trigger({email, password}).unwrap();
        if(result){
          localStorage.setItem('token', result.token);
        }
      } else {
        dispatch(setErrorMsg('請填寫Email或密碼'))
      }
    }catch(error){
      if(error){
        dispatch(setErrorMsg('Email或密碼是無效的'))
      }
    }
  }
  return (
    <div className='flex flex-col h-[108vh] overflow-y-auto bg-[#f4f4f5]'>
      <div className='flex basis-4/5 border-solid border border-[#e5e5e5]'>
        <div className='flex justify-center self-center basis-1/2 h-1/5'>
          <div className='flex w-[700px] self-center justify-end whitespace-pre font-bold font-mono'>
            <p>
              Dream Digger   |    實現您的夢想
            </p>
          </div>
        </div>
        <div className='flex flex-col w-[87%] basis-1/2 bg-[#ffffff] justify-center'>
          <div className='flex flex-col h-auto w-[87%] self-center'>
            {errorMsg ? 
              (<div className='flex justify-between border-b mb-8 pb-4 text-[#C45059] border-[#C45059]'>
                <p>{errorMsg}</p>
                <button 
                  onClick={() => {
                    dispatch(setErrorMsg(''));
                  }}
                >
                  ×
                </button>
              </div>) : 
              undefined
            }
            <button className='px-4 w-full h-[50px] self-center rounded-md font-bold text-left text-white bg-[#3b5998]'>
              Facebook 登入或註冊
            </button>
            <p className='text-[8px] mt-2 mb-4'>
                繼續進行代表你同意
                <a className='text-[#0050a2]'>服務條款</a>
                。
            </p>
            <div className='flex flex-col h-[280px] border-solid rounded-md border border-[#e5e5e5]'>
              <p className='font-bold m-3'>
                會員登入
              </p>
              <div className='p-3 h-full text-[15px]'>
                <p>
                  電子信箱
                </p>
                <Input 
                  type='email'
                  value={email}
                  onChange={e => {
                    dispatch(getEmail(e.target.value))
                  }}
                  required={true}
                />
                <p className='mt-1'>
                  密碼
                </p>
                <Input 
                  type='password'
                  value={password} 
                  onChange={e => {
                    dispatch(getPassword(e.target.value))
                  }}
                  required={true}
                  autoComplete='on'
                />
                <div className='flex mt-[1.5rem]'>
                  <button 
                    type='submit'
                    className='h-[42px] w-[84px] mr-[20px] rounded-md border-solid border border-[#229f2a] hover:border-black font-bold text-[#229f2a] hover:text-black'
                    onClick={() =>{
                      loginHandler();
                    }}
                  >
                    登入
                  </button>
                  <p className='text-[8px] self-center'>
                    繼續進行代表你同意
                    <a className='text-[#0050a2]'>服務條款</a>
                    。
                  </p>
                </div>
              </div>
            </div>
            <div className='w-full mt-[30px] mb-[30px] self-center border-solid border border-[#e5e5e5]'>
          </div>
          <div className='flex w-full text-[0.825rem] font-bold'>
            <a className='mr-[20px] hover:text-sky-700'>
              註冊
            </a>
            <a className='hover:text-sky-700'>
              忘記密碼或重設密碼
            </a>
          </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center bg-[#ffffff] basis-1/5'>
        <div className='flex w-full flex-row justify-around items-center text-[#0050a2] text-[0.875rem]'>
          <div className='flex flex-col'>
            <h3 className='text-[14px] font-medium text-black'>Social media</h3>
            <a>YouTube</a>
            <a>Facebook</a>
            <a>Instagram</a>
            <a>Twitter</a>
          </div>
          <div className='flex flex-col'>
            <h3 className='text-[14px] font-medium text-black'>Resources</h3>
            <a>常見問答</a>
            <a>使用條款</a>
            <a>隱私權政策</a>
          </div>
          <div className='flex flex-col'>
            <h3 className='text-[14px] font-medium text-black'>About</h3>
            <a>關於我們</a>
            <a className='mt-[10px] text-[#525252] text-[0.75rem]'>©Henry股份有限公司</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;
