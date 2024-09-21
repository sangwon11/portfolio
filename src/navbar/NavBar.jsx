import React from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-scroll';

const NavBar = () => {
  return (
    <div className='w-screen'>
    <div className='w-screen bg-[#fff] z-10 h-[100px] fixed flex sm:flex-row flex-col justify-between items-center border-solid border-b-2'>
      <div className='text-[40px] font-bold sm:pl-[30px] pl-[0]'>PORTFOLIO</div>
      <div className='flex sm:justify-between justify-around sm:w-[500px] w-[300px] sm:text-[30px] text-[15px] font-bold sm:pr-[30px] pr-[0]'>
          <Link to="about-me" smooth={true} duration={200} className="cursor-pointer z-10">About Me</Link>
          <Link to="project" smooth={true} duration={200} className="cursor-pointer z-10">Project</Link>
          <Link to="contact" smooth={true} duration={200} className="cursor-pointer z-10">Contact</Link>
      </div>
    </div>
    <Outlet/>
    </div>
    )
}

export default NavBar;