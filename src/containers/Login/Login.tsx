import React from 'react';
import { useAppSelector, useAppDispatch } from '../../store/configureStore';
import { getEmail, getPassword } from '../../features/login/loginSlice';
import { Input } from '../../components/Input/Input'
import About from '../../components/About/About';

const Login = () => {
  const email: string = String(useAppSelector(state => state.userAccount.email));
  const password: string = String(useAppSelector(state => state.userAccount.password));
  const dispatch = useAppDispatch();
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
                />
                <div className='flex mt-[1.5rem]'>
                  <button 
                    className='h-[42px] w-[84px] mr-[20px] rounded-md border-solid border border-[#229f2a] hover:border-black font-bold text-[#229f2a] hover:text-black'
                    onClick={() =>{
                      console.log(email,password)
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
      <About/>
    </div>
  )
}

export default Login;
