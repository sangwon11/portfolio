import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-scroll';
import DarkModeToggle from '../components/DarkModeToggle';
import CustomCursor from '../components/ CustomCursor';

const NavBar = () => {
  // 기본 다크 모드가 true
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={`w-screen h-screen ${darkMode ? 'dark' : ''} transition-colors duration-500`}>
      <div className='w-screen bg-white dark:bg-gray-800 z-10 h-[100px] fixed flex sm:flex-row flex-col justify-between items-center border-solid border-b-2 transition-colors duration-500'>
        <Link 
          to="about-me" smooth={true} duration={200} 
          className='cursor-pointer z-10 text-[40px] font-bold sm:pl-[30px] pl-[0] text-black dark:text-white transition-colors duration-500'>
          PORTFOLIO
        </Link>
        <div className='flex sm:flex-row flex-col items-center'>
          <div className='flex sm:justify-between justify-around sm:w-[300px] w-[200px] sm:text-[30px] text-[15px] font-bold sm:pr-[40px] pr-[0] text-black dark:text-white transition-colors duration-500'>
            <Link to="project" smooth={true} duration={200} className="cursor-pointer z-10">Project</Link>
            <Link to="contact" smooth={true} duration={200} className="cursor-pointer z-10">Contact</Link>
          </div>
          <div className='sm:pr-[30px] pr-[0]'>
            <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          </div>
        </div>
      </div>
      <CustomCursor/>
      <div className="pt-[100px] bg-white dark:bg-gray-900 dark:text-white min-h-full transition-colors duration-500">
        <Outlet />
      </div>
    </div>
  );
}

export default NavBar;
