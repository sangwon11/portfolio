import React from 'react'
import githubIcon from '../assets/icons/githubIcon.svg'
import emailIcon from '../assets/icons/emailIcon.svg'

const Contact = () => {
  return (
    <div className='flex flex-col items-center justify-center w-[100vw] h-[100vh] text-[25px] font-extrabold'>
      <div className='text-[40px]'>Contact</div>
      <div className='mt-10 sm:w-screen w-[300px] flex sm:flex-row flex-col flex-wrap justify-center'>
        <div className='flex flex-col items-center justify-center w-[300px]'>
          <img src={emailIcon} width={100} className='border-4 border-black rounded-xl dark:invert transition-all duration-500' ></img>
          <div>asmytj75@gmail.com</div>
        </div>
        <div className='flex flex-col items-center w-[300px]'>
          <a className='flex flex-col items-center justify-center h-[175px]' href='https://github.com/sangwon11' target='_blank'>
            <img className='dark:invert transition-all duration-500' src={githubIcon} width={100}></img>
            <div>GitHub</div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact