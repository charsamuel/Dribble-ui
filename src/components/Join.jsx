import React from 'react'

const Join = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
    <div className='mt-14'>
       <button className="text-black text-sm font-bold py-4 px-5 border-2 border-black rounded-full hover:bg-white">
          Browse more inspirations
        </button>
    </div>

     <div className='mt-32 w-full py-32' style={{backgroundColor: "#ffda79"}}>
        <h1 className='text-6xl text-center'>Find your next</h1>
        <h1 className='text-6xl text-center'> designer today</h1>
        <br/>
        <p className='text-center text-xl text-wrap mb-2'>The world's leading brands use Dribble to hire creative talent.</p>
        <p className='text-center text-xl text-wrap mb-2'>Browse millions of top-rated portfolios to finf your creative</p>
        <p className='text-center text-xl text-wrap'>perfect creative match.</p>
       <div className='flex items-center justify-center mt-10 mb-14'>
       <button className="text-white bg-black  text-sm font-bold py-4 px-5 border-2 border-black rounded-full hover:bg-gray-700">
         Get started now
        </button>
       
        <button className="text-black bg-white text-sm ml-4 font-bold py-5 px-7 rounded-full">
          Learn about hiring
        </button>
       </div>
       <p className='text-center text-xl'>Are you a designer?<span className='underline hover:cursor-pointer'>Join Dribble</span></p>
    </div>
        </div>
  )
}

export default Join
