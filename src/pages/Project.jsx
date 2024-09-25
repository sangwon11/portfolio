import React from 'react'

const Project = () => {
  return (
    <div className='flex flex-row justify-center items-start w-[100vw] h-[400vh] border-2 border-amber-800'>
      <div className='pt-[100px] sm:w-[1100px] w-[350px] h-full flex flex-col text-[25px] font-extrabold border-2 border-violet-900'>
        <div className='flex flex-col items-center justify-between'>
          <a href='https://weather-vibe.netlify.app/' target='_blank' className='flex justify-center items-center bg-weatherVibe-color rounded-xl text-[#fff] text-center w-[1000px] h-[700px] border-2'>
            Weather Vibe
          </a>
        </div>
        <div className='flex flex-col items-center justify-between'>
          <a href='https://fluegel.netlify.app/' target='_blank' className='flex justify-center items-center bg-[#25252b] rounded-xl text-[#d6ed0e] w-[1000px] h-[700px] border-2'>
            Flugel
          </a>
        </div>
        <div className='flex flex-col items-center justify-between'>
        <a href='https://paradox1.netlify.app/' target='_blank' className='flex justify-center items-center bg-[#000000] rounded-xl text-[#ed0000] w-[1000px] h-[700px] border-2'>
          Paradox
        </a>
        </div>
        <div className='flex flex-col items-center justify-between'>
        <a href='https://withbuddy.netlify.app/' target='_blank' className='flex justify-center items-center bg-[#FF7336] rounded-xl text-[#fff] w-[1000px] h-[700px] border-2'>
          Buddy  
        </a>
        </div>
      </div>
    </div>
  )
}

export default Project;