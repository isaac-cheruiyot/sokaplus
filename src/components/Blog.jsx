import React from 'react'
import { Link } from 'react-router-dom'

const Blog = () => {
  return (
    <div className='bg-sky-600 py-16 md:px-8 px-4 flex flex-col space-y-4 justify-center md:justify-between items-center'>
      <p className="text-3xl font-sans capitalize font-bold text-white text-center md:text-start ">Unlock Your Football Talent today</p>
      <Link to={'/contact'}>
          <button className={`bg-white  py-2 px-8 border-2 border-black text-black  font-mono font-semibold`}>Join Us</button>
            </Link>
    </div>
  )
}

export default Blog