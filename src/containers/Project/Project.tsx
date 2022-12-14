import React from 'react'
const  Project = () => {
  return (
    <div>
      <header className='flex justify-center mt-[1px]'>
        <div className='flex justify-start w-[500px] h-[70px]'>
          <div className='flex items-center'>
            <div className='flex space-x-5 h-[30px]'>
              <div className='w-[110px] border-r'>
                <a 
                  href=''
                  className='font-mono font-semibold text-[15px] w-[100px]'>
                    Dream Digger
                </a>
              </div>
              <div className=''>
                <a 
                  href='./categories' 
                  className='text-[14px]'>
                    探索
                </a>
              </div>
              <div>
                <a 
                  href='' 
                  className='text-[14px]'>
                    提案
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-end w-[500px] h-[70px]'>
          <div className='flex items-center'>
            <div className='flex space-x-4 mr-[7px]'>
              <div className='w-[50px]'>
                <a 
                  href='./login' 
                  className='text-[14px]'>
                    登入
                </a>
              </div>
              <div className='w-[50px]'>
                <a 
                  href='./signup' 
                  className='text-[14px]'>
                    註冊
                </a>
              </div>
              <div className='w-[100px]'>
                <a 
                  href='' 
                  className='font-bold text-[14px] text-blue-600/100'>
                    Facebook 登入
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className='flex justify-center'>
        <div className='w-[700px] h-[550px] mt-[30px]'>
            <div className='h-[300px] w-[690px] border'>
                <p>ProjectPic</p>
            </div>
        </div>
        <div className='w-[300px] mt-[30px]'>
            <div className='ml-[20px]'>
                <div className='flex text-[14px] space-x-2'>
                    <p>國家</p>
                    <p>\</p>
                    <a 
                        href='' 
                        className='underline'>
                            性質
                    </a>
                    <p>\</p>
                    <a 
                        href='' 
                        className='underline'>
                            類別
                    </a>
                </div>
            </div>
            <div className='ml-[20px] mt-[9px] w-[260px]'>
                <p className='text-[20px] break-all leading-relaxed'>專案專案專案專案專案專案專案專案專案專案專案專案專案專案專案專案專案專案專案專案專案專案專案專案專案專案專案專案專案</p>
            </div>
            <div className='ml-[20px]'>
                <div className='flex space-x-2'>
                    <p className='text-[14px]'>提案人</p>
                    <a href='' className='text-[14px] text-blue-800 font-bold antialiased'>Happer</a>
                    <a href='projectOwnerWeb'>icon</a>
                    <a href='projectOwnerYouTube'>icon</a>
                    <a href='projectOwnerFacebook'>icon</a>
                    <a href='projectOwnerLINE'>icon</a>
                </div>
            </div>
            <div className='ml-[20px] mt-[15px]'>
              <p className='break-all text-[13px] leading-5'>推薦推薦推薦推薦推薦推薦推薦推薦推薦推薦推薦推薦推薦推薦推薦推薦推薦推薦推薦推薦推薦推薦推薦推薦推薦推薦推薦</p>
            </div>
            <div className='flex h-[100px] ml-[20px] border-b'>
              <div className='w-[70px] flex justify-center'>
                <p className='flex items-center text-[15px]'>100%</p>
              </div>
              <div className='flex flex-col justify-center ml-[10px]'>
                <p className='text-[25px] font-mono subpixel-antialiased font-bold'>NT$</p>
                <p className='text-[12px]'>目標 NT$</p>
              </div>
            </div>
            <div className='ml-[20px] mt-[20px]'>
              <div className='flex space-x-3 text-[12px]'>
                <p>贊助人數</p>
                <p>69</p>
              </div>
              <div className='flex space-x-3 text-[12px] mt-[5px]'>
                <p>剩餘天數</p>
                <p>69 天</p>
              </div>
              <div className='flex space-x-3 text-[12px] mt-[5px]'>
                <p>時程</p>
                <p>date</p>
              </div>
            </div>
            <div className='flex ml-[20px] mt-[20px] text-[12px] space-x-3'>
              <a href='' className='flex justify-evenly border border-stone-400 w-[150px] h-[24px] text-stone-400 font-bold'>傳送訊息</a>
              <a href='' className='flex justify-evenly border border-blue-600 w-[100px] h-[24px] text-blue-600 font-bold'>臉書</a>
              <a href='' className='flex justify-evenly border border-sky-300 w-[100px] h-[24px] text-sky-300 font-bold'>推特</a>
              <a href='' className='flex justify-evenly border border-green-400 w-[100px] h-[24px] text-green-400 font-bold'>Line</a>
            </div>
        </div>
      </div>
      <div className='h-[78px] border sticky top-0'>
        <div className='flex justify-center'>
            <div className='w-[700px]'>
                <div className='mt-[21px] h-[78px]'>
                    <a href='' className='text-[14px]'>專案內容</a>
                    <a href='' className='text-[14px] ml-[30px] '>留言</a>
                    <a href='' className='text-[14px] ml-[55px]'>常見問題</a>
                </div>
            </div>
            <div className='flex justify-center items-center w-[300px] h-[78px]'>
              <a href='' className='flex justify-center items-center text-green-600 w-[290px] h-[45px] border rounded border-green-600 border-2'>贊助專案</a>
            </div>
        </div>
      </div>
      <div className='sticky top-[80px]'>
        <div className='flex justify-center'>
            <div className='w-[1000px]'>
                <div className='border-x border-b h-[35px] w-[690px] space-x-6'>
                  <a href='' className='ml-[10px]'>icon</a>
                  <a href='' className='text-[13px]'>風險與挑戰</a>
                  <a href='' className='text-[13px]'>退換貨規則</a>
                  <a href='' className='text-[13px]'>客服聯絡方式</a>
                  <a href='' className='text-[13px]'>營業登記</a>
                </div>
            </div>
        </div>
      </div>
      <div className='h-[1000px]'>

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
                <a 
                  href='./question' 
                  className='hover:text-blue-700 text-gray-600'>
                    常見問題
                </a>
                <a 
                  href='./TermsOfUse' 
                  className='hover:text-blue-700 text-gray-600'>
                    使用條款
                </a>
                <a 
                  href='./privacy' 
                  className='hover:text-blue-800 text-gray-600'>
                    隱私權政策
                </a>
              </div>
            </div>
            <div className='w-[200px] text-[14px]'>
              <div className='ml-[20px] mt-[75px] flex flex-col space-y-3'>
                <p className='font-semibold'>關於</p>
                <a 
                  href='./about' 
                  className='hover:text-blue-800 text-gray-600'>
                    關於我們
                </a>
                <a 
                  href='./trademark' 
                  className='hover:text-blue-800 text-gray-600'>
                    商標資源
                </a>
              </div>
            </div>
            <div className='flex'>
              <div className='mt-[75px] flex space-x-3'>
                <a 
                  href='./facebook' 
                  className='hover:text-blue-700'>
                    icon
                </a>
                <a 
                  href='./instagram' 
                  className='hover:text-red-600'>
                    icon
                </a>
                <a 
                  href='./youtube' 
                  className='hover:text-red-600'>
                    icon
                </a>
                <a 
                  href='./line' 
                  className='hover:text-lime-500'>
                    icon
                </a>
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

export default Project;
