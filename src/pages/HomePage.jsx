import React, { useState, useEffect, useRef } from 'react';
import Project from './Project';
import Contact from './Contact';

const HomePage = () => {
  const textRef = useRef(null);
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
      { threshold: 0.5 } // 요소의 절반이 화면에 보일 때 애니메이션 트리거
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  return (
    <div>
      <main className="pt-16">
        <div
          ref={textRef}
          className={`flex justify-center items-center w-[100vw] h-[100vh] transition-opacity duration-1000 ease-in-out ${
            isInView ? 'opacity-100' : 'opacity-0'
          }`}
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
        <Project />
        <Contact />
      </main>
    </div>
  );
};

export default HomePage;