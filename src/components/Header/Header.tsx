import React, {useEffect , useState } from 'react'

const Header = (props: JSX.IntrinsicAttributes & React.ClassAttributes<HTMLInputElement> & React.InputHTMLAttributes<HTMLInputElement>) => {

  const [login, setlogin] = useState<{item: string | null }>({
    item: '',
  });
  
  useEffect(() => {
    const item = localStorage.getItem('token')
    setlogin({item})
  },[])

  return (

    <header className='flex justify-center'>
      <div className='flex items-center h-[70px] w-[500px] space-x-6'>
        <a href='./' className='flex items-center text-[14px] font-bold w-[113px] h-[28px] border-r-[1px]'>
          Dream Digger
        </a>
        <div className='flex space-x-6'>
          <a href='./categories'
            className='text-[14px]'>
              探索
          </a>
          <a href='./proposal'
              className='text-[14px]'>
              提案
          </a>
        </div>
      </div>
      {login ? (
        <div className='flex items-center h-[70px] w-[500px] justify-end space-x-1'>
          <a>
            <input type='image' className='h-[11px] w-[15px] mr-[25px]' src='/images/message.jpg'/>
          </a>
          <button className='flex'>
            <input type='image' className='h-[30px] w-[30px] border rounded-[12px]' src='/images/emptyTest.png'/>
            <input type='image' className='h-[7px] w-[9px] self-center m-[12px]' src='/images/arrowDown.png'/>
          </button>
        </div>
      ) : (
        <div className='flex items-center h-[70px] w-[500px] justify-end space-x-1'>
          <a href='./login'
              className='flex items-center justify-center w-[60px] h-[30px] bg-[#F0F0F0] text-[14px]'>
              登入
          </a>
          <a href='./signup'
              className='flex items-center justify-center w-[60px] h-[30px] bg-[#F0F0F0] text-[14px]'>
              註冊
          </a>
          <a href='./login'
              className='flex items-center justify-center w-[125px] h-[30px]  bg-[#F0F0F0] text-[14px] font-bold antialiased text-[#0080FF]'>
              Facebook 登入
          </a>
        </div>
      )}
    </header>
  )
}
export default Header
