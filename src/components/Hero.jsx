import React, { useState, useEffect } from 'react';
import { GoDotFill } from 'react-icons/go';
import Image1 from '/Images/SPA_0204.webp';
import Image2 from '/Images/DSC_0107.webp';
import Image3 from '/Images/SPA_6758.webp';
import Image4 from '/Images/SPA_9998-2.jpg';
import Image5 from '/Images/DSC_0076.webp';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const images = [Image1, Image2, Image3, Image4, Image5];
  const navigate = useNavigate()

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide % images.length) + 1);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 1 ? images.length : prevSlide - 1
    );
  };
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div style={{ backgroundImage: `url(${images[currentSlide ]})` }} className='bg-cover  h-screen w-screen  relative'>
      <div className="absolute top-0 w-full left-0 h-full md:h-[100vh] bg-opacity-20 bg-red-600 px-4 ">

        <div className='absolute bottom-8 w-full   right-0  md:w-2/3 md:left-0 px-4 md:px-8'>
          <h1 className='text-white text-3xl w-full md:text-5xl font-semibold mb-4'>Unlock Your Football Potential</h1>
          <p className='hidden md:block text-gray-200 text-xl   mb-4'>
             At Sokaplus Sporting, we're dedicated to nurturing the next generation of football stars. Our academy offers a unique blend of professional coaching, state-of-the-art facilities, and a supportive environment where players can thrive and excel. shorter engaging and enticing</p>
          <button onClick={()=>navigate('/contact')} className='text-lg px-8 py-2 font-semibold font-mono bg-white  text-blue-600'>Join Us Today</button>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <GoDotFill
                key={index}
                className={`text-2xl cursor-pointer ${
                  currentSlide === index ? 'text-blue-500' : 'text-gray-100'
                }`}
                onClick={() => goToSlide(index)}
              />
            ))}
      </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
