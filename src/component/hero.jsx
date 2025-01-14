import React from 'react'
import {Link } from 'react-router-dom'
import Logo from '../images/logo.png'
import edit from '../images/ed.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBold, faCheck } from '@fortawesome/free-solid-svg-icons';


function hero() {
  return (
      <>
          <section className='bg-blue-500 text-slate-200 w-full h-screen relative z-10'>
              <div className='flex align-middle w-full h-28 pt-7 pb-7 pl-24 grid-flow-row grid-cols-2 z-10'>
                  <img className='w-80 h-auto absolute top-7 left-10 mt-8 ml-20' src={Logo} />
                  <Link to="/Login" className='cursor-pointer' ><button className='bg-blue-600 absolute top-7 right-10 mt-8 mr-20 p-3 rounded-md hover:bg-blue-800 hover:ring-2 hover:ring-slate-200'>
                      Get started 
                  </button></Link>
              </div>
              <div className='h-3/4 pt-28 z-10'>
                  <h2 className='text-6xl text-slate-200 pl-36 font-bold z-20'>Map Your Money, <br />Master Your Future.</h2>
                  <h3 className='pl-48 pt-5 text-2xl' ><FontAwesomeIcon icon={faCheck} size='xl' className='pr-2 font-bold animate-pulse' />Personalized Financial Dashboard</h3>
                  <h3 className='pl-48 text-2xl' ><FontAwesomeIcon icon={faCheck} size='xl' className='pr-2 animate-pulse' />Budget Planning</h3>
                  <h3 className='pl-48 text-2xl' ><FontAwesomeIcon icon={faCheck} size='xl' className='pr-2 animate-pulse' />Expense Tracking</h3>
              </div>
              <img src={edit} alt="" className='absolute top-0 right-0 w-full h-screen -z-10 opacity-60' />
        </section>
      </>
  )
}

export default hero