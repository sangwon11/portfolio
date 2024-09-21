import React from 'react';
import Project from './Project';
import Contact from './Contact';
import htmlIcon from '../assets/icons/htmlIcon.svg'
import cssIcon from '../assets/icons/cssIcon.svg'
import jsIcon from '../assets/icons/jsIcon.svg'
import reactIcon from '../assets/icons/reactIcon.svg'
import reduxIcon from '../assets/icons/reduxIcon.svg'
import reactqueryIcon from '../assets/icons/reactqueryIcon.svg'
import tailwindIcon from '../assets/icons/tailwindIcon.svg'
import bootstrapIcon from '../assets/icons/bootstrapIcon.svg'
import useFadeInOnScroll from '../hooks/useFadeInOnScroll';
/*1.웹 반응형 완성
  2.네비바 스크롤기능
  3.추가스크롤 애니매이션
  4.프로젝트 이미지
*/

const HomePage = () => {
  const { elementRef: aboutmeRef, style: aboutmeStyle } = useFadeInOnScroll({ fade: true, move: true });
  const { elementRef: projectRef, style: projectStyle } = useFadeInOnScroll({ fade: true, move: false });
  const { elementRef: contactRef, style: contactStyle } = useFadeInOnScroll({ fade: true, move: false });

  return (
    <div>
      <main className="sm:pt-12 pt-28">
        <div className="flex flex-wrap justify-center items-center w-[100vw] h-[100vh]">
          <div>
            <img className="sm:w-[500px] w-[300px] sm:h-[610px] h-[300px] border-1" />
          </div>
          <div ref={aboutmeRef} style={aboutmeStyle} className="flex flex-col sm:items-start items-center sm:w-[500px] w-[300px] sm:h-[610px] h-[380px] sm:pt-[50px] pt-[10px] sm:pl-[40px] pl-[0]">
            <div className="sm:text-[30px] text-[15px] font-extrabold">
              <div>안녕하세요.</div>
              <div>프론트엔드 개발자 윤상원입니다.</div>
            </div>
            <div className="sm:text-[30px] text-[15px] font-extrabold">
              Skills
            </div>
            <div className="sm:text-[30px] text-[15px] font-extrabold">
              Laguage/Library/Flamework
            </div>
            <div className='flex flex-wrap justify-between sm:w-[480px] w-[240px] sm:h-[300px] h-[150px] sm:mt-12 mt-[10px]'>
              <div className='flex flex-col items-center justify-center sm:w-[100px] w-[50px]'>
                <img src={htmlIcon} alt="html icon" className='sm:w-[100px] w-[50px]' />
                <div>HTML</div>
              </div>
              <div className='flex flex-col items-center justify-center sm:w-[100px] w-[50px]'>
                <img src={cssIcon} alt="css icon"  className='sm:w-[100px] w-[50px]' />
                <div>CSS</div>
              </div>
              <div className='flex flex-col items-center justify-center sm:w-[100px] w-[50px]'>
                <img src={jsIcon} alt="js icon"  className='sm:w-[100px] w-[50px]' />
                <div className='sm:block hidden'>Javascript</div>
                <div className='sm:hidden block'>JS</div>
              </div>
              <div className='flex flex-col items-center justify-center sm:w-[100px] w-[50px]'>
                <img src={reactIcon} alt="react icon"  className='sm:w-[100px] w-[50px]' />
                <div>React.js</div>
              </div>
              <div className='flex flex-col items-center justify-center sm:w-[100px] w-[50px]'>
                <img src={reduxIcon} alt="redux icon"  className='sm:w-[100px] w-[50px]' />
                <div>Redux</div>
              </div>
              <div className='flex flex-col items-center justify-center sm:w-[100px] w-[50px]'>
                <img src={reactqueryIcon} alt="reactquery icon"  className='sm:w-[100px] w-[50px] sm:h-[100px] h-[50px]' />
                <div className='sm:block hidden'>React-Query</div>
                <div className='sm:hidden block'>R-Q</div>
              </div>
              <div className='flex flex-col items-center justify-center sm:w-[100px] w-[50px]'>
                <img src={tailwindIcon} alt="tailwind icon"  className='sm:w-[100px] w-[50px]' />
                <div className='sm:block hidden'>Tailwind CSS</div>
                <div className='sm:hidden block'>Tailwind</div>
              </div>
              <div className='flex flex-col items-center justify-center sm:w-[100px] w-[50px]'>
                <img src={bootstrapIcon} alt="bootstrap icon" width={100} className='sm:w-[100px] w-[50px]' />
                <div className='sm:block hidden'>Bootstrap</div>
                <div className='sm:hidden block'>B.S</div>
              </div>
            </div>
          </div>
        </div>

        <div
          ref={projectRef}
          style={projectStyle}
        >
          <Project />
        </div>

        <div
          ref={contactRef}
          style={contactStyle}
        >
          <Contact />
        </div>
      </main>
    </div>
  );
};

export default HomePage;