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
const Aside = () => {
  return (
    <>
        <section className='bg-slate-100 w-full h-screen mt-0 z-0 relative'>
            <aside className='bg-white w-2/12 drop-shadow-2xl h-screen'>
                <img src={logo} alt="MoneyMap logo" className='py-10' />
                <ul className='p-10 text-blue-400 text-xl'>
                    <Link to="/Dashboard"><li className='py-3 cursor-pointer text-blue-950  hover:text-blue-700 hover:scale-105'><FontAwesomeIcon icon={faTableColumns} className='pr-2' />Dashboard</li></Link>
                    <Link to="/Profile"><li className='py-3 cursor-pointer  hover:text-blue-700 hover:scale-105'><FontAwesomeIcon icon={faUser} className='pr-2' />Profile</li></Link>
                    <Link to="/Statistics"><li className='py-3 cursor-pointer  hover:text-blue-700 hover:scale-105'> <FontAwesomeIcon icon={faChartLine} className='pr-2' />Statistics</li></Link>
                    <Link to="/Settings"><li className='py-3 cursor-pointer  hover:text-blue-700 hover:scale-105'> <FontAwesomeIcon icon={faGear} className='pr-2' />Settings</li></Link>
                    <Link to="/"><li className='py-3 cursor-pointer  hover:text-blue-700 hover:scale-105'><FontAwesomeIcon icon={faRightFromBracket} className='pr-2' />Log Out</li></Link>
                </ul>
            </aside>
                <nav className='bg-white w-4/5 h-16 ml-72 drop-shadow-2xl z-40 absolute top-10 left-0 rounded-2xl'>
                  <h1 className='text-blue-900 text-2xl absolute w-12 h-12 rounded-full right-28 top-4 font-semibold'>Habib</h1>
                  <img src={profile} alt="profile img" className='absolute w-12 h-12 rounded-full right-7 top-2'/>
                  <h1 className='text-blue-900 text-2xl absolute left-10 top-4 font-bold'>Dashboard</h1>          
                </nav> 
        
        <div className='bg-white w-4/5 h-3/4 ml-72 mb-40 drop-shadow-2xl z-20 absolute top-36 left-0 rounded-2xl overflow-scroll'>
          <table className='w-full h-3/4  z-20'>
            <tr className='p-4 text-center sticky top-0 bg-white'>
              <input type='checkbox' className=' text-center mt-7 ml-4'/>
              <th className='p-4 text-center sticky'>Transaction ID</th>
              <th className='p-4 text-center'>Amount</th>
              <th className='p-4 text-center'>Description</th>
              <th className='p-4 text-center'>Date</th>
              <th className='p-4 text-center'>Time</th>
            </tr>
            <tr className='p-4 text-center'>
              <input type='checkbox' className=' text-center mt-7 ml-4'/>
              <td className='p-4 text-center'>1</td>
              <td className='p-4 text-center'>2500</td>
              <td className='p-4 text-center'>Flexy</td>
              <td className='p-4 text-center'>17/01/2025</td>
              <td className='p-4 text-center'>17:05</td>
            </tr>
            <tr className='p-4 text-center'>
              <input type='checkbox' className=' text-center mt-7 ml-4'/>
              <td className='p-4 text-center'>2</td>
              <td className='p-4 text-center'>2000</td>
              <td className='p-4 text-center'>Transport</td>
              <td className='p-4 text-center'>12/01/2025</td>
              <td className='p-4 text-center'>9:27</td>
            </tr>
            <tr className='p-4 text-center'>
              <input type='checkbox' className='p-4 text-center mt-7 ml-4'/>
              <td className='p-4 text-center'>3</td>
              <td className='p-4 text-center'>3000</td>
              <td className='p-4 text-center'>Chips</td>
              <td className='p-4 text-center'>11-21/02/2021</td>
              <td className='p-4 text-center'>18:25</td>
            </tr>
            <tr className='p-4 text-center'>
              <input type='checkbox' className=' text-center mt-7 ml-4'/>
              <td className='p-4 text-center'>4</td>
              <td className='p-4 text-center'>15000</td>
              <td className='p-4 text-center'>Lunch</td>
              <td className='p-4 text-center'>06/01/2025</td>
              <td className='p-4 text-center'>19:10</td>
            </tr>
            <tr className='p-4 text-center'>
              <input type='checkbox' className=' text-center mt-7 ml-4'/>
              <td className='p-4 text-center'>5</td>
              <td className='p-4 text-center'>2500</td>
              <td className='p-4 text-center'>AirPods</td>
              <td className='p-4 text-center'>20/01/2025</td>
              <td className='p-4 text-center'>15:20</td>
            </tr>
            <tr className='p-4 text-center'>
              <input type='checkbox' className=' text-center mt-7 ml-4'/>
              <td className='p-4 text-center'>6</td>
              <td className='p-4 text-center'>4000</td>
              <td className='p-4 text-center'>Dinner</td>
              <td className='p-4 text-center'>12/01/2025</td>
              <td className='p-4 text-center'>12:30</td>
            </tr>
            <tr className='p-4 text-center'>
              <input type='checkbox' className=' text-center mt-7 ml-4'/>
              <td className='p-4 text-center'>6</td>
              <td className='p-4 text-center'>4000</td>
              <td className='p-4 text-center'>Dinner</td>
              <td className='p-4 text-center'>12/01/2025</td>
              <td className='p-4 text-center'>12:30</td>
            </tr>
            <tr className='p-4 text-center'>
              <input type='checkbox' className=' text-center mt-7 ml-4'/>
              <td className='p-4 text-center'>6</td>
              <td className='p-4 text-center'>4000</td>
              <td className='p-4 text-center'>Dinner</td>
              <td className='p-4 text-center'>12/01/2025</td>
              <td className='p-4 text-center'>12:30</td>
            </tr>
            <tr className='p-4 text-center'>
              <input type='checkbox' className=' text-center mt-7 ml-4'/>
              <td className='p-4 text-center'>6</td>
              <td className='p-4 text-center'>4000</td>
              <td className='p-4 text-center'>Dinner</td>
              <td className='p-4 text-center'>12/01/2025</td>
              <td className='p-4 text-center'>12:30</td>
            </tr>
            <tr className='p-4 text-center'>
              <input type='checkbox' className=' text-center mt-7 ml-4'/>
              <td className='p-4 text-center'>6</td>
              <td className='p-4 text-center'>4000</td>
              <td className='p-4 text-center'>Dinner</td>
              <td className='p-4 text-center'>12/01/2025</td>
              <td className='p-4 text-center'>12:30</td>
            </tr>
            <tr className='p-4 text-center'>
              <input type='checkbox' className=' text-center mt-7 ml-4'/>
              <td className='p-4 text-center'>6</td>
              <td className='p-4 text-center'>4000</td>
              <td className='p-4 text-center'>Dinner</td>
              <td className='p-4 text-center'>12/01/2025</td>
              <td className='p-4 text-center'>12:30</td>
            </tr>
          </table>
        </div>
        <div className='absolute bottom-5 z-30 ml-72 left-0 bg-white w-4/5 h-20 drop-shadow-2xl rounded-2xl pt-10'>
            <button className='bg-blue-500 hover:bg-blue-900 text-white w-36 h-8 rounded-lg cursor-pointer absolute bottom-5 left-14'>Add expense</button>
            <button className='bg-blue-500 hover:bg-blue-900 text-white w-12 h-8 rounded-lg cursor-pointer absolute bottom-5 left-52'><FontAwesomeIcon icon={faPencilAlt} size='sm'/></button>
            <button className='bg-red-700 hover:bg-red-500 text-white w-12 h-8 rounded-lg cursor-pointer absolute bottom-5 left-68'><FontAwesomeIcon icon={faTrashAlt} size='sm' /></button>
          <h1 className='text-2xl font-bold text-black absolute bottom-5 z-30 ml-72 right-10 pt-10'>Total :<span className='text-red-600'> 29000 da</span> </h1>
        </div>
        </section>
        
    </>
  )
}

export default Aside