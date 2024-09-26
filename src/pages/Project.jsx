import React from 'react'

const Project = () => {
  return (
    <div className='flex flex-col justify-start items-center w-[100vw] h-[400vh] border-2 border-amber-800'>
      <div className='mt-[50px] w-96 h-36 text-center text-[40px] font-extrabold flex justify-center items-center'>
        Projects
      </div>
      <div className=' sm:w-[1100px] w-[350px] h-full flex flex-col items-center justify-around text-[25px] font-extrabold border-2 border-violet-900'>
        <div className='group flex flex-col items-center justify-center w-[1000px] h-[500px] bg-weatherVibe-img bg-cover shadow-2xl border-2'>
          <a href='https://weather-vibe.netlify.app/' target='_blank' className='opacity-0 group-hover:opacity-100 flex justify-center items-center w-[500px] h-[100px] bg-weatherVibe-color rounded-xl text-[#fff] text-center border-2 transition-opacity duration-500'>
            Weather Vibe
          </a>
        </div>
        <div className='group flex flex-col items-center justify-center w-[1000px] h-[500px] bg-flugel-img bg-cover shadow-2xl border-2'>
          <a href='https://fluegel.netlify.app/' target='_blank' className='opacity-0 group-hover:opacity-100 flex justify-center items-center w-[500px] h-[100px] bg-[#25252b] rounded-xl text-[#d6ed0e] border-2 transition-opacity duration-500'>
            Flugel
          </a>
        </div>
        <div className='group flex flex-col items-center justify-center w-[1000px] h-[500px] bg-paradox-img bg-cover shadow-2xl border-2'>
        <a href='https://paradox1.netlify.app/' target='_blank' className='opacity-0 group-hover:opacity-100 flex justify-center items-center w-[500px] h-[100px] bg-[#000000] rounded-xl text-[#ed0000] border-2 transition-opacity duration-500'>
          Paradox
        </a>
        </div>
        <div className='group flex flex-col items-center justify-center w-[1000px] h-[500px] bg-buddy-img bg-cover shadow-2xl border-2'>
        <a href='https://withbuddy.netlify.app/' target='_blank' className='opacity-0 group-hover:opacity-100 flex justify-center items-center w-[500px] h-[100px] bg-[#FF7336] rounded-xl text-[#fff] border-2 transition-opacity duration-500'>
          Buddy  
        </a>
        </div>
      </div>
    </div>
  )
}

export default Project;