import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Header from '../../../components/Header/Header';
import About from '../../../components/About/About';
import YearSelector from '../../../components/Proposal/DateSelector/YearSelector';
import MonthSelector from '../../../components/Proposal/DateSelector/MonthSelector';
import DaySelector from '../../../components/Proposal/DateSelector/DaySelector';
import HourSelector from '../../../components/Proposal/DateSelector/HourSelector';
import MinuteSelector from '../../../components/Proposal/DateSelector/MinuteSelector';
import { useAppSelector, useAppDispatch } from '../../../store/configureStore';
import { 
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
} from '../../../features/proposal/proposalSlice';

const ProposalType = () => {
  const router = useRouter();
  const { proposalType } = router.query;
  const startTimeState = useAppSelector(state => state.proposalData.startTime);
  const endTimeState = useAppSelector(state => state.proposalData.endTime);
  const dispatch = useAppDispatch();
  console.log(startTimeState, endTimeState)
  return (
    <div className='flex flex-col items-center'>
      <Header/>
      <div className='flex flex-col items-center'>
        <h2 className='text-2xl mt-[2rem] mb-[2rem]'>{proposalType}</h2>
        <div className='border h-[2411px] w-[768px] p-[2rem]'>
          <label className='font-bold'>真實身分/名稱</label>
          <div className='flex items-center justify-center h-[41.6px] p-[5px] w-fit mt-[5px] rounded bg-[#f4f4f5] font-bold'>
            我的名稱
          </div>
          <p className='mb-[1rem] mt-[0.25rem] text-xs text-neutral-600'>
            提案人必須要用真實姓名註冊會員，嘖嘖不接受匿名或使用他人名義的提案。如提案人非個人，可由團隊代表人先以團隊名稱註冊團隊帳號，再透過
            <a className='cursor-pointer text-[#3366a9]'>團隊設定</a>
            邀請團隊成員各自的嘖嘖會員帳號加入協作。
          </p>
          <label className='font-bold'>電子信箱</label>
          <div className='font-bold flex h-[41.6px] w-fit p-[5px] mt-[5px] rounded text-ellipsis whitespace-nowrap overflow-hidden bg-[#f4f4f5] items-center justify-center'>
            mail@gmail.com
          </div>
          <p className='mb-[1rem] mt-[0.25rem] text-xs text-neutral-600'>
            請確認你的信箱位址沒有錯誤，不然嘖嘖會聯絡不到你。如果有誤請到你的
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
          <p className='mb-[1rem] mt-[0.25rem] text-xs text-neutral-600'>
            告訴我們你希望什麼時候開始你的計畫，我們將會為你安排審核順序。至少需要約十個工作天審核你的提案。
          </p>
          <label className='font-bold'>預計結束時間</label>
          <div className='flex flex-row items-center justify-left mt-[5px]'>
            <YearSelector 
              value={endTimeState.year}
              onChange={e => dispatch(getEndYear(e.target.value))}
            />
            <div className='ml-[7px] mr-[7px] font-bold'>-</div>
            <MonthSelector 
              value={endTimeState.month}
              onChange={e => dispatch(getEndMonth(e.target.value))}
            />
            <div className='ml-[7px] mr-[7px] font-bold'>-</div>
            <DaySelector 
              value={endTimeState.day}
              onChange={e => dispatch(getEndDay(e.target.value))}
            />
            <div className='ml-[7px] mr-[7px] font-bold w-[15px]'>-</div>
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
          <input 
            className='h-[34px] w-[107px] border'
            type='text'
          />
        </div>
      </div>
      <About/>
    </div>
  )
}

export default ProposalType;