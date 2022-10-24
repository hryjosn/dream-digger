import React from "react";
import type { AppProps } from 'next/app'

export const Input = (props: JSX.IntrinsicAttributes & React.ClassAttributes<HTMLInputElement> & React.InputHTMLAttributes<HTMLInputElement>) => {
    return (
        <input
            className='h-[34px] w-full mt-1 pl-2 border-solid border border-[#e5e5e5] focus:outline focus:outline-offset-2 focus:outline-[#e5e5e5] rounded-md'
            {...props}
        />
    )
}