import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine } from '@fortawesome/free-solid-svg-icons'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { faTableColumns } from '@fortawesome/free-solid-svg-icons'
import profile from '../images/news.png';

const stati = () => {
    const Expenses = [
        { Date: '6d ago', Amount: 2000 },
        { Date: '5d ago', Amount: 2500 },
        { Date: '4d ago', Amount: 3000 },
        { Date: '2d ago', Amount: 2800 },
        { Date: 'today', Amount: 3200 },
    ]
    const income = [
        { Date: '6d ago', IncomeAmount: 4000 },
        { Date: '5d ago', IncomeAmount: 1500 },
        { Date: '4d ago', IncomeAmount: 5000 },
        { Date: '2d ago', IncomeAmount: 2900 },
        { Date: 'today', IncomeAmount: 3300 },
    ]
  return (
    <><section className='bg-slate-100 w-full h-screen mt-0 z-0 relative'>
            <aside className='bg-white w-2/12 drop-shadow-2xl h-screen'>
                <img src={logo} alt="MoneyMap logo" className='py-10' />
                <ul className='p-10 text-blue-400 text-xl'>
                    <Link to="/Dashboard"><li className='py-3 cursor-pointer  hover:text-blue-700 hover:scale-105'><FontAwesomeIcon icon={faTableColumns} className='pr-2' />Dashboard</li></Link>
                    <Link to="/Profile"><li className='py-3 cursor-pointer   hover:text-blue-700 hover:scale-105'><FontAwesomeIcon icon={faUser} className='pr-2' />Profile</li></Link>
                    <Link to="/Statistics"><li className='py-3 cursor-pointer text-blue-950 hover:text-blue-700 hover:scale-105'> <FontAwesomeIcon icon={faChartLine} className='pr-2' />Statistics</li></Link>
                    <Link to="/Settings"><li className='py-3 cursor-pointer  hover:text-blue-700 hover:scale-105'> <FontAwesomeIcon icon={faGear} className='pr-2' />Settings</li></Link>
                    <Link to="/"><li className='py-3 cursor-pointer  hover:text-blue-700 hover:scale-105'><FontAwesomeIcon icon={faRightFromBracket} className='pr-2' />Log Out</li></Link>
                </ul>
          </aside>
          <nav className='bg-white w-4/5 h-16 ml-72 drop-shadow-2xl z-40 absolute top-10 left-0 rounded-2xl'>
                  <h1 className='text-blue-900 text-2xl absolute w-12 h-12 rounded-full right-28 top-4 font-semibold'>Habib</h1>
                  <img src={profile} alt="profile img" className='absolute w-12 h-12 rounded-full right-7 top-2'/>
                  <h1 className='text-blue-900 text-2xl absolute left-10 top-4 font-bold'>Statistics</h1>          
                </nav> 
        
            <div className='bg-white w-4/5 h-3/4 ml-72 drop-shadow-2xl z-20 absolute top-36 left-0 rounded-2xl overflow-scroll'>
                <div className=' w-4/5 h-5/6 drop-shadow-2xl z-40 top-14 left-10 rounded-2xl relative'>
                  <h1 className='text-2xl text-blue-700'>Expenses</h1>
                  <ResponsiveContainer width="115%" height="40%" className={' w-4/5 h-5/6 '}>  
                    <AreaChart
                    width={1200}
                    height={200}
                    data={Expenses}
                    margin={{
                        top: 50,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                    >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                          <Area type="monotone" dataKey="Amount" stroke="#0024f3" fill="#0024f3" />
                    </AreaChart>
                  </ResponsiveContainer>

                  <h1 className='text-2xl text-blue-700'>Income</h1>
                  <ResponsiveContainer width="115%" height="40%" className={' w-4/5 h-5/6 '}>  
                    <AreaChart
                    width={900}
                    height={200}
                    data={income}
                    margin={{
                        top: 50,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                    >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                          <Area type="monotone" dataKey="IncomeAmount" stroke="#ffc658" fill="#ffc658" />
                    </AreaChart>
                </ResponsiveContainer>
                </div>
            </div>
      </section>
      </>
  )
}

export default stati