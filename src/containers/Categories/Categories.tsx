import React from 'react'

const Categories = () => {
  return (
    <div className=''>
      <header className='flex justify-center'>
        <div className='flex items-center w-[1000px] h-[70px] space-x-4'>
          <div className=''>
            <a href='' className='font-semibold font-mono'>Dream Digger</a>
          </div>
          <div>
            <a href='' className='text-[14px]'>探索</a>
          </div>
          <div>
            < a href='' className='text-[14px]'>提案</a>
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
