import React from 'react';
import Blog from '../components/Blog';

const About = () => {
  return (
    <div className=" pt-20">
      <div className='relative h-[40vh] overflow-hidden'>
        <div className='absolute top-0 left-0 w-full h-full bg-black  bg-opacity-30'></div>
        <img src="/Images/SPA_0071.webp" alt="" className='w-full h-full object-cover' />
      <h2 className=" absolute text-center top-1/4 left-8 text-3xl font-bold mb-4 text-white">About Sokaplus Sporting Academy</h2>
      </div>

      {/* Message from the CEO */}
      <div className='grid md:grid-cols-3 gap-12 p-8'>
      <div className="mb-8 md:col-span-2 w-3/4">
        <h3 className="text-xl font-semibold mb-2">Message from the CEO</h3>
        <p>
          Greetings,<br/><br/>
          As the CEO of Sokaplus Sporting Academy, I am delighted to welcome you to our vibrant community dedicated to nurturing the next generation of soccer talent. At Sokaplus, we believe in fostering a culture of excellence both on and off the field. Our mission is to provide young athletes with a holistic approach to soccer development, empowering them to achieve their full potential while instilling values of discipline, teamwork, and resilience.
        </p>
      </div>
      <img src="/Images/SPA_9998-2.jpg" alt="" />
      </div>

      {/* Our Story */}
      <div className="md:mb-8 p-8">
        <h3 className="text-xl font-semibold mb-2">Our Story</h3>
        <p>
          Established in 2021, Sokaplus Sporting Academy has quickly emerged as a leading destination for soccer training excellence in Kenya. Our journey began with a vision to create a nurturing environment where young athletes could thrive and develop their passion for the beautiful game. Located in Ruiru, along Nairobi's eastern bypass, our state-of-the-art facilities provide the perfect setting for athletes of all ages to train, compete, and grow.
        </p>
      </div>

      {/* Our Approach */}
      <div className="md:mb-8 p-8">
        <h3 className="text-xl font-semibold mb-2">Our Approach</h3>
        <p>
          At Sokaplus, we pride ourselves on our comprehensive approach to player development. Our experienced coaching staff is dedicated to providing personalized training programs tailored to each player's unique strengths and areas for improvement. Through a combination of technical skill development, tactical understanding, and physical conditioning, we aim to develop well-rounded athletes capable of excelling at all levels of the game.
        </p>
      </div>

      {/* Our Programs */}
      <div className="md:mb-8  p-8">
        <h3 className="text-xl font-semibold mb-2">Our Programs</h3>
        <p>
          We offer a wide range of programs designed to cater to players of all ages and skill levels. From our youth development academy for aspiring young talents to our elite training programs for advanced players, there is something for everyone at Sokaplus. Our programs include:
        </p>
        <ul className="list-disc pl-6">
          <li>Youth Development Academy</li>
          <li>Elite Training Programs</li>
          <li>Regular Training Programs</li>
        </ul>
      </div>

      {/* Our Partnerships */}
      <div className="mb-8 p-8">
        <h3 className="text-xl font-semibold mb-2">Our Partnerships</h3>
        <p>
          At Sokaplus, we understand the importance of collaboration in achieving our goals. That's why we are proud to partner with a range of organizations and institutions that share our commitment to soccer development. Our partners include local schools, community organizations, and corporate sponsors who help support our mission and provide valuable resources for our athletes.
        </p>
      </div>

      {/* Join Us */}
      <div className="mb-8 p-8">
        <h3 className="text-xl font-semibold mb-2">Join Us</h3>
        <p>
          Whether you're a young player just starting your soccer journey or an experienced athlete looking to take your game to the next level, there's a place for you at Sokaplus Sporting Academy. Join us and become part of our vibrant community as we strive for excellence together.
        </p>
      </div>
      <Blog/>
    </div>
  );
}

export default About;
