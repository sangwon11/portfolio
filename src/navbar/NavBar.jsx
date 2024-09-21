import React from 'react';
import { Outlet } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='w-screen'>
    <div className='w-screen h-[100px] fixed flex sm:flex-row flex-col justify-between items-center border-solid border-b-2'>
      <div className='text-[40px] font-bold sm:pl-[30px] pl-[0]'>PORTFOLIO</div>
      <div className='flex sm:justify-between justify-around sm:w-[500px] w-[300px] sm:text-[30px] text-[15px] font-bold sm:pr-[30px] pr-[0]'>
        <div>About Me</div>
        <div>Project</div>
        <div>Contact</div>
      </div>
    </div>
    <Outlet/>
    </div>
    )
}

export default NavBar;