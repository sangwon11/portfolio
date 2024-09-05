import React from 'react';
import './HomePage.css';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Project from './Project';

const HomePage = () => {
  return (
    <div className='section'>
      <div className='section1'>Page</div>
      <AboutMe/>
      <Skills/>
      <Project/>
    </div>
    
  )
}

export default HomePage;