import React, { useState, useEffect, useRef } from 'react';
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

const useFadeInOnScroll = () => {
  const elementRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          } else {
            setIsInView(false);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return { elementRef, isInView };
};

const HomePage = () => {
  const { elementRef: homeRef, isInView: isHomeInView } = useFadeInOnScroll();
  const { elementRef: projectRef, isInView: isProjectInView } = useFadeInOnScroll();
  const { elementRef: contactRef, isInView: isContactInView } = useFadeInOnScroll();

  return (
    <div>
      <main className="pt-10">
        <div
          ref={homeRef}
          style={{
            transition: 'opacity 1s ease-in-out',
            opacity: isHomeInView ? 1 : 0,
          }}
          className="flex justify-center items-center w-[100vw] h-[100vh]"
        >
          <div>
            <img className="w-[500px] h-[610px]" />
          </div>
          <div className="w-[500px] h-[610px] pt-[50px] pl-[40px]">
            <div className="text-[30px] font-extrabold">
              <div>안녕하세요.</div>
              <div>프론트엔드 개발자 윤상원입니다.</div>
            </div>
            <div className="text-[30px] font-extrabold">Skills</div>
            <div className="text-[30px] font-extrabold">
              Laguage/Library/Framework
            </div>
            <div className='flex flex-wrap justify-between w-[480px] h-[300px]'>
              <div className='flex flex-col items-center justify-center'>
                <img src={htmlIcon} alt="html icon" width={100} />
                <div>HTML</div>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <img src={cssIcon} alt="css icon" width={100} />
                <div>CSS</div>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <img src={jsIcon} alt="js icon" width={100} />
                <div>Javascript</div>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <img src={reactIcon} alt="react icon" width={100} />
                <div>React.js</div>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <img src={reduxIcon} alt="redux icon" width={100} />
                <div>Redux</div>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <img src={reactqueryIcon} alt="reactquery icon" width={100} height={100} />
                <div>React-Query</div>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <img src={tailwindIcon} alt="tailwind icon" width={100} />
                <div>Tailwind CSS</div>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <img src={bootstrapIcon} alt="bootstrap icon" width={100} />
                <div>Bootstrap</div>
              </div>
            </div>
          </div>
        </div>

        <div
          ref={projectRef}
          style={{
            transition: 'opacity 1s ease-in-out',
            opacity: isProjectInView ? 1 : 0,
          }}
        >
          <Project />
        </div>

        <div
          ref={contactRef}
          style={{
            transition: 'opacity 1s ease-in-out',
            opacity: isContactInView ? 1 : 0,
          }}
        >
          <Contact />
        </div>
      </main>
    </div>
  );
};

export default HomePage;