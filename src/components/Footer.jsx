import React from 'react'
import { MdFacebook, MdSearch } from 'react-icons/md'
import { FaInstagram, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='bg-black bg-opacity-90 px-4 grid  md:px-8 py-16 md:flex items-start gap-12'>
      <div>
        <img src="/Images/logo.webp" alt="" className='h-20 w-20' />
      </div>
      <div className='md:w-3/4'>
        <div className='flex items-center  text-white gap-4 '>
          <MdSearch size={20}/> 
          <MdFacebook size={20}/>
          <FaInstagram size={20}/>
          <FaYoutube size={20}/> 
        </div>

        <div className='mt-8 grid md:flex md:w-3/4 md:justify-between'>
          <p className='md:text-md text-lg  font-semibold text-white '>Privacy Policy</p>
          <p className='md:text-md text-lg font-semibold text-white '>Terms & Conditions</p>
          <p className='md:text-md text-lg font-semibold text-white '>Cookies</p>
          <p className='md:text-md text-lg font-semibold text-white '>Trainings</p>
          <p className='md:text-md text-lg font-semibold text-white '>Contact Us</p>
          <p className='md:text-md text-lg font-semibold text-white '>Enroll</p>
          <p className='md:text-md text-lg font-semibold text-white '>About Us</p>

        </div>

        <p className=' text-gray-300 text-sm  font-medium mt-4 '> © Copyright Sokaplus Sporting Football Club & Academy . All Right Reserved</p>

      </div>

    </div>
  )
}

export default Footer