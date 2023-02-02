import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Header from '../../../components/Header/Header';
import About from '../../../components/About/About';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import Stack from '@mui/material/Stack';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import YearSelector from '../../../components/Proposal/DateSelector/YearSelector';
import MonthSelector from '../../../components/Proposal/DateSelector/MonthSelector';
import CategorySelector from '../../../components/Proposal/CategorySelector/CategorySelector';
import { useAppSelector, useAppDispatch } from '../../../store/configureStore';
import {
  getProposalData,
} from '../../../slice/proposal/proposalSlice';
import moment from 'moment';

const ProposalType = () => {
  const router = useRouter();
  const [yearOfImplementTime, setYearOfImplementTime] = useState<string>(new Date().getFullYear().toString());
  const [monthOfImplementTime, setMonthOfImplementTime] = useState<string>('一月');
  const { proposalType } = router.query;
  const proposalState = useAppSelector(state => state.proposalData.params);
  const dispatch = useAppDispatch();

  useEffect(() => {
    switch(proposalType){
      case 'crowdfunding': {
        dispatch(getProposalData({params: {...proposalState, proposal_type: '群眾集資'}}));
        break;
      }
      case 'presale': {
        dispatch(getProposalData({params: {...proposalState, proposal_type: '預購式專案'}}));
        break;
      }
      case 'subscription': {
        dispatch(getProposalData({params: {...proposalState, proposal_type: '訂閱式專案'}}));
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
            {proposalState.proposal_type}
          </span>
          <span className='ml-[5px]'>
            提案
          </span>
        </h2>
        <div className='flex flex-col border h-[2411px] w-[768px] p-[2rem]'>
          <label className='font-bold'>真實身分/名稱</label>
          <div className='flex items-center justify-center h-[41.6px] p-[5px] w-fit mt-[5px] rounded bg-[#f4f4f5] font-bold'>
            {proposalState.name}
          </div>
          <p className='mb-[1rem] mt-[0.25rem] text-xs text-neutral-600'>
            提案人必須要用真實姓名註冊會員，不接受匿名或使用他人名義的提案。如提案人非個人，可由團隊代表人先以團隊名稱註冊團隊帳號，再透過
            <a className='cursor-pointer text-[#3366a9]'>團隊設定</a>
            邀請團隊成員各自的會員帳號加入協作。
          </p>
          <label className='font-bold'>電子信箱</label>
          <div className='font-bold flex h-[41.6px] w-fit p-[5px] mt-[5px] rounded text-ellipsis whitespace-nowrap overflow-hidden bg-[#f4f4f5] items-center justify-center'>
            {proposalState.email}
          </div>
          <p className='mb-[1rem] mt-[0.25rem] text-xs text-neutral-600'>
            請確認你的信箱位址沒有錯誤，不然我們會聯絡不到你。如果有誤請到你的
            <a className='cursor-pointer text-[#3366a9]'>會員頁面</a>
            修改。
          </p>
          <label className='font-bold'>預計開始時間</label>
          <div className='flex flex-row items-center justify-left mt-[5px] mb-[1rem]'>
            <LocalizationProvider dateAdapter={AdapterMoment}>
              <Stack spacing={3} sx={{ width: 300 }}>
                <DateTimePicker
                  renderInput={(params) => <TextField {...params} />}
                  value={proposalState.start_time}
                  onChange={(value) => {
                    dispatch(getProposalData({params: {...proposalState, start_time: moment(value).format('YYYY-MM-DDTHH:mm')}}));
                  }}
                />
              </Stack>
            </LocalizationProvider>
          </div>
          <p className='mb-[1rem] text-xs text-neutral-600'>
            告訴我們你希望什麼時候開始你的計畫，我們將會為你安排審核順序。至少需要約十個工作天審核你的提案。
          </p>
          {proposalState.proposal_type === '訂閱式專案' ? 
            null : 
            (<div>
              <label className='font-bold'>預計結束時間</label>
              <div className='flex flex-row items-center justify-left mt-[5px] mb-[11px]'>
                <LocalizationProvider dateAdapter={AdapterMoment}>
                  <Stack spacing={3}  sx={{ width: 300 }}>
                    <DateTimePicker
                      renderInput={(params) => <TextField {...params} />}
                      value={proposalState.end_time}
                      onChange={(value) => {
                        dispatch(getProposalData({params: {...proposalState, end_time: moment(value).format('YYYY-MM-DDTHH:mm')}}));
                      }}
                    />
                  </Stack>
                </LocalizationProvider>
              </div>
              <p className='mb-[1rem] mt-[0.25rem] text-xs text-neutral-600'>
                計畫時間建議為期在 60 天內。
              </p>
              <label className='font-bold'>計畫目標</label>
              <div className='flex items-center'>
                <input 
                  className='h-[34px] w-[110px] border mt-[6px] pb-[3px] pl-[0.5rem]'
                  type='text'
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    dispatch(getProposalData({params: {...proposalState, target_amount: e.target.value}}));
                  }}
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
          <CategorySelector
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
              dispatch(getProposalData({params: {...proposalState, category: e.target.value}}));
            }}
          />
          <label className='font-bold mt-[1rem] mb-[5px]'>計畫名稱</label>
          <input 
            className='border h-[34px] pb-[3px] pt-[3px] pl-[0.5rem] mb-[0.5rem]'
            type='text'
            value={proposalState.plan_name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              dispatch(getProposalData({params: {...proposalState, plan_name: e.target.value}}))
            }}
          />
          <label className='font-bold mt-[1rem] mb-[5px]'>計畫簡介</label>
          <input 
            className='border h-[34px] pb-[3px] pt-[3px] pl-[0.5rem] mb-[0.5rem]'
            type='text'
            value={proposalState.plan_summary}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              dispatch(getProposalData({params: {...proposalState, plan_summary: e.target.value}}))
            }}
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
            value={proposalState.plan_introduction}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
              dispatch(getProposalData({params: {...proposalState, plan_introduction: e.target.value}}))
            }}
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
              value={proposalState.the_first_of_reward.ammount}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                dispatch(getProposalData({params: {...proposalState, the_first_of_reward: {...proposalState.the_first_of_reward, ammount: e.target.value}}}))
              }}
            />
            {proposalState.proposal_type === '訂閱式專案' ?
              <span className='ml-[5px]'>/ 月</span> : null
            }
          </div>
          <label className='font-bold mb-[5px]'>回饋選項內容說明（一）</label>
          <textarea
            className='border px-[0.5rem] py-1 mb-2 overflow-visible'
            value={proposalState.the_first_of_reward.introduction}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
              dispatch(getProposalData({params: {...proposalState, the_first_of_reward: {...proposalState.the_first_of_reward, introduction: e.target.value}}}))
            }}
          />
          <p className='mt-2 text-xs text-neutral-600'>
            僅供審核，之後可增加、刪減、或修改。
          </p>
          {proposalState.proposal_type === '訂閱式專案' ?
            null :
            <div className='mt-[1rem]'>
              <label className='font-bold mb-[5px]'>回饋預計實現時間（一）</label>
              <div className='flex flex-row items-center mb-[1rem]'>
                <LocalizationProvider dateAdapter={AdapterMoment}>
                    <Stack spacing={3}  sx={{ width: 300 }}>
                      <DateTimePicker
                        inputFormat='YYYY-MM'
                        views={['year', 'month']}
                        renderInput={(params) => <TextField {...params} />}
                        value={proposalState.the_first_of_reward.implementTime}
                        onChange={(value) => {
                          dispatch(getProposalData({params: {...proposalState, the_first_of_reward: {...proposalState.the_first_of_reward, implementTime: moment(value).format('YYYY-MM')}}}))
                        }}
                      />
                    </Stack>
                  </LocalizationProvider>
              </div>
            </div>
          }
          <label className='font-bold mt-[1rem] mb-[5px]'>回饋選項金額（二）</label>
          <div>
            <input 
              className='border h-[34px] w-[209px] pb-[3px] pt-[3px] pl-[0.5rem] mb-[0.5rem]'
              type='text'
              value={proposalState.the_second_of_reward.ammount}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                dispatch(getProposalData({params: {...proposalState, the_second_of_reward: {...proposalState.the_second_of_reward, ammount: e.target.value}}}))
              }}
            />
            {proposalState.proposal_type === '訂閱式專案' ?
              <span className='ml-[5px]'>/ 月</span> : null
            }
          </div>
          <label className='font-bold mb-[5px]'>回饋選項內容說明（二）</label>
          <textarea
            className='border px-[0.5rem] py-1 mb-2 overflow-visible'
            value={proposalState.the_second_of_reward.introduction}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
              dispatch(getProposalData({params: {...proposalState, the_second_of_reward: {...proposalState.the_second_of_reward, introduction: e.target.value}}}))
            }}
          />
          <p className='mt-2 text-xs text-neutral-600'>
            僅供審核，之後可增加、刪減、或修改。
          </p>
          {proposalState.proposal_type === '訂閱式專案' ?
            null :
            <div className='mt-[1rem]'>
              <label className='font-bold mb-[5px]'>回饋預計實現時間（二）</label>
              <div className='flex flex-row items-center mb-[1rem]'>
                <LocalizationProvider dateAdapter={AdapterMoment}>
                  <Stack spacing={3}  sx={{ width: 300 }}>
                    <DateTimePicker
                      inputFormat='YYYY-MM'
                      views={['year', 'month']}
                      renderInput={(params) => <TextField {...params} />}
                      value={proposalState.the_second_of_reward.implementTime}
                      onChange={(value) => {
                        dispatch(getProposalData({params: {...proposalState, the_second_of_reward: {...proposalState.the_second_of_reward, implementTime: moment(value).format('YYYY-MM')}}}))
                      }}
                    />
                  </Stack>
                </LocalizationProvider>
              </div>
            </div>
          }
          <div className='border-t my-8'/>
          <label className='font-bold mb-[5px]'>相關網頁</label>
          <input 
            className='border h-[34px] pb-[3px] pt-[3px] pl-[0.5rem] mb-[0.5rem]'
            type='text'
            value={proposalState.web_link}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              dispatch(getProposalData({params: {...proposalState, web_link: e.target.value}}))
            }}
          />
          <p className='mt-2 text-xs text-[#c45059] mb-4'>
            請務必提供這個項目，若無法認證您計畫的真實性、可行性等等項目，計畫就會無法上架。
          </p>
          <label className='font-bold mb-[5px]'>影片網址</label>
          <input 
            className='border h-[34px] pb-[3px] pt-[3px] pl-[0.5rem] mb-[0.5rem]'
            type='text'
            value={proposalState.video_link}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              dispatch(getProposalData({params: {...proposalState, video_link: e.target.value}}))
            }}
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
            <input
              type='checkbox'
              className='mr-2'
              defaultChecked={proposalState.terms_accepted}
              onChange={() => {
                dispatch(getProposalData({params: {...proposalState, terms_accepted: !proposalState.terms_accepted}}));
              }}
            />
            同意提案契約書
          </label>
          <label>
            <input
              type='checkbox'
              className='mr-2'
              defaultChecked={proposalState.terms_acknowledged}
              onChange={() => {
                dispatch(getProposalData({params: {...proposalState, terms_acknowledged: !proposalState.terms_acknowledged}}));
              }}
            />
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
            className='h-[42px] w-[114px] self-start text-[#229f2a] rounded border border-[#229f2a] mb-2 px-2 py-1 cursor-pointer'
            type='button'
            value='確定提案'
            onClick={() => {
              console.log(proposalState)
            }}
          />
        </div>
      </div>
      <About/>
    </div>
  )
}

export default ProposalType;