import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png'
import humm from '../images/humm.png'


 const LoginForme = () => {
  return (
    <section className="w-full h-screen bg-blue-600 text-slate-100">
      <div className='align-middle pt-16'>
        <form className="bg-slate-50 text-black mt-10 w-1/3 h-1/2  place-items-center mx-auto p-10 rounded-xl drop-shadow-2xl">
          <img src={logo} alt="" className='flex w-56 text-center justify-center self-center pb-10' />
          <h1 className="text-blue-600 text-center text-xl font-bold">Login to your account</h1>
          <h2 className='text-black d pb-10 text-center'>Welcome back! It's a pleasure to have you <br/>with us again.</h2>
          <div className='grid grid-cols-2 grid-rows-1 gap-0'>
            <div>
              <img src={humm} alt="" className='w-44'/>
            </div>
            <div className='pt-10 pr-28'>
              <input type="text" className="border-2 border-slate-400 p-2 w-60 rounded-xl justify-center self-center" placeholder="Username" />
              <input type="password" className="border-2 border-slate-400 p-2 mt-3 w-60 mx-auto rounded-xl justify-center self-center" placeholder="Password" />
              <Link to="/Dashboard" className='text-blue-500'><button className="bg-blue-500 hover:bg-blue-800 font-bold text-white p-2 mt-3 w-60 rounded-full">Login</button></Link>
              <h3 className='flex w-96 text-black pl-5 p-2 text-xs'>You don't have an account,  <Link to="/signup" className='text-blue-500'> Sign Up</Link> </h3>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default LoginForme;
