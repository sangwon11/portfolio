import React, { useState, useEffect, useRef } from 'react';
import Project from './Project';
import Contact from './Contact';

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
              Laguage/Flamework/Library
            </div>
            <div className="text-[30px] font-extrabold">
              HTMl,CSS JavaScript Tailwind Bootstrap React.js Redux React-Query
            </div>
            <div> 아이콘</div>
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