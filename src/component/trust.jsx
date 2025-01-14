import React from 'react'
import  dell  from '../images/dell_logo.png'
import  Galax  from '../images/galax_logo.png'
import  hp  from '../images/hp.png'
import  msi  from '../images/msi-Logo.png'
import  nzxt  from '../images/nzxt.png'

function trust() {
  return (
      <>
        <section className='bg-blue-800 text-slate-200 pb-20 '>
              <h1 className='text-4xl text-center pt-10 font-bold'>They Trust Us</h1> 
              <div className='grid-rows-1 flex pt-16 px-20 gap-40 justify-center'>
                  <img src={ dell } className='w-32' alt="" />
                  <img src={ Galax } className='w-32' alt="" />
                  <img src={ hp } className='w-32' alt="" />
                  <img src={ msi } className='w-32' alt="" />
                  <img src={ nzxt } className='w-32' alt="" />
              </div>
        </section>
      </>
  )
}

export default trust