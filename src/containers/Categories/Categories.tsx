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
                <a href='' className='text-[14px]'>提案</a>
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
      <div className='flex justify-center'>
        <div className='w-[500px] flex'>
          <div className=''>
            專案性質
          </div>
          <div>
            主題分類
          </div>
        </div>
        <div className='w-[500px] flex justify-end'>
          <div className=''>
            搜尋計畫
          </div>
          <div>
            排序
          </div>
        </div>
      </div>
      <div className='flex justify-center'>
        <div className='w-[1000px] h-[1000px]'>
          categories
        </div>  
      </div>
      <div>
        <footer className='flex justify-center  border-y-[1px]'>
        <div className='w-[1000px] h-[250px]'>
          <div className='flex'>
            <div className='w-[250px]'>
              <p className='text-2xl font-mono mt-[75px] font-bold'>Dream Digger</p>
            </div>
            <div className='w-[250px] text-[14px]'>
              <div className='justfiy-start ml-[50px] mt-[75px] flex flex-col space-y-3'>
                <p className='font-semibold'>幫助</p>
                <a href='./question' className='hover:text-blue-700 text-gray-600'>常見問題</a>
                <a href='./TermsOfUse' className='hover:text-blue-700 text-gray-600'>使用條款</a>
                <a href='./privacy' className='hover:text-blue-800 text-gray-600'>隱私權政策</a>
              </div>
            </div>
            <div className='w-[230px] text-[14px]'>
              <div className='ustfiy-start ml-[20px] mt-[75px] flex flex-col space-y-3'>
                <p className='font-semibold'>關於</p>
                <a href='./about' className='hover:text-blue-800 text-gray-600'>關於我們</a>
                <a href='./trademark' className='hover:text-blue-800 text-gray-600'>商標資源</a>
              </div>
            </div>
            <div className='flex'>
              <div>
                <a href='./facebook'></a>
              </div>
            </div>
          </div>
        </div>
        </footer>
        <div className='flex justify-center'>
          <div className='w-[1000px] h-[140px] flex justify-center'>
            <p className='font-serif font-light text-[13px] text-zinc-500 mt-[40px]'>@Dream Digger 酷酷工作室</p>
          </div>
        </div>
      </div>
    </div>   
  )
}
export default Categories;
