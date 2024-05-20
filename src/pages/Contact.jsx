import React, { useState } from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { MdEmail, MdLocationPin, MdPhone } from 'react-icons/md'

const Contact = () => {
  const [success, setSuccess] = useState(false)

  const handleSubmit= (e)=>{
    e.preventDefault()
    setSuccess(!success)

  }
  return (
    <div className='md:pt-20'>
      <div className='w-full h-40 overflow-hidden relative'>
        <img src="/Images/SPA_0037.jpg" alt=""  className='object-cover w-full h-full'/>
        <h2 className='absolute top-1/4 left-1/4 md:left-[42%] text-white font-bold text-4xl'>Contact us</h2>
      </div>
    <div className='grid md:grid-cols-2 gap-8 px-4 md:px-8 py-8  md:py-16'>
      <div className='bg-gray-300 rounded-lg p-4 md:p-8'>
        <h2 className='text-lg pb-2 font-bold font-sans'>Contact Us</h2>
        {/* 1 */}
        <div className='flex items-center mt-4 gap-8'>
          <MdPhone size={30} className='hover:text-yellow-500'/>
          <div className='font-medium'>
            <p>+(254) 712345678</p>
            <p>+(254) 712345678</p>
          </div>
        </div>
        {/* 2 */}
        <div className='flex items-center mt-4 gap-8'>
          <MdEmail size={30} className='hover:text-yellow-500'/>
          <div className='font-medium'>
            <p>sokaplusporting@gmail.com</p>
            <p></p>
          </div>
        </div>
        {/* 3 */}
        <div className='flex items-center mt-4 gap-8'>
          <MdLocationPin size={30} className='hover:text-yellow-500'/>
          <div className='font-medium'>
            <p>Kwihota Secondary School</p>
            <p className='capitalize'>Ruiru, Eastern Bypass opp hospital</p>
          </div>
        </div>
        {/* 4 */}
        <div className='flex items-center mt-16 gap-4 md:gap-8 w-1/2 mx-auto'>
          <FaInstagram size={25}  className='hover:text-yellow-500'/>
          <FaFacebook size={25}  className='hover:text-yellow-500'/>
          <FaYoutube size={25}  className='hover:text-yellow-500'/>
          <FaTwitter size={25}  className='hover:text-yellow-500'/>
        </div>
      </div>

      {/* contact text */}
      {success ?(
        <div className='grid place-items-center'>
          <h1>Message sent Successfully, We  will reach you soon</h1>

        </div>
      ): (
        <div className='border rounded-lg p-4 md:p-8'>
          <h2 className='text-lg pb-2 font-bold font-sans'>Send us a Shoot</h2>
          <form onSubmit={handleSubmit} action="">
            <input type="text" className='border border-gray-300 w-full py-2 px-4 rounded-md' placeholder='Your Name' />
            <input type="text" className='border mt-2 border-gray-300 w-full py-2 px-4 rounded-md' placeholder='Subject' />
            <input type="email" className='border mt-2 border-gray-300 w-full py-2 px-4 rounded-md' placeholder='Your Email' />
            <textarea name="" id="" cols="30" placeholder='Your Comment' rows="4" className='border mt-2 border-gray-300 w-full py-2 px-4 rounded-md'></textarea>
          <button className='bg-yellow-500 text-white font-medium px-8 py-2 rounded-lg'>Send</button>
          </form>
        </div>
        )}
    </div>
    </div>
  )
}

export default Contact