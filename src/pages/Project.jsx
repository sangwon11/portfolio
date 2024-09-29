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
    <div className='flex flex-col justify-start items-center w-[100vw] h-[200vh] border-2 border-amber-800'>
      <div className='mt-[100px] w-96 h-36 text-center text-[40px] font-extrabold flex justify-center items-center'>
        Projects
      </div>
      <div className=' sm:w-[1300px] w-[350px] h-full flex flex-row flex-wrap items-center justify-around sm:text-[25px] text-[10px] font-extrabold'>
        <div className='flex flex-col items-center sm:w-[500px] w-[300px] h-[500px]'>
          <div className='group flex flex-col items-center justify-center mb-5 w-[500px] h-[250px] bg-weatherVibe-img bg-cover shadow-2xl rounded-3xl'>
            <a href='https://weather-vibe.netlify.app/' target='_blank' className='opacity-0 group-hover:opacity-100 flex justify-center items-center w-[250px] h-[50px] bg-weatherVibe-color rounded-xl text-[#fff] text-center border-2 transition-opacity duration-500'>
              Weather Vibe
            </a>
          </div>
          <div className='flex flex-col w-[400px] h-[250px]'>
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
              OpenWeatherMap api를 활용해서 만든 날씨 사이트입니다. 기본적으로 현재위치의 날씨를 알려주며 검색을 통해 api 안에 있는 모든 도시의 날씨와 온도를 날씨창에 뜨게합니다.
              화면 좌측 버튼으로 선정된 8국가의 주요도시의 날씨를 확인하면 해당 도시의 배경이 날씨창에 띄워집니다. 그리고 날씨의 상태에 따라 날씨에 맞는 랜덤한 곡이 자동재생 됩니다.
            </div>
          </div>
        </div>

        {/* Flugel Project */}
        <div className='flex flex-col justify-around items-center sm:w-[500px] w-[300px] h-[500px]'>
          <div className='group flex flex-col items-center justify-center mb-5 w-[500px] h-[250px] bg-flugel-img bg-cover shadow-2xl rounded-3xl'>
            <a href='https://fluegel.netlify.app/' target='_blank' className='opacity-0 group-hover:opacity-100 flex justify-center items-center w-[250px] h-[50px] bg-[#25252b] rounded-xl text-[#d6ed0e] text-center border-2 transition-opacity duration-500'>
              Flugel
            </a>
          </div>
          <div className='flex flex-col w-[400px] h-[250px]'>
            <div className=''>
              Flugel
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
              json server를 이용한 쇼핑몰 사이트입니다. db.json에 직접 데이터를 만들어 호출하는 방식을 사용했습니다. 리액트 훅을 이용하여 로그인, 로그아웃 기능을 구현했습니다.
            </div>
          </div>
        </div>

        {/* Paradox Project */}
        <div className='flex flex-col justify-around items-center sm:w-[500px] w-[300px] h-[500px]'>
          <div className='group flex flex-col items-center justify-center mb-5 w-[500px] h-[250px] bg-paradox-img bg-cover shadow-2xl rounded-3xl'>
            <a href='https://paradox1.netlify.app/' target='_blank' className='opacity-0 group-hover:opacity-100 flex justify-center items-center w-[250px] h-[50px] bg-[#000000] rounded-xl text-[#ed0000] text-center border-2 transition-opacity duration-500'>
              Paradox
            </a>
          </div>
          <div className='flex flex-col w-[400px] h-[250px]'>
            <div className=''>
              Paradox
            </div>
            <div className='flex border-b-2 border-black'>
              <div className='flex items-start h-[30px] pr-1'>
                <img src={reactIcon} alt="react icon" className='w-[30px] rounded-full' />
                <div className='font-extrabold text-[20px]'>React.js</div>
              </div>
              <div className='flex items-start h-[30px] pr-1'>
                <img src={reactqueryIcon} alt="reactquery icon" className='w-[30px] h-[30px]' />
                <div className='font-extrabold text-[20px]'>React-Query</div>
              </div>
              <div className='flex items-start h-[30px] pr-1'>
                <img src={bootstrapIcon} alt="bootstrap icon" className='w-[30px]' />
                <div className='font-extrabold text-[20px]'>Bootstrap</div>
              </div>
            </div>
            <div className='text-[17px]'>
              tmdb api를 활용하고 리액트쿼리 라이브러리로 상태관리하여 만든 넷플릭스 클론 사이트입니다. 홈페이지 배너에 인기가 가장 많은 영화가 자동으로 배치되게 하였고 아래는 영화가 인기순으로 슬라이드 형식으로 배치되게 구성했습니다.
              상단의 네비바에서는 홈페이지와 영화목록페이지 네비버튼과 검색창으로 구성했습니다.
              영화 목록페이지에서는 장르를 나눠서 볼수있고 인기순으로 정렬이 가능합니다.
              디테일 페이지에서는 api를 통해 영화 상세정보와 트레일러,리뷰 그리고 해당영화와 관련있는 추천 리스트가 뜨게 합니다.
            </div>
          </div>
        </div>

        {/* Buddy Project */}
        <div className='flex flex-col justify-around items-center sm:w-[500px] w-[300px] h-[500px]'>
          <div className='group flex flex-col items-center justify-center mb-5 w-[500px] h-[250px] bg-buddy-img bg-cover shadow-2xl rounded-3xl'>
            <a href='https://withbuddy.netlify.app/' target='_blank' className='opacity-0 group-hover:opacity-100 flex justify-center items-center w-[250px] h-[50px] bg-[#FF7336] rounded-xl text-[#fff] text-center border-2 transition-opacity duration-500'>
              Buddy
            </a>
          </div>
          <div className='flex flex-col items-start w-[450px] h-[250px]'>
            <div className=''>
              Buddy
            </div>
            <div className='flex border-b-2 border-black'>
              <div className='flex items-start h-[30px] pr-1'>
                <img src={reactIcon} alt="react icon" className='w-[30px] rounded-full' />
                <div className='font-extrabold text-[20px]'>React.js</div>
              </div>
              <div className='flex items-start h-[30px] pr-1'>
                <img src={reactqueryIcon} alt="reactquery icon" className='w-[30px] h-[30px]' />
                <div className='font-extrabold text-[20px]'>React-Query</div>
              </div>
              <div className='flex items-start h-[30px] pr-1'>
                <img src={tailwindIcon} alt="tailwind icon" className='w-[30px]' />
                <div className='font-extrabold text-[20px]'>Tailwind CSS</div>
              </div>
            </div>
            <div className='text-[17px]'>
              공공데이터포털 과 카카오맵 api를 활용한 반려동물 동반가능 여행 사이트입니다. 반려동물과 함꼐 할수있는 문화시설(미술관, 박물관, 카페)과 동물병원을 찾아줍니다.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project;
