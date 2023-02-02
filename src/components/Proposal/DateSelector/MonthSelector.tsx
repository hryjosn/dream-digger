import React from 'react'
import { useAppSelector } from '../../../store/configureStore';
const MonthSelector = (props: JSX.IntrinsicAttributes & React.ClassAttributes<HTMLSelectElement> & React.SelectHTMLAttributes<HTMLSelectElement>) => {
  const monthList = useAppSelector(state => state.proposalData.monthList);
  return (
    <select 
        className='h-[36px] border rounded font-medium pb-[3px]'
        {...props}
    >
        {monthList!.map((value, key) => {
          return <option key={key}>{value}</option>
        })}
    </select>
  )
}

export default MonthSelector;