import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Header from '../../../components/Header/Header';
import About from '../../../components/About/About';
import { useAppSelector, useAppDispatch } from '../../../store/configureStore';
import { getYear, getMonth, getDay, getHour, getMinute } from '../../../features/proposal/proposalSlice';

const ProposalType = () => {
  const router = useRouter();
  const { proposalType } = router.query;
  const startTimeState = useAppSelector(state => state.proposalData.startTime);
  const dispatch = useAppDispatch();

  const yearChangeHandler = (value: string) => {
    dispatch(getYear(value));
  };
  const monthChangeHandler = (value: string) => {
    dispatch(getMonth(value));
  };
  const dayChangeHandler = (value: string) => {
    dispatch(getDay(value));
  };
  const hourChangeHandler = (value: string) => {
    dispatch(getHour(value));
  };
  const minuteChangeHandler = (value: string) => {
    dispatch(getMinute(value));
  };
  console.log(startTimeState)
  return (
    <div className='flex flex-col items-center'>
      <Header/>
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
        <div className='flex flex-row items-center justify-left mt-[5px]'>
          <select 
            className='h-[38px] border rounded font-medium'
            value={startTimeState.year}
            onChange={e => yearChangeHandler(e.target.value)}
          >
            <option>{new Date().getFullYear()}</option>
            <option>{new Date().getFullYear() + 1}</option>
          </select>
          <div className='ml-[7px] mr-[7px] font-bold'>-</div>
          <select 
            className='h-[36px] border rounded font-medium'
            value={startTimeState.month}
            onChange={e => monthChangeHandler(e.target.value)}
          >
            <option>一月</option>
            <option>二月</option>
            <option>三月</option>
            <option>四月</option>
            <option>五月</option>
            <option>六月</option>
            <option>七月</option>
            <option>八月</option>
            <option>九月</option>
            <option>十月</option>
            <option>十一月</option>
            <option>十二月</option>
          </select>
          <div className='ml-[7px] mr-[7px] font-bold'>-</div>
          <select 
            className='h-[36px] border rounded font-medium'
            value={startTimeState.day}
            onChange={e => dayChangeHandler(e.target.value)}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
            <option>11</option>
            <option>12</option>
            <option>13</option>
            <option>14</option>
            <option>15</option>
            <option>16</option>
            <option>17</option>
            <option>18</option>
            <option>19</option>
            <option>20</option>
            <option>21</option>
            <option>22</option>
            <option>23</option>
            <option>24</option>
            <option>25</option>
            <option>26</option>
            <option>27</option>
            <option>28</option>
            <option>29</option>
            <option>30</option>
            <option>31</option>
          </select>
          <div className='ml-[7px] mr-[7px] font-bold w-[15px]'>-</div>
          <select 
            className='h-[36px] border rounded font-medium'
            value={startTimeState.hour}
            onChange={e => hourChangeHandler(e.target.value)}
          >
            <option>00</option>
            <option>01</option>
            <option>02</option>
            <option>03</option>
            <option>04</option>
            <option>05</option>
            <option>06</option>
            <option>07</option>
            <option>08</option>
            <option>09</option>
            <option>10</option>
            <option>11</option>
            <option>12</option>
            <option>13</option>
            <option>14</option>
            <option>15</option>
            <option>16</option>
            <option>17</option>
            <option>18</option>
            <option>19</option>
            <option>29</option>
            <option>21</option>
            <option>22</option>
            <option>23</option>
          </select>
          <div className='font-bold w-[15px]'>：</div>
          <select 
            className='h-[36px] border rounded font-medium'
            value={startTimeState.minute}
            onChange={e => minuteChangeHandler(e.target.value)}
          >
            <option>00</option>
            <option>01</option>
            <option>02</option>
            <option>03</option>
            <option>04</option>
            <option>05</option>
            <option>06</option>
            <option>07</option>
            <option>08</option>
            <option>09</option>
            <option>10</option>
            <option>11</option>
            <option>12</option>
            <option>13</option>
            <option>14</option>
            <option>15</option>
            <option>16</option>
            <option>17</option>
            <option>18</option>
            <option>19</option>
            <option>20</option>
            <option>21</option>
            <option>22</option>
            <option>23</option>
            <option>24</option>
            <option>25</option>
            <option>26</option>
            <option>27</option>
            <option>28</option>
            <option>29</option>
            <option>30</option>
            <option>31</option>
            <option>32</option>
            <option>33</option>
            <option>34</option>
            <option>35</option>
            <option>36</option>
            <option>37</option>
            <option>38</option>
            <option>39</option>
            <option>40</option>
            <option>41</option>
            <option>42</option>
            <option>43</option>
            <option>44</option>
            <option>45</option>
            <option>46</option>
            <option>47</option>
            <option>48</option>
            <option>49</option>
            <option>50</option>
            <option>51</option>
            <option>52</option>
            <option>53</option>
            <option>54</option>
            <option>55</option>
            <option>56</option>
            <option>57</option>
            <option>58</option>
            <option>59</option>
          </select>
        </div>
      </div>
      <About/>
    </div>
  )
}

export default ProposalType;