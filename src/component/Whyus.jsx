import React from 'react'

const Whyus = () => {
  return (
    <>
          <section className='bg-custom-blue text-slate-200  grid-cols-1 grid-rows-2 justify-center items-center px-20 pb-20'>
              <h1 className='h-32 pt-10 justify-center text-center text-4xl font-bold'>Why Us</h1>  
              <div className='grid grid-cols-3 grid-rows-1 gap-10'>
                  <div className='bg-blue-500 grid grid-cols-1 grid-rows-2 justify-center items-center rounded-xl p-5 text-center'>
                      <h2 className='text-2xl font-bold'>Personalized Financial Dashboard</h2>
                      <p>Users can view a snapshot of their finances, including balances, expenses, savings, and goals.</p>
                  </div>
                  <div className='bg-blue-500 grid grid-cols-1 grid-rows-2 justify-center items-center rounded-xl p-5 text-center text-xl'>
                      <h2 className='text-2xl font-bold'>Budget Planning</h2>
                      <p>Allows users to create and manage budgets for different categories (e.g., groceries, entertainment, bills)</p>
                  </div>
                  <div className='bg-blue-500 grid grid-cols-1 grid-rows-2 justify-center items-center rounded-xl p-5 text-center text-xl'>
                      <h2 className='text-2xl font-bold'>Expense Tracking</h2>
                      <p>Automatically tracks and categorizes user expenses by syncing with bank accounts or manual input.</p>
                  </div>
                  <div className='bg-blue-500 grid grid-cols-1 grid-rows-2 justify-center items-center rounded-xl p-5 text-center text-xl'>
                      <h2 className='text-2xl font-bold'>Real-Time Analytics</h2>
                      <p>Offers insights and analytics on spending habits, helping users make smarter financial decisions.</p>
                  </div>
              </div>
        </section>  
    </>
  )
}

export default Whyus