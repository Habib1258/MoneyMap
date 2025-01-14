import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons';
import { faSquareXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';



const footer = () => {
  return (
      <>
      <footer className='bg-blue-950 h-2/3 text-slate-200 p-10 grid-cols-1 grid-rows-2 pl-20 justify-center align-middle'>
        <div className='grid grid-cols-3 grid-rows-1 justify-center pl-24 pt-10'>
          <div>
            <h1 className='text-blue-400 text-2xl font-bold'>learn more</h1>
            <h2 className='text-lg pt-2 text-slate-200 cursor-pointer hover:text-blue-400 px-2'>nous contacter</h2>
            <h2 className='text-lg pt-2 text-slate-200 cursor-pointer hover:text-blue-400 px-2'> About Us</h2>
            <h2 className='text-lg pt-2 text-slate-200 cursor-pointer hover:text-blue-400 px-2'>CGV</h2>
            <h2 className='text-lg pt-2 text-slate-200 cursor-pointer hover:text-blue-400 px-2'>LE blog</h2>
          </div>
          <div>
            <h1 className='text-blue-400 text-2xl font-bold'>Get Started</h1>
            <h2 className='text-lg pt-2 text-slate-200 cursor-pointer hover:text-blue-400 px-2'>Sign Up</h2>
            <h2 className='text-lg pt-2 text-slate-200 cursor-pointer hover:text-blue-400 px-2'>Sign In</h2>
          </div>
          <div>
            <h1 className='text-blue-400 text-2xl font-bold flex'>Social media</h1>
            <FontAwesomeIcon icon={faInstagram} size='2xl' className='text-slate-200 cursor-pointer hover:text-blue-400 px-2'/>
            <FontAwesomeIcon icon={faSquareFacebook} size='2xl' className='text-slate-200 cursor-pointer hover:text-blue-400 px-2' />
            <FontAwesomeIcon icon={faSquareXTwitter} size='2xl' className='text-slate-200 cursor-pointer hover:text-blue-400 px-2'/>
            <FontAwesomeIcon icon={ faGithubSquare } size='2xl' className='text-slate-200 cursor-pointer hover:text-blue-400 px-2' />
          </div>
        </div>
              <p className='text-slate-200 text-center pt-32'>�� 2022 MoneyMap. All rights reserved.</p>
          </footer>
        </>
  )
}

export default footer