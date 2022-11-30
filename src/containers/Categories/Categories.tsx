import React from 'react'

const Categories = () => {
  return (
    <div className=''>
      <header className='flex justify-center mt-[1px]'>
        <div className='flex justify-start w-[500px] h-[70px]'>
          <div className='flex items-center'>
            <div className='flex space-x-5 h-[30px]'>
              <div className='w-[110px] border-r'>
                <a href='' className='font-mono font-semibold text-[15px] w-[100px]'>Dream Digger</a>
              </div>
              <div className=''>
                <a href='./categories' className='text-[14px]'>探索</a>
              </div>
              <div>
                <a href=''  className='text-[14px]'>提案</a>
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-end w-[500px] h-[70px]'>
          <div className='flex items-center'>
            <div className='flex space-x-4 mr-[7px]'>
              <div className='w-[50px]'>
                <a href='./login' className='text-[14px]'>登入</a>
              </div>
              <div className='w-[50px]'>
                <a href='./signup' className='text-[14px]'>註冊</a>
              </div>
              <div className='w-[100px]'>
                <a href=''  className='font-bold text-[14px] text-blue-600/100'>Facebook 登入</a>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className='flex justify-center mt-[2px]'>
        <div className='flex justify-start h-[100px]'>
          <div className='flex justify-start'>
            search
          </div>
          <div className=''>
            search
          </div>
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
