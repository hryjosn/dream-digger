import React from 'react'

const About = () => {
  return (
    <div>
        <footer className='flex justify-center border-y-[0.5px] h-[255px]'>
            <div className='flex mt-[80px] space-x-[150px]'>
              <div className='flex items-center h-[90px]'>
                <p className='font-bold'>DREAM DIGGER</p>
              </div>
              <div className='flex flex-col text-[14px] space-y-[10px]'>
                <p className=''/>幫助
                <a href=''
                   className='text-[#5B5B5B] hover:text-[#000093]'>
                  常見問題
                </a>
                <a href=''
                   className='text-[#5B5B5B] hover:text-[#000093]'>
                  使用條款
                </a>
                <a href=''
                   className='text-[#5B5B5B] hover:text-[#000093]'>
                  隱私權政策
                </a>
              </div>
              <div className='flex flex-col text-[14px] space-y-[10px]'>
                <p className=''/>關於
                <a href=''
                   className='text-[#5B5B5B] hover:text-[#000093]'>
                  關於我們
                </a>
                <a href=''
                   className='text-[#5B5B5B] hover:text-[#000093]'>
                  商標資源
                </a>
              </div>
              <div className='flex flex-col text-[14px] space-y-[10px]'>
                <p className=''/>社群
                <a href=''
                   className='text-[#5B5B5B] hover:text-[#FF0000]'>
                  YouTube
                </a>
                <a href=''
                   className='text-[#5B5B5B] hover:text-[#00DB00]'>
                  LINE
                </a>
                <a href=''
                   className='text-[#5B5B5B] hover:text-[#2828FF]'>
                  Facebook
                </a>
                <a href=''
                   className='text-[#5B5B5B] hover:text-[#46A3FF]'>
                  Twitter
                </a>
              </div>
            </div>
        </footer>
        <div className='flex justify-center h-[135px]'>
            <p className='mt-[35px] text-[13px] text-[#5B5B5B]'>@史萊姆工作室</p>
        </div>
    </div>
   
  )
}
export default About