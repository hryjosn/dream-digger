import React from 'react'

const About = () => {
  return (
    <div className='flex justify-center bg-[#ffffff] basis-1/5 border-t pt-16 pb-[8rem]'>
        <div className='flex w-[1365px] flex-row justify-around items-center text-[#0050a2] text-[0.875rem]'>
          <div className='flex flex-col'>
            <h3 className='text-[14px] font-medium text-black'>Social media</h3>
            <a>YouTube</a>
            <a>Facebook</a>
            <a>Instagram</a>
            <a>Twitter</a>
          </div>
          <div className='flex flex-col'>
            <h3 className='text-[14px] font-medium text-black'>Resources</h3>
            <a>常見問答</a>
            <a>使用條款</a>
            <a>隱私權政策</a>
          </div>
          <div className='flex flex-col'>
            <h3 className='text-[14px] font-medium text-black'>About</h3>
            <a>關於我們</a>
            <a className='mt-[10px] text-[#525252] text-[0.75rem]'>©Henry股份有限公司</a>
          </div>
        </div>
      </div>
  )
}

export default About;
