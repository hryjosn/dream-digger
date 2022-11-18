import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Header from '../../../components/Header/Header';
import About from '../../../components/About/About';
import YearSelector from '../../../components/Proposal/DateSelector/YearSelector';
import MonthSelector from '../../../components/Proposal/DateSelector/MonthSelector';
import DaySelector from '../../../components/Proposal/DateSelector/DaySelector';
import HourSelector from '../../../components/Proposal/DateSelector/HourSelector';
import MinuteSelector from '../../../components/Proposal/DateSelector/MinuteSelector';
import CategorySelector from '../../../components/Proposal/CategorySelector/CategorySelector';
import { useAppSelector, useAppDispatch } from '../../../store/configureStore';
import {
  getProposalType,
  setProposalTitle,
  getStartYear, 
  getStartMonth, 
  getStartDay, 
  getStartHour, 
  getStartMinute,
  getEndYear,
  getEndMonth,
  getEndDay,
  getEndHour,
  getEndMinute,
} from '../../../slice/proposal/proposalSlice';

const ProposalType = () => {
  const router = useRouter();
  const { proposalType } = router.query;
  const startTimeState = useAppSelector(state => state.proposalData.params.startTime);
  const endTimeState = useAppSelector(state => state.proposalData.params.endTime);
  const proposalTitleState = useAppSelector(state => state.proposalData.proposalTitle);
  const proposalTypeState = useAppSelector(state => state.proposalData.params.proposalType);
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    switch(proposalType){
      case 'crowdfunding': {
        dispatch(getProposalType('crowdfunding'));
        dispatch(setProposalTitle('群眾集資'));
        break;
      }
      case 'presale': {
        dispatch(getProposalType('presale'));
        dispatch(setProposalTitle('預購式專案'));
        break;
      }
      case 'subscription': {
        dispatch(getProposalType('subscription'));
        dispatch(setProposalTitle('訂閱式專案'));
        break;
      }
    }
  });

  return (
    <div className='flex flex-col items-center'>
      <Header/>
      <div className='flex flex-col items-center mb-16'>
        <h2 className='text-2xl my-[2rem] font-bold'>
          <span className='bg-[#f4f4f5] p-1'>
            {proposalTitleState}
          </span>
          <span className='ml-[5px]'>
            提案
          </span>
        </h2>
        <div className='flex flex-col border h-[2411px] w-[768px] p-[2rem]'>
          <label className='font-bold'>真實身分/名稱</label>
          <div className='flex items-center justify-center h-[41.6px] p-[5px] w-fit mt-[5px] rounded bg-[#f4f4f5] font-bold'>
            我的名稱
          </div>
          <p className='mb-[1rem] mt-[0.25rem] text-xs text-neutral-600'>
            提案人必須要用真實姓名註冊會員，不接受匿名或使用他人名義的提案。如提案人非個人，可由團隊代表人先以團隊名稱註冊團隊帳號，再透過
            <a className='cursor-pointer text-[#3366a9]'>團隊設定</a>
            邀請團隊成員各自的會員帳號加入協作。
          </p>
          <label className='font-bold'>電子信箱</label>
          <div className='font-bold flex h-[41.6px] w-fit p-[5px] mt-[5px] rounded text-ellipsis whitespace-nowrap overflow-hidden bg-[#f4f4f5] items-center justify-center'>
            mail@gmail.com
          </div>
          <p className='mb-[1rem] mt-[0.25rem] text-xs text-neutral-600'>
            請確認你的信箱位址沒有錯誤，不然我們會聯絡不到你。如果有誤請到你的
            <a className='cursor-pointer text-[#3366a9]'>會員頁面</a>
            修改。
          </p>
          <label className='font-bold'>預計開始時間</label>
          <div className='flex flex-row items-center justify-left mt-[5px] mb-[1rem]'>
            <YearSelector 
              value={startTimeState.year}
              onChange={e => dispatch(getStartYear(e.target.value))}
            />
            <div className='ml-[7px] mr-[7px] font-bold'>-</div>
            <MonthSelector 
              value={startTimeState.month}
              onChange={e => dispatch(getStartMonth(e.target.value))}
            />
            <div className='ml-[7px] mr-[7px] font-bold'>-</div>
            <DaySelector 
              value={startTimeState.day}
              onChange={e => dispatch(getStartDay(e.target.value))}
            />
            <div className='ml-[7px] mr-[7px] font-bold w-[15px]'>-</div>
            <HourSelector
              value={startTimeState.hour}
              onChange={e => dispatch(getStartHour(e.target.value))}
            />
            <div className='font-bold w-[15px]'>：</div>
            <MinuteSelector
              value={startTimeState.minute}
              onChange={e => dispatch(getStartMinute(e.target.value))}
            />
          </div>
          <p className='mb-[1rem] text-xs text-neutral-600'>
            告訴我們你希望什麼時候開始你的計畫，我們將會為你安排審核順序。至少需要約十個工作天審核你的提案。
          </p>
          {proposalTypeState === 'subscription' ? 
            null : 
            (<div>
              <label className='font-bold'>預計結束時間</label>
              <div className='flex flex-row items-center justify-left mt-[5px] mb-[11px]'>
                <YearSelector 
                  value={endTimeState.year}
                  onChange={e => dispatch(getEndYear(e.target.value))}
                />
                <div className='mx-[7px] font-bold'>-</div>
                <MonthSelector 
                  value={endTimeState.month}
                  onChange={e => dispatch(getEndMonth(e.target.value))}
                />
                <div className='mx-[7px] font-bold'>-</div>
                <DaySelector 
                  value={endTimeState.day}
                  onChange={e => dispatch(getEndDay(e.target.value))}
                />
                <div className='mx-[7px] font-bold w-[15px]'>-</div>
                <HourSelector
                  value={endTimeState.hour}
                  onChange={e => dispatch(getEndHour(e.target.value))}
                />
                <div className='font-bold w-[15px]'>：</div>
                <MinuteSelector
                  value={endTimeState.minute}
                  onChange={e => dispatch(getEndMinute(e.target.value))}
                />
              </div>
              <p className='mb-[1rem] mt-[0.25rem] text-xs text-neutral-600'>
                計畫時間建議為期在 60 天內。
              </p>
              <label className='font-bold'>計畫目標</label>
              <div className='flex items-center'>
                <input 
                  className='h-[34px] w-[110px] border mt-[6px] pb-[3px] pl-[0.5rem]'
                  type='text'
                />
                <p className='ml-[10px]'>
                  NTD
                </p>
              </div>
              <p className='mb-[1rem] mt-[0.25rem] text-xs text-neutral-600'>
                請根據你計畫的需求，估算你所需要募集的金額。
              </p>
            </div>
            )
          }
          <label className='font-bold'>分類</label>
          <CategorySelector/>
          <label className='font-bold mt-[1rem] mb-[5px]'>計畫名稱</label>
          <input 
            className='border h-[34px] pb-[3px] pt-[3px] pl-[0.5rem] mb-[0.5rem]'
            type='text'
          />
          <label className='font-bold mt-[1rem] mb-[5px]'>計畫簡介</label>
          <input 
            className='border h-[34px] pb-[3px] pt-[3px] pl-[0.5rem] mb-[0.5rem]'
            type='text'
          />
          <p className='mb-[1rem] mt-[0.25rem] text-xs text-neutral-600'>
            用簡短的兩三句話介紹這個計畫。
          </p>
          <label className='font-bold mt-[0.5rem] mb-[5px]'>封面照片</label>
          <input
            className='border w-[364px] pt-1 pb-2.5 px-2 mb-4'
            type='file'
          />
          <label className='font-bold mt-[1rem] mb-[5px]'>計畫說明</label>
          <textarea
            className='border px-[0.5rem] py-1 mb-2 overflow-visible'
          />
          <p className='mt-2 text-xs text-neutral-600'>
            請告訴我們關於你計畫的故事、為什麼大家應該支持你的計畫。（最少 350 字）
          </p>
          <p className='mt-2 mb-4 text-xs text-neutral-600'>
            請注意：我們必須要有足夠的訊息才有辦法審核計畫，如果您所提供的資訊過少，無法認證您計畫的真實性、可行性，計畫就會無法上架。
          </p>
          <div className='border-t my-4'/>
          <label className='font-bold mt-[1rem] mb-[5px]'>回饋選項金額（一）</label>
          <div>
            <input 
              className='border h-[34px] w-[209px] pb-[3px] pt-[3px] pl-[0.5rem] mb-[0.5rem]'
              type='text'
            />
            {proposalTypeState === 'subscription' ?
              <span className='ml-[5px]'>/ 月</span> : null
            }
          </div>
          <label className='font-bold mb-[5px]'>回饋選項內容說明（一）</label>
          <textarea
            className='border px-[0.5rem] py-1 mb-2 overflow-visible'
          />
          <p className='mt-2 text-xs text-neutral-600'>
            僅供審核，之後可增加、刪減、或修改。
          </p>
          {proposalTypeState === 'subscription' ?
            null :
            <div className='mt-[1rem]'>
              <label className='font-bold mb-[5px]'>回饋預計實現時間（一）</label>
              <div className='flex flex-row items-center mb-[1rem]'>
                <YearSelector/>
                <div className='mx-[7px] font-bold'>-</div>
                <MonthSelector/>
              </div>
            </div>
          }
          <label className='font-bold mt-[1rem] mb-[5px]'>回饋選項金額（二）</label>
          <div>
            <input 
            className='border h-[34px] w-[209px] pb-[3px] pt-[3px] pl-[0.5rem] mb-[0.5rem]'
            type='text'
            />
            {proposalTypeState === 'subscription' ?
              <span className='ml-[5px]'>/ 月</span> : null
            }
          </div>
          <label className='font-bold mb-[5px]'>回饋選項內容說明（二）</label>
          <textarea
            className='border px-[0.5rem] py-1 mb-2 overflow-visible'
          />
          <p className='mt-2 text-xs text-neutral-600'>
            僅供審核，之後可增加、刪減、或修改。
          </p>
          {proposalTypeState === 'subscription' ?
            null :
            <div className='mt-[1rem]'>
              <label className='font-bold mb-[5px]'>回饋預計實現時間（二）</label>
              <div className='flex flex-row items-center mb-[1rem]'>
                <YearSelector/>
                <div className='mx-[7px] font-bold'>-</div>
                <MonthSelector/>
              </div>
            </div>
          }
          <div className='border-t my-8'/>
          <label className='font-bold mb-[5px]'>相關網頁</label>
          <input 
            className='border h-[34px] pb-[3px] pt-[3px] pl-[0.5rem] mb-[0.5rem]'
            type='text'
          />
          <p className='mt-2 text-xs text-[#c45059] mb-4'>
            請務必提供這個項目，若無法認證您計畫的真實性、可行性等等項目，計畫就會無法上架。
          </p>
          <label className='font-bold mb-[5px]'>影片網址</label>
          <input 
            className='border h-[34px] pb-[3px] pt-[3px] pl-[0.5rem] mb-[0.5rem]'
            type='text'
          />
          <p className='mt-2 text-xs text-neutral-600 mb-4'>
            附上影片我們才能對計畫有更加的了解。 （請上傳至 
            <a className='cursor-pointer text-[#0050a2]' href='http://www.youtube.com/'>YouTube</a>  
            或是 
            <a className='cursor-pointer text-[#0050a2]' href='http://www.vimeo.com/'>Vimeo</a>
            ）
          </p>
          <label className='font-bold mb-[5px]'>合作條款</label>
          <label>
            <input type='checkbox' className='mr-2'/>
            同意提案契約書
          </label>
          <label>
            <input type='checkbox' className='mr-2'/>
            提案人 (及法定代理人) 均已充分了解且同意合作條款之權利義務
          </label>
          <p className='mt-2 text-xs text-neutral-600 mb-2'>
            請確認你已經閱讀並且
            <a className='cursor-pointer text-[#0050a2]'>
              同意嘖嘖 x 提案人合作條款。
            </a>
          </p>
          <div className='h-[256px] w-[670px] bg-[#f4f4f5] overflow-y-scroll mb-2 px-4'>
            <p className='text-2xl font-bold'>DreamDigger群眾募資專案委託契約書</p>
          </div>
          <input
            className='h-[42px] w-[114px] self-start text-[#229f2a] rounded border border-[#229f2a] mb-2 px-2 py-1'
            type='submit'
            value='確定提案'
          />
        </div>
      </div>
      <About/>
    </div>
  )
}

export default ProposalType;