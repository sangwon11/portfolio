import React from 'react';
import './NavBar.css';
import { Outlet } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='layout'>
    <div className='nav'>
      <div className='nav-title'>PORTFOLIO</div>
      <div className='nav-link'>
        <div>About Me</div>
        <div>Git Hub</div>
        <div>Skill</div>
        <div>Project</div>
      </div>
    </div>
    <Outlet/>
    </div>
    )
}

export default NavBar;