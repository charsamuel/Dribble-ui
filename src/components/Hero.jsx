import React from 'react'

const Hero = () => {
  return (
    <div className='flex  flex-col items-center justify-center mt-32'>
    <div className=''>
      <button className='rounded-full text-black px-5 py-2 bg-pink-400'>
      Over 3 million ready-to-work creatives!
      </button>
      </div>
      <div>
        <h1 className='text-7xl  text-black mt-8'>The world’s destination</h1>
        <h1 className='text-7xl  text-black text-center'>for design</h1>
        <p className='mt-7 text-black text-md font-semibold'>Get inspired by the work of millions of top-rated designers & agencies around the world.</p>
      </div>
      <div className=' mt-8'> 
        <button className='bg-black font-semibold text-sm text-white py-4 px-5 rounded-full hover:bg-gray-700'>
            Get Started
        </button>
      </div>
    </div>
  )
}

export default Hero
