import React from 'react';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Project from './Project';

const HomePage = () => {
  return (
    <div>
      <div className='flex flex-col justify-center items-center w-[100vw] h-[100vh]'>Page</div>
      <AboutMe/>
      <Skills/>
      <Project/>
    </div>
    
  )
}

export default HomePage;