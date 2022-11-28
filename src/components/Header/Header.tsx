import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Header = () => {
    const router = useRouter();
    const [loginState, setLoginState] = useState(false);
    useEffect(() => {
        if(localStorage.getItem('token')) {
            setLoginState(true);
        }
    }, [])
    return (
        <header
            className='flex justify-center items-center h-[68.5px] border-b border-[#f4f4f5]'
        >
            <div className='flex justify-center items-center h-[56px] w-[1000px]'>
                <button className='flex border-r justify-center items-center cursor-pointer pr-[22px] mr-[22px]' onClick={() => router.push('/')}>
                    DreamDigger
                </button>
                <div className='w-[808.64px] text-[0.875rem]'>
                    <button className='mr-[1rem] hover:text-sky-700'>
                        探索
                    </button>
                    <button className='mr-[1rem] hover:text-sky-700' onClick={() => router.push('/proposal')}>
                        提案
                    </button>
                </div>
                { loginState ? 
                    (<div className='flex justify-center items-center'>
                        <a>
                            <input type='image' className='h-[11px] w-[15px] mr-[25px]' src='/images/message.jpg'/>
                        </a>
                        <button className='flex'>
                            <input type='image' className='h-[30px] w-[30px] border rounded-[12px]' src='/images/emptyTest.png'/>
                            <input type='image' className='h-[7px] w-[9px] self-center m-[12px]' src='/images/arrowDown.png'/>
                        </button>
                    </div>) : 
                    (<div className='flex justify-end w-[500px]'>
                        <div className='flex items-center'>
                            <div className='flex mr-[7px]'>
                                <div className='font-bold p-2 bg-zinc-100 md:px-4 ml-1'>
                                    <a href='./login' className='text-[14px]'>登入</a>
                                </div>
                                <div className='font-bold p-2 bg-zinc-100 md:px-4 ml-1'>
                                    <a href='./signup' className='text-[14px]'>註冊</a>
                                </div>
                                <div className='font-bold p-2 bg-zinc-100 md:px-4 ml-1'>
                                    <a href=''  className='font-bold text-[14px] text-blue-600/100'>Facebook 登入</a>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
                
            </div>
        </header>
    )
}

export default Header;