import React from 'react';
import Project from './Project';
import Contact from './Contact';

const HomePage = () => {
  return (
    <div>
      <div className='flex flex-col justify-center items-center w-[100vw] h-[100vh]'>Page</div>
      <Project/>
      <Contact/>
    </div>
    
  )
}

export default HomePage;