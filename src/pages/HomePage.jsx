import React from 'react';
import Project from './Project';
import Contact from './Contact';
import htmlIcon from '../assets/icons/htmlIcon.svg';
import cssIcon from '../assets/icons/cssIcon.svg';
import jsIcon from '../assets/icons/jsIcon.svg';
import reactIcon from '../assets/icons/reactIcon.svg';
import reduxIcon from '../assets/icons/reduxIcon.svg';
import reactqueryIcon from '../assets/icons/reactqueryIcon.svg';
import tailwindIcon from '../assets/icons/tailwindIcon.svg';
import bootstrapIcon from '../assets/icons/bootstrapIcon.svg';
import useFadeInOnScroll from '../hooks/useFadeInOnScroll';

const HomePage = () => {
  const { elementRef: textRef, style: textStyle } = useFadeInOnScroll({ fade: true, move: true, delay: 0 });
  const { elementRef: skillRef, style: skillStyle } = useFadeInOnScroll({ fade: true, move: true, delay: 0 });
  const { elementRef: htmlRef, style: htmlStyle } = useFadeInOnScroll({ fade: true, move: true, delay: 200 });
  const { elementRef: cssRef, style: cssStyle } = useFadeInOnScroll({ fade: true, move: true, delay: 400 });
  const { elementRef: jsRef, style: jsStyle } = useFadeInOnScroll({ fade: true, move: true, delay: 600 });
  const { elementRef: reactRef, style: reactStyle } = useFadeInOnScroll({ fade: true, move: true, delay: 800 });
  const { elementRef: reduxRef, style: reduxStyle } = useFadeInOnScroll({ fade: true, move: true, delay: 1000 });
  const { elementRef: queryRef, style: queryStyle } = useFadeInOnScroll({ fade: true, move: true, delay: 1200 });
  const { elementRef: tailwindRef, style: tailwindStyle } = useFadeInOnScroll({ fade: true, move: true, delay: 1400 });
  const { elementRef: bootstrapRef, style: bootstrapStyle } = useFadeInOnScroll({ fade: true, move: true, delay: 1600 });

  const { elementRef: projectRef, style: projectStyle } = useFadeInOnScroll({ fade: true, move: false });
  const { elementRef: contactRef, style: contactStyle } = useFadeInOnScroll({ fade: true, move: false });

  return (
    <div>
      <main className="border-2 border-blue-700">
        <div id='about-me' className="pt-[40px] flex flex-wrap justify-center items-center w-[100vw]">
          <div>
            <img className="sm:w-[500px] w-[300px] sm:h-[610px] h-[400px] border-1" />
          </div>
          <div ref={textRef} style={textStyle} className=" flex flex-col sm:items-start items-center sm:w-[500px] w-[300px] sm:h-[610px] h-[380px] sm:pt-[50px] pt-[10px] sm:pl-[40px] pl-[0]">
            <div className="sm:text-[30px] text-[15px] font-extrabold">
              <div>안녕하세요.</div>
              <div>프론트엔드 개발자 윤상원입니다.</div>
            </div>
            <div ref={skillRef} style={skillStyle} className='flex flex-wrap justify-start w-full h-[300px]'>
              <div className=' flex flex-col items-start justify-around w-full'>
                <div className="sm:text-[30px] text-[15px] font-extrabold">
                  Language
                </div>
                <div className='flex justify-around w-full'>
                  <div ref={htmlRef} style={htmlStyle} className='flex items-start h-[30px] rounded-sm hover:scale-125 hover:bg-orange-600 transition-transform duration-300'>
                    <img src={htmlIcon} alt="html icon" className='w-[30px]'/>
                    <div className='font-extrabold text-[20px]'>HTML</div>
                  </div>
                  <div ref={cssRef} style={cssStyle} className='flex items-start h-[30px] rounded-sm hover:scale-125 hover:bg-blue-600 transition-transform duration-300'>
                    <img src={cssIcon} alt="css icon" className='w-[30px]'/>
                    <div className='font-extrabold text-[20px]'>CSS</div>
                  </div>
                  <div ref={jsRef} style={jsStyle} className='flex items-start h-[30px] rounded-sm hover:scale-125 hover:bg-yellow-300 transition-transform duration-300'>
                    <img src={jsIcon} alt="js icon" className='w-[30px]'/>
                    <div className='font-extrabold text-[20px]'>Javascript</div>
                  </div>
                </div>
              </div>
              <div className=' flex flex-col items-start justify-around w-full'>
                <div className="sm:text-[30px] text-[15px] font-extrabold">
                  Library
                </div>
                <div className='flex justify-around w-full'>
                  <div ref={reactRef} style={reactStyle} className='flex items-start h-[30px] rounded-sm hover:scale-125 hover:bg-sky-300 transition-transform duration-300'>
                    <img src={reactIcon} alt="react icon" className='w-[30px]' />
                    <div className='font-extrabold text-[20px]'>React.js</div>
                  </div>
                  <div ref={reduxRef} style={reduxStyle} className='flex items-start h-[30px] rounded-sm hover:scale-125 hover:bg-purple-400 transition-transform duration-300'>
                    <img src={reduxIcon} alt="redux icon" className='w-[30px]' />
                    <div className='font-extrabold text-[20px]'>Redux</div>
                  </div>
                  <div ref={queryRef} style={queryStyle} className='flex items-start h-[30px] rounded-sm hover:scale-125 hover:bg-orange-600 transition-transform duration-300'>
                    <img src={reactqueryIcon} alt="reactquery icon" className='w-[30px] h-[30px]' />
                    <div className='font-extrabold text-[20px]'>React-Query</div>
                  </div>
                </div>
              </div>
              <div className='flex flex-col items-start justify-around w-full'>
              <div className="sm:text-[30px] text-[15px] font-extrabold">
                Framework
              </div>
              <div className='flex justify-around w-full'>
              <div ref={tailwindRef} style={tailwindStyle} className='flex items-start h-[30px] rounded-sm hover:scale-125 hover:bg-sky-300 transition-transform duration-300'>
                <img src={tailwindIcon} alt="tailwind icon" height={30}  className='w-[30px] h-[30px]' />
                <div className='font-extrabold text-[20px]'>Tailwind CSS</div>
              </div>
              <div ref={bootstrapRef} style={bootstrapStyle} className='flex items-start h-[30px] rounded-sm hover:scale-125 hover:bg-purple-500 transition-transform duration-300'>
                <img src={bootstrapIcon} alt="bootstrap icon" className='w-[30px]' />
                <div className='font-extrabold text-[20px]'>Bootstrap</div>
              </div>
              </div>
              </div>
            </div>
          </div>
        </div>

        <div
          id='project'
          ref={projectRef}
          style={projectStyle}
        >
          <Project />
        </div>

        <div
          id='contact'
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