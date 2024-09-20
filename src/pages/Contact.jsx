import React from 'react'
import githubIcon from '../assets/icons/githubIcon.svg'
import emailIcon from '../assets/icons/emailIcon.svg'

const Contact = () => {
  return (
    <div className='flex flex-col items-center justify-around w-[100vw] h-[100vh] text-[25px] font-extrabold'>
      <div className='flex flex-col items-center justify-center'>
        <img src={emailIcon} width={100}></img>
        <div>Mail</div>
        <div>dbstkd@gmail.com</div>
      </div>
      <div className='flex flex-col items-center'>
        <a className='flex flex-col items-center' href='https://github.com/sangwon11'>
          <img src={githubIcon} width={100}></img>
          <div>GitHub</div>
        </a>
      </div>
    </div>
  )
}

export default Contact