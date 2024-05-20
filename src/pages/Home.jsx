import React from 'react'
import Hero from '../components/Hero'
import Programs from '../components/Programs'
import Aboutus from '../components/Aboutus'
import OurTeam from '../components/OurTeam'
import TrainingExperience from '../components/TrainingExperience'
import Gallery from './Gallery'
import Blog from '../components/Blog'
import AprilSchedule from '../components/AprilSchedule'

const Home = () => {
  return (
    <div className=''>
      <Hero/>
      <Programs/>
      <Aboutus/>
      <AprilSchedule/>
      <TrainingExperience/>
      <Gallery/>
      <OurTeam/>
      <Blog/>
    </div>
  )
}

export default Home