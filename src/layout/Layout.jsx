import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

const Layout = () => {
  return (
    <div className='relative  overflow-clip'>
      <Navbar/>
      <div className=''>
      <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}

export default Layout