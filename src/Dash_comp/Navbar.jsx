import React from 'react'
import profile from '../images/news.png'

const Navbar = () => {
  return (
      <>
          <section className='bg-white w-3/4 h-20 ml-72 drop-shadow-2xl relative z-10 overflow-auto'>
              <nav className=' flex'>
                  <img src={profile} alt="profile img" className='absolute w-12 h-12 rounded-full right-20 top-1/4'/>
                  <h1 className='text-blue-900 text-2xl absolute left-14 top-1/3'>Expenses</h1>
                    
              </nav>
  
        </section>
      </>
  )
}

export default Navbar