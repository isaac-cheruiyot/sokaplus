import React from 'react';
import { FaDumbbell, FaFutbol, FaChalkboardTeacher } from 'react-icons/fa';

const TrainingExperience = () => {
  return (
    <div className="flex justify-center items-center py-8 bg-sky-600 bg-opacity-90 text-white">
      <div className="flex flex-col  md:flex-row md:space-x-8 ">
        {/* Description Section */}
        <div className="md:w-1/2 p-8">
          <div className='flex gap-4 items-center my-4'>
            <div className='h-16 w-[4px] bg-yellow-300'></div>
            <div>
            <h1 className='uppercase font-bold text-gray-200 text-xl'>Sokaplus Sporting</h1>
          <h2 className="text-2xl font-bold text-black uppercase ">Training Program</h2>
          </div>
          </div>
          <div className="flex items-center mb-4">
            <FaFutbol className="mr-2 text-yellow-500" size={30} />
            <p className='font-bold capitalize text-xl font-sans underline'>Technical Skills Development</p>
          </div>
          <p className="mb-4 text-gray-300">
            Our training program focuses on developing technical skills such as dribbling, passing, shooting, and ball control. Through a combination of drills, exercises, and game simulations, players enhance their abilities on the field.
          </p>
          
          <div className="flex items-center mb-4">
            <FaChalkboardTeacher className="mr-2 text-yellow-500" size={30} />
            <p className='font-bold capitalize text-xl font-sans underline'>Tactical Understanding</p>
          </div>
          <p className="mb-4 text-gray-300">
            Understanding the tactics and strategies of the game is crucial for success. Our program includes sessions dedicated to teaching players how to read the game, make smart decisions on the field, and execute tactical plans effectively.
          </p>

          <div className="flex items-center mb-4">
            <FaDumbbell className="mr-2 text-yellow-500" size={30} />
            <p className='font-bold capitalize text-xl font-sans underline'>Strength & Conditioning</p>
          </div>
          <p className='text-gray-300'>
            Physical fitness plays a vital role in soccer performance. Our training regimen incorporates strength training, conditioning exercises, and agility drills to improve endurance, speed, and overall athleticism.
          </p>
        </div>
        <div className="md:w-1/2">
          <img src={'/Images/DSC_0076.png'} alt="Soccer Training" className="w-full h-auto " />
        </div>
      </div>
    </div>
  );
}

export default TrainingExperience;
