import React from 'react'

const Categories = () => {
  return (
    <div className=''>
      <header className='flex justify-evenly'>
        <div className='flex w-[1000px] h-[80px]'>
          <div className='flex w-1/2 justify-start space-x-5'>
            <a href='' className=''>Dream digger</a>
            <a href='' className=''>探索</a>
            <a href='' className=''>提案</a>
          </div>
          <div className='flex w-1/2 justify-end space-x-5 mr-6'>
            <a href='' className=''>登入</a>
            <a href='' className=''>註冊</a>
            <a href='' className=''>facebook登入</a>
          </div>
        </div>
      </header>
      <div className='flex justify-center'>
        <div className='w-[1000px]'>
          search
        </div>
      </div>
      <div className='flex justify-center'>
        <div className='w-[1000px]'>
          categories
        </div>  
      </div>
      <footer className='flex justify-center'>
        <div className='w-[1000px]'>
          about
        </div>
      </footer>
    </div>   
  )
}
export default Categories;
