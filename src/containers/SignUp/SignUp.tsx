import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/configureStore';
import { getSignUpName, getSignUpEmail,  getSignUpPassword, /*verifyPassword*/ } from '../../slice/SignUp/SignUpSlice';
import { useSignUpDataServiceMutation } from '../../apiSlice/userApi/userApiSlice';

const SignUp = () => {
    const name = (useAppSelector(state => state.SignUpData.name));
    const email = (useAppSelector(state => state.SignUpData.email));
    const password = (useAppSelector(state => state.SignUpData.password));
    const checkPassword = (useAppSelector(state => state.SignUpData.verifyPassword))
    const dispatch = useAppDispatch();
    const [ trigger ] = useSignUpDataServiceMutation()
  return (
    <div className=''>
        <div className='flex'>
            <div className='w-[49.5%] h-[900px] bg-[#f2f3f5]'>
                <div className='flex h-[900px] space-x-8 items-center justify-end mr-20'>
                    <p className='font-bold font-mono'>Dream Digger</p>
                    <p className=''>|</p>
                    <p>一起讓美好的事物發生</p>
                </div>
            </div>
            <div className='w-1/2 h-[900px]'>
                <div className='flex flex-col items-left justify-start ml-[60px] mt-[140px] w-[800px]'>
                    <div className=''>
                        <h3><p className='text-xl font-bold my-4'>註冊帳號</p></h3>
                    </div>
                    <div className='flex h-[50px]'>
                        <button 
                            className='bg-[#3B5998] hover:bg-[#3B5998] text-white font-bold py-2.5 px-3.5 border border-blue-700 rounded'
                            >
                                    FacekBook 註冊
                        </button>
                        <p className='flex items-center justigy-start ml-[15px]'>或</p>
                    </div>
                    <div className='h-[40px]'>
                        <p className='text-xs mt-4'>
                            繼續進行代表你同意
                            <a href='https://www.youtube.com/watch?v=qPSWnnqb3u0&list=PLwEeD5wMgnxJzXBWlLHqbGfXWmwZoTUNX&index=91&ab_channel=JM%E5%94%B1R%26B%E7%9A%84%E9%82%A3%E5%80%8B' 
                                className='text-[#0249ba]'
                                >
                                    服務條款。
                            </a>
                            </p>
                    </div>
                    <div className='flex flex-col h-[60px] mt-[4px]'>
                        <label htmlFor='name' className='text-[14px] mb-[5px] font-semibold'>姓名</label>
                        <input 
                            type='text'
                            id='name'
                            value={name}
                            onChange = {e => {
                                dispatch(getSignUpName(e.target.value))
                            }}
                            className='border border-inherit h-[35px] w-[800px] caret-black p-2'>
                        </input>
                    </div>
                    <div className='flex flex-col h-[60px] mt-[5px]'>
                        <label 
                            htmlFor='email' 
                            className='text-[14px] mb-[5px] font-semibold'
                        >
                            信箱
                        </label>
                        <input
                            type='email'
                            id='email' 
                            value={email}
                            onChange = {e =>{
                                dispatch(getSignUpEmail(e.target.value))
                            }}
                            className='border border-inherit h-[35px] w-[800px] mt-[] caret-black p-2'>
                        </input>
                    </div>
                    <div className='flex flex-col h-[60px] mt-[5px]'>
                        <label 
                            htmlFor='password'
                            className='text-[14px] mb-[5px] font-semibold'
                        >
                            密碼 ( 至少六碼 )
                        </label>
                        <input 
                            type='password'
                            id='password'
                            value={password}
                            onChange = {e =>{
                                dispatch(getSignUpPassword(e.target.value))
                            }}
                            className='border border-inherit h-[35px] w-[800px] caret-black p-2'>
                        </input>
                    </div>
                    <div className='flex flex-col h-[60px] mt-[5px]'>
                        <label htmlFor='verifyPassword' 
                            className='text-[14px] mb-[5px] font-semibold'
                        >
                            確認密碼
                        </label>
                        <input
                            type='password'
                            id='verifyPassword'
                            /*value={checkPassword}
                            onChange = {e =>{
                                dispatch(verifyPassword(e.target.value))
                            }}*/
                            className='border border-inherit h-[35px] w-[800px] caret-black p-2'>
                        </input>
                    </div>
                    <div className='h-[60px] flex-col h-[60px]'>
                        <div className='mt-[20px] space-x-2'>
                            <input 
                                type='checkbox' 
                                value='remenber'
                            />
                            <label 
                                htmlFor = 'remenber' 
                                className='text-[14px]'
                            >
                            記得我的帳號，下次自動登入
                            </label>
                        </div>
                    </div>
                    <div>
                        <button 
                            className='bg-transparent hover:bg-[#30ba55] text-[#30ba55] font-semibold hover:text-white py-2 px-6 border border-[#30ba55] hover:border-transparent rounded'
                            >
                            註冊
                        </button>
                    </div>
                    <div className='h-[30px]'>
                        <p className='text-xs mt-2'>
                            繼續進行代表你同意
                            <a href='https://www.youtube.com/watch?v=qPSWnnqb3u0&list=PLwEeD5wMgnxJzXBWlLHqbGfXWmwZoTUNX&index=91&ab_channel=JM%E5%94%B1R%26B%E7%9A%84%E9%82%A3%E5%80%8B' 
                                className='text-[#0249ba]'
                            >
                            服務條款。
                            </a>
                        </p>
                    </div>
                    <hr className="my-8 h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
                    <div className='space-x-8'>
                        <a href='./login' className='text-[14px] font-semibold hover:text-blue-800'>登入</a><a href='./forgetPassword' className='text-[14px] font-semibold hover:text-blue-800'>忘記密碼或重設密碼</a>
                    </div>
                </div>
            </div>
            <hr className="my-8 h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
        </div>
        <footer className='h-[280px] test-sm border-tA'>
            <div className='flex  justify-evenly mt-[50px]'>
                <div className='flex flex-col'>
                    <h3>Social media</h3>
                    <a href='./youtube' className='text-[#0249ba]'>Youtube</a>
                    <a href='./FaceBook' className='text-[#0249ba]'>FaceBook</a>
                    <a href='./Instagram' className='text-[#0249ba]'>Instagram</a>
                    <a href='./Twitter' className='text-[#0249ba]'>Twitter</a>
                </div>
                <div className='flex flex-col'>
                    <h3>Resources</h3>
                    <a href='./question' className='text-[#0249ba]'>常見問答</a>
                    <a href='./userTerms' className='text-[#0249ba]'>使用條款</a>
                    <a href='./privacy' className='text-[#0249ba]'>隱私權政策</a>
                </div>
                <div className='flex flex-col'>
                    <h3>About</h3>
                    <a href='我們' className='text-[#0249ba]'>關於我們</a>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default SignUp;