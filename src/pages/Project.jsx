import React from 'react'

const Project = () => {
  return (
    <div className='flex flex-col justify-center items-center w-[100vw] h-[100vh]'>
      <div className='sm:w-[1100px] w-[350px] sm:h-[800px] h-[400px] flex flex-wrap justify-between items-center text-[25px] font-extrabold'>
        <div className='flex flex-col items-center justify-between sm:h-[350px] h-[200px] mb-10'>
          <a href='https://weather-vibe.netlify.app/' target='_blank' className='flex justify-center items-center bg-weatherVibe-color rounded-xl text-[#fff] sm:w-[500px] w-[150px] sm:h-[300px] h-[150px] border-2'>
            Weather Vibe
          </a>
        </div>
        <div className='flex flex-col items-center justify-between sm:h-[350px] h-[200px] mb-10'>
          <a href='https://fluegel.netlify.app/' target='_blank' className='flex justify-center items-center bg-[#25252b] rounded-xl text-[#d6ed0e] sm:w-[500px] w-[150px] sm:h-[300px] h-[150px] border-2'>
            Flugel
          </a>
        </div>
        <div className='flex flex-col items-center justify-between sm:h-[350px] h-[200px]'>
        <a href='https://paradox1.netlify.app/' target='_blank' className='flex justify-center items-center bg-[#000000] rounded-xl text-[#ed0000] sm:w-[500px] w-[150px] sm:h-[300px] h-[150px] border-2'>
          Paradox
        </a>
        </div>
        <div className='flex flex-col items-center justify-between sm:h-[350px] h-[200px]'>
        <a href='https://withbuddy.netlify.app/' target='_blank' className='flex justify-center items-center bg-[#FF7336] rounded-xl text-[#fff] sm:w-[500px] w-[150px] sm:h-[300px] h-[150px] border-2'>
          Buddy  
        </a>
        </div>
      </div>
    </div>
  )
}

export default Project;