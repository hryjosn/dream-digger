import React from 'react'
import Header from '../../components/Header/Header';
import About from '../../components/About/About';

const Home = () => {
  return (
    <div className='flex flex-col h-max'>
        <Header/>
        <div className='flex h-[108vh] items-center justify-center'>
            Home Page Pending...
        </div>
        <About/>
    </div>
  )
}

export default Home;