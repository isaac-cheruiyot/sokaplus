import React from 'react'
import { Link } from 'react-router-dom'
import Lottie from 'react-lottie';
import animationData from '../assets/Animation.json'

const Aboutus = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
  
    <div  className='bg-gray-400 mt-8 bg-opacity-10  py-8 items-center   grid gap-16 md:grid-cols-2'>
      <img src="/Images/SPA_0037.jpg" alt="" className='h-full' />
      <div className='px-8  md:py-16'>
        <div className='flex items-center gap-4 my-4'>
          <div className='h-12 w-[4px] bg-yellow-500'></div>
          <div>
            <h2 className='text-xl uppercase font-bold text-gray-400'>About Sokaplus Sporting Academy</h2>
            <h1 className='text-2xl uppercase font-bold font-sans textblack'>Where Young Athletes Thrive</h1>
          </div>
        </div>
        <p className='text-md text-gray-700'>Established in 2021 and proudly affiliated with the Kenya Football Federation, Nairobi West Branch, Sokaplus Academy is your premier destination for soccer training excellence in Kenya. Located in Ruiru, along Nairobi's eastern bypass, our academy provides a nurturing environment for athletes of all ages to hone their skills and develop their passion for the game.
          </p>
          <p className='mt-4 text-md text-gray-700'>Join us for action-packed weekend training sessions starting at 9 am and running until 12 pm. From our youngest players to the senior team, everyone is welcome to participate and experience the thrill of the game. At Sokaplus Sporting, we're committed to fostering both athletic prowess and personal growth, ensuring that every player reaches their full potential on and off the field. Come and be a part of our vibrant community as we strive for greatness together!</p>
          <Link to={'/about'}>
            <button className='text-blue-500 text-md mt-4 flex items-center uppercase font-medium  underline underline-offset-2 decoration-2'>More About  <Lottie 
              options={defaultOptions}
                height={40}
                width={40}
              /></button>
           
          </Link>
      </div>
    </div>
  )
}

export default Aboutus 