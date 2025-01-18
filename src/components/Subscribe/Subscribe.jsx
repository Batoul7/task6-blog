import React from 'react'
import { Link } from 'react-router-dom'

export default function Subscribe({style}) {
  return (
    <div className={ `pb-7.5  w-full ${style}`} data-aos="fade-up">
      <Link to={'/newsletter'} className='text-purple font-semibold mb-3 block text-center'>Newlatters</Link>
      <h1 className='text-5xl font-semibold text-mytitle dark:text-white mb-6 text-start lg:text-center'>Stories and interviews</h1>
      <p className='text-xl text-mygray dark:text-mytextdark mb-10 text-start lg:text-center'>Subscribe to learn about new product features, the latest in technology, solutions, and updates.</p>
        <form className='flex flex-col lg:flex-row justify-start items-start lg:justify-center lg:items-center gap-4'>
          <input type="email" placeholder='Enter your email' 
          className='w-3/4 md:w-1/2 lg:w-1/4 border border-[#D0D5DD] shadow-sm shadow-[#1018280D] py-3 px-4 text-mygray rounded-lg focus:outline-[#7F56D9]' />
          <input type="submit" value='Subscribe' 
          className='w-[118px] py-3 px-5 bg-purple border-purple shadow-[#1018280D] rounded-lg text-white font-medium cursor-pointer'/>
        </form>
        <span className='text-mygray dark:text-mytextdark text-sm lg:text-center block pt-2'>
          We care about your data in our <a href="#" className='underline'>privacy policy</a> </span> 
    </div>
  )
}
