import React from 'react'
import  Header from '../../components/Header/Header'
import About from '../../components/About/About'
import ProjectIntroduction from '../../components/categories/ProjectIntroduction'
import NatureSelector from '../../components/categories/NatureSelector'
import ThemeSelector from '../../components/categories/ThemeSelector'
import OrderSelector from '../../components/categories/OrderSelector'

const Categories = () => {
  return (
    <div className=''>
      <Header/>
      <div className='flex justify-center'>
        <div className='flex items-center w-[500px] h-[100px] space-x-3'>
          <NatureSelector/>
          <p className='text-xl font-bold'>+</p>
          <ThemeSelector/>
        </div>
        <div className='flex justify-end items-center w-[500px] space-x-2'>
          <div>
            <input 
              type="text" 
              className="border border-gray-300 w-full pl-8 p-1" 
              placeholder="搜尋計畫"
            />
          </div>
          <OrderSelector/>
        </div>
      </div>
      <div className='flex justify-center'>
        <div className='flex'>
          <ProjectIntroduction/>
        </div>
      </div>
      <div className='flex justify-center'>
      </div>
      <About/>
    </div>
  )
}
export default Categories