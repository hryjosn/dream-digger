import React from 'react'

const MonthSelector = (props: JSX.IntrinsicAttributes & React.ClassAttributes<HTMLSelectElement> & React.SelectHTMLAttributes<HTMLSelectElement>) => {
  return (
    <select 
        className='h-[36px] border rounded font-medium pb-[3px]'
        {...props}
    >
        <option>一月</option>
        <option>二月</option>
        <option>三月</option>
        <option>四月</option>
        <option>五月</option>
        <option>六月</option>
        <option>七月</option>
        <option>八月</option>
        <option>九月</option>
        <option>十月</option>
        <option>十一月</option>
        <option>十二月</option>
    </select>
  )
}

export default MonthSelector;