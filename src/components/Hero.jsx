import React, { useState, useEffect } from 'react';
import { GoDotFill } from 'react-icons/go';
import Image1 from '/Images/SPA_0204.webp';
import Image2 from '/Images/DSC_0107.webp';
import Image3 from '/Images/SPA_6758.webp';
import Image4 from '/Images/SPA_9998-2.jpg';
import Image5 from '/Images/DSC_0076.webp';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const imageGroups = [
    [Image1, Image2, Image3],
    [Image3, Image4, Image5],
    [Image4, Image5, Image1]
  ];
  const messages = [
    "Unlocking the potential - At Sokaplus Sporting, we're dedicated to nurturing the next generation of football stars. Our academy offers a unique blend of professional coaching, and a supportive environment where players can thrive and excel.",
    "Creating a balance - We believe that players do not have to choose to either play or study. With many examples of professionals local and abroad who have excelled in both, we too encourage players to strike a balance.",
    "The responsible player - A talented player will easily study and play football if he is responsible enough. We believe in collaboration with our parents to get the players a good support system they can rely on."
  ];
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % imageGroups.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className='relative h-screen w-screen overflow-hidden'>
      <div className="absolute top-4 right-4 text-white z-10">
        <p>Contact us at: info@sokaplus.com</p>
      </div>
      <div className="h-full w-full flex transition-transform duration-1000 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {imageGroups.map((group, index) => (
          <div key={index} className="h-full w-full flex-shrink-0 flex">
            {group.map((image, idx) => (
              <div key={idx} style={{ backgroundImage: `url(${image})` }} className='bg-cover bg-center w-1/3 h-full' />
            ))}
          </div>
        ))}
      </div>
      <div className="absolute top-0 w-full left-0 h-full bg-opacity-20 bg-red-600 px-4 flex flex-col justify-center">
        <div className='w-full md:w-2/3 md:ml-8'>
          <h1 className='text-white text-3xl md:text-5xl font-semibold mb-4'>{messages[currentSlide].split(" - ")[0]}</h1>
          <p className='hidden md:block text-gray-200 text-xl mb-4'>
            {messages[currentSlide].split(" - ")[1]}
          </p>
          <button onClick={() => navigate('/contact')} className='text-lg px-8 py-2 font-semibold font-mono bg-white text-blue-600'>Join Us Today</button>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {imageGroups.map((_, index) => (
              <GoDotFill
                key={index}
                className={`text-2xl cursor-pointer ${currentSlide === index ? 'text-blue-500' : 'text-gray-100'}`}
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
