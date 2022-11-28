import React from "react";

const Header = (props: JSX.IntrinsicAttributes & React.ClassAttributes<HTMLInputElement> & React.InputHTMLAttributes<HTMLInputElement>) => {
    return (
        <header
            className='flex justify-center items-center h-[73px] border-b border-[#f4f4f5]'
        >
            <div className='flex justify-center items-center h-[56px] w-[1000px]'>
                <div className='flex justify-center items-center'>
                    DreamDigger
                    <div className='h-[27px] border-r ml-[22px] mr-[22px]'/>
                </div>
                <div className='w-[808.64px] text-[0.875rem]'>
                    <a className='mr-[1rem] cursor-pointer hover:text-sky-700'>
                        探索
                    </a>
                    <a className='mr-[1rem] cursor-pointer hover:text-sky-700'>
                        提案
                    </a>
                </div>
                <div className='flex justify-center items-center'>
                    <a>
                        <input type='image' className='h-[11px] w-[15px] mr-[25px]' src='/images/message.jpg'/>
                    </a>
                    <button className='flex'>
                        <input type='image' className='h-[30px] w-[30px] border rounded-[12px]' src='/images/emptyTest.png'/>
                        <input type='image' className='h-[7px] w-[9px] self-center m-[12px]' src='/images/arrowDown.png'/>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header;