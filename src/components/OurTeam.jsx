import React from 'react';
import { FaFacebook, FaPhone } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';

const OurTeam = () => {
  return (
    <div className='bg-gray-400 px-8 py-16 bg-opacity-10 '>
      {/* Title */}
      <div className='flex items-center gap-4 my-8'>
        <div className='h-12 w-[4px] bg-yellow-500'></div>
        <div>
          <h2 className='text-xl uppercase font-bold text-gray-400'>A Team of Exellence</h2>
          <h1 className='text-2xl uppercase font-bold font-sans text-black'>Our team</h1>
        </div>
      </div>
    <div className="grid md:grid-cols-3 gap-8 ">
      

      {/* Team Member */}
      <div className='shadow h-[60vh] relative rounded-md overflow-hidden'>
        <img src="/Images/SPA_9998-2.jpg" alt="" className='h-full w-full object-cover' />
        <div className='h-20 absolute bottom-0 right-0 w-full py-2 hover:h-32 duration-500 transition-all bg-white'>
          <h2 className='text-center font-bold uppercase text-lg'>Brian Otieno</h2>
          <p className='text-center py-2 text-gray-400 font-bold'>Director & Head Coach</p>
          <div className='flex  mt-4 justify-center '>
          <FaFacebook className='text-blue-600 hover:text-yellow-500 mx-2' />
            <FaPhone className='text-blue-600 hover:text-yellow-500 mx-2' />
            <IoMdMail className='text-blue-600 hover:text-yellow-500 mx-2' />
          </div>
        </div>
      </div>

      {/* Team Member */}
      {/* <div className='shadow h-[60vh] relative rounded-md overflow-hidden'>
        <img src="/Images/SPA_9998-2.jpg" alt="" className='h-full w-full object-cover' />
        <div className='h-20 absolute bottom-0 right-0 w-full py-2 hover:h-32 duration-500 transition-all bg-white'>
          <h2 className='text-center font-bold uppercase text-lg'>Master</h2>
          <p className='text-center py-2 text-gray-400 font-bold'>Coach</p>
          <div className='flex  mt-4 justify-center '>
          <FaFacebook className='text-blue-600 hover:text-yellow-500 mx-2' />
            <FaPhone className='text-blue-600 hover:text-yellow-500 mx-2' />
            <IoMdMail className='text-blue-600 hover:text-yellow-500 mx-2' />
          </div>
        </div>
      </div> */}
      </div>
    </div>
  );
}

export default OurTeam;
