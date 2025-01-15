import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'
import profile from '../images/news.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import { faChartLine } from '@fortawesome/free-solid-svg-icons'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { faTableColumns } from '@fortawesome/free-solid-svg-icons'

const pro = () => {
  return (
    <>
        <section className='bg-slate-100 w-full h-screen mt-0 z-0 relative'>
            <aside className='bg-white w-2/12 drop-shadow-2xl h-screen'>
                <img src={logo} alt="MoneyMap logo" className='py-10' />
                <ul className='p-10 text-blue-400 text-xl'>
                    <Link to="/Dashboard"><li className='py-3 cursor-pointer  hover:text-blue-700 hover:scale-105'><FontAwesomeIcon icon={faTableColumns} className='pr-2' />Dashboard</li></Link>
                    <Link to="/Profile"><li className='py-3 cursor-pointer  text-blue-950 hover:text-blue-700 hover:scale-105'><FontAwesomeIcon icon={faUser} className='pr-2' />Profile</li></Link>
                    <Link to="/Statistics"><li className='py-3 cursor-pointer  hover:text-blue-700 hover:scale-105'> <FontAwesomeIcon icon={faChartLine} className='pr-2' />Statistics</li></Link>
                    <Link to="/Settings"><li className='py-3 cursor-pointer  hover:text-blue-700 hover:scale-105'> <FontAwesomeIcon icon={faGear} className='pr-2' />Settings</li></Link>
                    <Link to="/"><li className='py-3 cursor-pointer  hover:text-blue-700 hover:scale-105'><FontAwesomeIcon icon={faRightFromBracket} className='pr-2' />Log Out</li></Link>
                </ul>
            </aside>
        
            <div className='bg-white w-4/5 h-5/6 ml-72 drop-shadow-2xl z-40 absolute top-10 left-0 rounded-2xl overflow-scroll'>
                <img src={profile} alt="profile img" className='absolute w-44 h-44 rounded-full left-20 top-40'/>
                <h1 className='text-blue-900 text-3xl absolute left-10 top-4 font-bold'>Profile</h1> 
                <div className=' w-4/5 h-5/6 ml-56 drop-shadow-2xl z-40 top-16 left-0 rounded-2xl overflow-scroll relative'>
                    <h1 className='text-2xl text-center font-bold'>Edit Profile</h1>
                    <form className='w-4/5 m-auto mt-10 grid grid-cols-1'>
                        <div className='grid grid-cols-2 gap-5'>
                            <div>
                                <h1 className='text-xl  mt-3'>First Name</h1>
                                <input type='text' placeholder='First Name' className='w-96 h-8 border-2 border-blue-300 rounded-lg p-4' />
                            </div>
                            <div>
                                <h1 className='text-xl  mt-3'>Last Name</h1>
                                <input type='text' placeholder='Last Name' className='w-96 h-8 border-2 border-blue-300 rounded-lg p-4'/>   
                            </div>
                        </div>
                        <h1 className='text-xl  mt-3'>Username</h1>
                        <input type='text' placeholder='Username' className='w-full h-8 border-2 border-blue-300 rounded-lg p-4' />
                        <div className='grid grid-cols-2 gap-5'>
                            <div>
                                <h1 className='text-xl  mt-3'>Email</h1>
                                <input type='email' placeholder='Email' className='w-96 h-8 border-2 border-blue-300 rounded-lg p-4' />
                            </div>
                            <div>
                                <h1 className='text-xl  mt-3'>Phone Number</h1>
                                <input type='text' placeholder='Phone Number' className='w-96 h-8 border-2 border-blue-300 rounded-lg p-4' />   
                            </div>
                        </div>
                        <input type='submit' value='Save Changes' className='absolute bottom-40 right-24 w-48 h-8 bg-blue-500 hover:bg-blue-900 text-white rounded-lg cursor-pointer'/>
                    </form>
                </div>
            </div>
        </section>
    </>
  )
}

export default pro