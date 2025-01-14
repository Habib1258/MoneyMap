import React from 'react'
import Newsl from '../images/news.png'

const News = () => {
  return (
      <>
          <section className='bg-blue-800 h-96 text-slate-200 grid-cols-1 grid-rows-3 py-10 relative'>
            <h1 className='text-2xl text-center font-bold'>Join Our NewsLetter</h1>
            <div className='h-16 px-6 justify-center flex grid-cols-2 grid-rows-1 align-middle '>
                    <div className='w-1/2 h-16 overflow-hidden'>
                      <h1 className='text-slate-50 text-3xl font-bold absolute top-52 left-60 pl-5 z-20'>MoneyMap Blog</h1>
                      <img src={Newsl} alt="Newsletter" className='absolute top-36 left-60  w-72 rounded-xl h-auto drop-shadow-xl hover:scale-105' />
                    </div>
                    <div className='w-1/2 h-48 text-black bg-slate-100 rounded-3xl drop-shadow-xl absolute top-36 right-52'>
                      <h1 className='text-2xl px-5 pt-5 z-10'>Join our newsletter to recive the Latest News</h1>
                      <h1 className='text-slate-400 text-lg pl-7 z-10'>All the news about MoneyMap</h1>
                      <div className='w-10/12 h-10 bg-slate-200 p-5 rounded-full z-50 overflow-hidden relative mx-16 mt-5'>
                        <input type="text" className='w-10/12 bg-slate-200 absolute top-2 left-5 placeholder:text-black focus:outline-none' placeholder="enter email here" />
                        <button className='bg-blue-500 hover:bg-blue-800 h-10 w-24 z-10 rounded-r-full absolute top-0 right-0'>Send</button>
                      </div>
                    </div>
              </div>
        </section>
      </>
  )
}

export default News