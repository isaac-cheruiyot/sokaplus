import React from 'react';
import { FaClock, FaFlagCheckered } from 'react-icons/fa';
import { IoMdFootball } from 'react-icons/io'

const Programs = () => {
  return (
    <div className='py-12 px-4 md:px-0'>
      <h1 className='text-2xl md:text-4xl text-center text-blue-800 font-bold underline-offset-4 decoration-4 '>Our Programs</h1>
      <div className=' w-full md:w-4/5 grid md:grid-cols-3 mt-8 gap-4 md:gap-8 mx-auto'>

        {/* Program 1 */}
        <div className='hover:shadow-md border justify-center flex flex-col border-gray-400 hover:border-yellow-300 hover:shadow-yellow-500 p-4 rounded'> 
          <div>
            <FaClock className='text-6xl text-blue-800 mx-auto' />
            <h2 className='text-xl font-semibold text-center'>Regular  Training Program</h2>
          </div>
          <p className='text-center line-clamp-4 mt-4'>Unleash Your Potential in a Fun and Nurturing Environment. 
            Our program offers expert guidance, personalized assessment reports,
             and engaging interschool activities to foster talent growth.</p>
          <button className=' mt-4 mx-auto border-2 px-8 py-2 font-mono font-semibold text-yellow-500 border-yellow-500'>Learn More</button>
        </div>

        {/* Program 2 */}
        <div className='hover:shadow-md border justify-center flex flex-col border-gray-400
         hover:border-yellow-300 hover:shadow-yellow-500 p-4 rounded'> 
          <div>
            <FaFlagCheckered className='text-6xl text-blue-800 mx-auto' />
            <h2 className='text-xl font-semibold 
            text-center'>Holiday Training Program</h2>
          </div>
          <p className='text-center mt-4 line-clamp-4'>Elevate Your Skills Beyond the Classroom. Join our Holiday program for tailored training sessions, thrilling tournaments, enriching camps, and much more.</p>
          <button className=' mt-4 mx-auto border-2 px-8 py-2 font-mono font-semibold text-yellow-500 border-yellow-500'>Learn More</button>
        </div>

        {/* Program 3 */}
        <div className='hover:shadow-md border justify-center flex flex-col
         border-gray-400 hover:border-yellow-300 hover:shadow-yellow-500 p-4 rounded'> 
          <div>
            <IoMdFootball className='text-6xl text-blue-800 mx-auto' />
            <h2 className='text-xl font-semibold text-center'>One on One Training</h2>
          </div>
          <p className='text-center mt-4 line-clamp-4'>Expand Your Horizons on a Global Scale. Have one on one
          sessions to further unlock your game and focus on career in football ,
           opening doors to limitless opportunities.</p>
          <button className=' mt-4 mx-auto border-2 px-8 py-2 font-mono font-semibold text-yellow-500 border-yellow-500'>Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Programs;
