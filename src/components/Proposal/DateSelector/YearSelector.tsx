import React from 'react'

const YearSelector = (props: JSX.IntrinsicAttributes & React.ClassAttributes<HTMLSelectElement> & React.SelectHTMLAttributes<HTMLSelectElement>) => {
  return (
    <select 
      className='h-[38px] border rounded font-medium pb-[3px]'
      {...props}
    >
      <option>{new Date().getFullYear()}</option>
      <option>{new Date().getFullYear() + 1}</option>
    </select>
  )
}

export default YearSelector;