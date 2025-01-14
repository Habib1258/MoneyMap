import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../images/logo.png'
import hum from '../images/hum.png'

const Signup = () => {
  return (
      <>
        <section className="w-full h-screen pb-14 bg-blue-600 text-slate-100">
            <div className='align-middle pt-10 text-blue-600'>
                <form className="bg-slate-50 mt-5 w-5/12 h-1/2  place-items-center mx-auto pl-10 py-10 rounded-xl drop-shadow-2xl relative">
                <img src={logo} alt="" className='flex w-56 text-center justify-center self-center pb-10' />
                <h1 className="text-blue-600 text-center text-xl font-bold">Create your account</h1>
                <h2 className='text-black pb-5 text-center'>Welcome aboard! We're thrilled to have you join  <br/>our community.</h2>
                <div className='grid grid-cols-2 grid-rows-1 gap-0'>
                    <div>
                    <img src={hum} alt="" className=' absolute top-3/6 left-5 w-72'/>
                    </div>
                    <div className='pr-28'>
                    <input type="text" className="border-2 border-blue-600 p-2 mt-3 w-60 rounded-xl justify-center self-center" placeholder="Full Name" />
                    <input type="text" className="border-2 border-blue-600 p-2 mt-3 w-60 rounded-xl justify-center self-center" placeholder="Email" />
                    <input type="text" className="border-2 border-blue-600 p-2 mt-3 w-60 rounded-xl justify-center self-center" placeholder="Username" />
                    <input type="password" className="border-2 border-blue-600 p-2 mt-3 w-60 mx-auto rounded-xl justify-center self-center" placeholder="New Password" />
                    <input type="password" className="border-2 border-blue-600 p-2 mt-3 w-60 mx-auto rounded-xl justify-center self-center" placeholder="Confirm Password" />
                    <Link to="/Dashboard" className='text-blue-500'><button className="bg-blue-500 hover:bg-blue-800 font-bold text-white p-2 mt-3 w-60 rounded-full">Sign Up</button></Link>
                    <h3 className='flex w-96 text-black pl-5 p-2 text-xs'>Already have an account,  <Link to="/Login" className='text-blue-500'> Log In</Link> </h3>
                    </div>
                </div>
                </form>
            </div>
        </section>
      </>
  )
}

export default Signup