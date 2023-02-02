import React from 'react'
import { useAppSelector } from '../../../store/configureStore';

const CategorySelector = (props: React.ClassAttributes<HTMLSelectElement> & React.SelectHTMLAttributes<HTMLSelectElement>) => {
    const categoryList = useAppSelector(state => state.proposalData.categoryList);
    return (
        <select
            className='border h-[36px] w-fit mt-[7px] mb-[1rem]'
            {...props}
        >
            {categoryList!.map((value, key) => {
                return <option key={key}>{value}</option>
            })}
        </select>
    )
}

export default CategorySelector;
