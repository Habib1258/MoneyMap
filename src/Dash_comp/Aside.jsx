import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'
import profile from '../images/news.png'

const Aside = () => {
  return (
    <>
        <section className='bg-slate-100 w-full h-screen mt-0 z-0 relative'>
            <aside className='bg-white w-2/12 drop-shadow-2xl h-screen'>
                <img src={logo} alt="MoneyMap logo" className='py-10' />
                <ul className='p-10 text-blue-400 text-xl'>
                    <li className='py-3 cursor-pointer text-blue-950  hover:text-blue-700 hover:scale-105'>Dashboard</li>
                    <li className='py-3 cursor-pointer  hover:text-blue-700 hover:scale-105'>Profile</li>
                    <li className='py-3 cursor-pointer  hover:text-blue-700 hover:scale-105'>Statistics</li>
                    <li className='py-3 cursor-pointer  hover:text-blue-700 hover:scale-105'>Settings</li>
                    <Link to="/"><li className='py-3 cursor-pointer  hover:text-blue-700 hover:scale-105'>Log Out</li></Link>
                </ul>
            </aside>
            <nav className='bg-white w-3/4 h-20 ml-72 drop-shadow-2xl z-40 absolute top-8 left-0 rounded-2xl'>
                <img src={profile} alt="profile img" className='absolute w-12 h-12 rounded-full right-20 top-1/4'/>
                <h1 className='text-blue-900 text-2xl absolute left-14 top-1/3 font-bold'>Dashboard</h1>          
              </nav> 
              <div>
            </div>
        </section>
        
    </>
  )
}

export default Aside