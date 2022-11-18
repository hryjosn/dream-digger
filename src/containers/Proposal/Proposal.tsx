import React from 'react';
import Header from '../../components/Header/Header';
import About from '../../components/About/About';
import AnnouncementIcon from '@mui/icons-material/Announcement';

const Proposal = () => {
  return (
    <div className='flex flex-col h-[108vh] items-center'>
        <Header/>
        <div className='w-full flex flex-col justify-center items-center mb-[4rem]'>
            <h2 className='text-[1.5rem] font-bold mt-[2rem] mb-[2rem]'>選擇題案類別</h2>
            <div className='flex w-[1024px] mb-[2rem] flex-wrap text-[14px]'>
                <div className='w-[33%] pl-[1rem] pr-[1rem]'>
                    <a className='cursor-pointer' href='http://localhost:3000/proposal/crowdfunding'>
                        <div className='flex flex-col justify-center items-center w-[309px] h-[132px] border rounded border-[#229f2a]'>
                            <div className='text-[1.25rem] text-[#229f2a]'>群眾集資</div>
                            <p className='text-[0.875rem] mt-[1rem]'>在一定期限內募集完成計畫所需的資金</p>
                        </div>
                    </a>
                    <p className='mt-[1rem]'>
                        在一定期限內募集完成計畫所需的資金，來一場為夢想狂奔的全力衝刺吧！
                    </p>
                    <p className='mt-[1rem]'>
                        適合一次需要一筆資金來完成創作成果的提案人，不論你是想要開發產品、出版專輯、拍攝電影、舉辦活動、開立小店或是有任何充滿熱情的理想，來到嘖嘖設定好你所需要的資金目標、集資時程和夢想的實踐計畫，就有機會得到大家的資金支持，助你實現你的夢想。
                    </p>
                </div>
                <div className='w-[33%] pl-[1rem] pr-[1rem]'>
                    <a className='cursor-pointer' href='http://localhost:3000/proposal/presale'>
                        <div className='flex flex-col justify-center items-center w-[309px] h-[132px] border rounded border-[#3366a9] '>
                            <div className='text-[1.25rem] text-[#3366a9]'>預購式專案</div>
                            <p className='text-[0.875rem] mt-[1rem]'>讓你的新產品在上市前進行即刻預購</p>
                        </div>
                    </a>
                    <p className='mt-[1rem]'>
                        透過嘖嘖預購，來跟大家介紹你的新產品或新創作。
                    </p>
                    <p className='mt-[1rem]'>
                        把你最新奇好玩、改變生活的發明創作，跟最支持創意、美好的嘖嘖會員們分享。適合已經完成新產品開發製作，在產品正式上市前，希望透過嘖嘖集客預售的提案人，嘖嘖上有全台灣最支持創意與美好生活的一群人，好點子在嘖嘖上一定不會寂寞。
                    </p>
                </div>
                <div className='w-[33%] pl-[1rem] pr-[1rem]'>
                    <a className='cursor-pointer' href='http://localhost:3000/proposal/subscription'>
                        <div className='flex flex-col justify-center items-center w-[309px] h-[132px] border rounded border-[#a06389] '>
                            <div className='text-[1.25rem] text-[#a06389]'>訂閱式專案</div>
                            <p className='text-[0.875rem] mt-[1rem]'>用持續性的計畫累積每月可獲得的贊助</p>
                        </div>
                    </a>
                    <p className='mt-[1rem]'>
                        用訂閱式專案來支持創意人持續性的創作，招集粉絲們一起加入夢想的馬拉松！
                    </p>
                    <p className='mt-[1rem]'>
                        支持者可以透過每個月小額付費的方式來訂閱自己喜歡的計畫，讓計畫團隊能得到長期的穩定收入，適合以內容為主要產出的創作人，例如影像工作者、音樂人、畫家、作家、遊戲開發者等等，以及長期致力於公益、教育、知識傳播、技藝傳承等等社會回饋的辛苦團隊。
                    </p>
                </div>
                <div className='w-full flex justify-center items-center mt-[4.5rem] mb-[7rem]'>
                    <div className='flex justify-center w-[498px] border-t pl-[1rem] pr-[1rem] pt-[2rem]'>
                        <p>
                            <AnnouncementIcon color="action"/>
                            不確定怎麼準備專案？現在就加入
                            <a className='text-[#0050a2] cursor-pointer'>嘖嘖提案人前哨站</a>
                            與大家切磋討論
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <About/>
    </div>
  )
}

export default Proposal;