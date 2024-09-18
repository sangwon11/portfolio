import React from 'react';
import { Outlet } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='w-screen'>
    <div className='w-screen h-[100px] fixed flex justify-between items-center border-solid border-b-2'>
      <div className='text-[40px] font-bold pl-[30px]'>PORTFOLIO</div>
      <div className='flex justify-between w-[500px] text-[30px] font-bold pr-[30px]'>
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