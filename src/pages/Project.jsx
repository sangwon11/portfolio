import React from 'react'

const Project = () => {
  return (
    <div className='flex flex-col justify-center items-center w-[100vw] h-[100vh]'>
      <div className='w-[1100px] h-[800px] flex flex-wrap justify-between items-center text-[25px] font-extrabold'>
        <div className='flex flex-col items-center justify-between h-[350px]'>
          <a href='https://weather-vibe.netlify.app/' target='_blank' className='w-[500px] h-[300px] border-2'></a>
          <div>Weather-Vibe</div>
        </div>
        <div className='flex flex-col items-center justify-between h-[350px]'>
          <a href='https://fluegel.netlify.app/' target='_blank' className='w-[500px] h-[300px] border-2'></a>
          <div>Flugel</div>
        </div>
        <div className='flex flex-col items-center justify-between h-[350px]'>
        <a href='https://paradox1.netlify.app/' target='_blank' className='w-[500px] h-[300px] border-2'></a>
        <div>Paradox</div>
        </div>
        <div className='flex flex-col items-center justify-between h-[350px]'>
        <a href='https://withbuddy.netlify.app/' target='_blank' className='w-[500px] h-[300px] border-2'></a>
        <div>Buddy</div>
        </div>
      </div>
    </div>
  )
}

export default Project;