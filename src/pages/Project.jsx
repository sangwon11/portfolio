import React from 'react'
import htmlIcon from '../assets/icons/htmlIcon.svg';
import cssIcon from '../assets/icons/cssIcon.svg';
import jsIcon from '../assets/icons/jsIcon.svg';
import reactIcon from '../assets/icons/reactIcon.svg';
import reduxIcon from '../assets/icons/reduxIcon.svg';
import reactqueryIcon from '../assets/icons/reactqueryIcon.svg';
import tailwindIcon from '../assets/icons/tailwindIcon.svg';
import bootstrapIcon from '../assets/icons/bootstrapIcon.svg';

const Project = () => {
  return (
    <div className='flex flex-col justify-start items-center w-[100vw] h-[400vh] border-2 border-amber-800'>
      <div className='w-96 h-36 text-center text-[40px] font-extrabold flex justify-center items-center'>
        Projects
      </div>
      <div className=' sm:w-[1100px] w-[350px] h-full flex flex-col items-center justify-around sm:text-[25px] text-[10px] font-extrabold border-2 border-violet-900'>
        <div className='flex flex-row flex-wrap justify-around items-center sm:w-[1000px] w-[300px] h-[500px]'>
          <div className='group flex flex-col items-center justify-center w-[500px] h-[250px] bg-weatherVibe-img bg-cover shadow-2xl rounded-3xl'>
            <a href='https://weather-vibe.netlify.app/' target='_blank' className='opacity-0 group-hover:opacity-100 flex justify-center items-center w-[250px] h-[50px] bg-weatherVibe-color rounded-xl text-[#fff] text-center border-2 transition-opacity duration-500'>
              Weather Vibe
            </a>
          </div>
          <div className='flex flex-col w-[400px]'>
            <div className=''>
              Weather Vibe
            </div>
            <div className='flex border-b-2 border-black'>
            <div className='flex items-start h-[30px] pr-1'>
              <img src={reactIcon} alt="react icon" className='w-[30px] rounded-full' />
              <div className='font-extrabold text-[20px]'>React.js</div>
            </div>
            <div className='flex items-start h-[30px] pr-1'>
              <img src={bootstrapIcon} alt="bootstrap icon" className='w-[30px]' />
              <div className='font-extrabold text-[20px]'>Bootstrap</div>
            </div>
            </div>
            <div className='text-[17px]'>
              OpenWeatherMap api를 활용해서 만든 날씨 사이트 입니다. 기본적으로 현재위치의 날씨를 알려주며 검색을 통해 api 안에 있는 모든 도시의 날씨와 온도를 날씨창에 뜨게합니다.
              화면 좌측 버튼으로 선정된 8국가의 주요도시의 날씨를 확인하면 해당 도시의 배경이 날씨창에 띄워집니다. 그리고 날씨의 상태에 따라 날씨에 맞는 랜덤한 곡이 자동재생 됩니다.
            </div>
          </div>
        </div>
        <div>
          <div className='group flex flex-col items-center justify-center sm:w-[1000px] w-[300px] h-[500px] bg-flugel-img bg-cover shadow-2xl'>
            <a href='https://fluegel.netlify.app/' target='_blank' className='opacity-0 group-hover:opacity-100 flex justify-center items-center sm:w-[500px] w-[100px] sm:h-[100px] h-[20px] bg-[#25252b] rounded-xl text-[#d6ed0e] border-2 transition-opacity duration-500'>
              Flugel
            </a>
          </div>
        </div>
        <div className='group flex flex-col items-center justify-center sm:w-[1000px] w-[300px] sm:h-[500px] h-[150px] bg-paradox-img bg-cover shadow-2xl'>
        <a href='https://paradox1.netlify.app/' target='_blank' className='opacity-0 group-hover:opacity-100 flex justify-center items-center sm:w-[500px] w-[100px] sm:h-[100px] h-[20px] bg-[#000000] rounded-xl text-[#ed0000] border-2 transition-opacity duration-500'>
          Paradox
        </a>
        </div>
        <div className='group flex flex-col items-center justify-center sm:w-[1000px] w-[300px] sm:h-[500px] h-[150px] bg-buddy-img bg-cover shadow-2xl'>
        <a href='https://withbuddy.netlify.app/' target='_blank' className='opacity-0 group-hover:opacity-100 flex justify-center items-center sm:w-[500px] w-[100px] sm:h-[100px] h-[20px] bg-[#FF7336] rounded-xl text-[#fff] border-2 transition-opacity duration-500'>
          Buddy  
        </a>
        </div>
      </div>
    </div>
  )
}

export default Project;