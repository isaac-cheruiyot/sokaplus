import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './pages/Home'
import LineUp from './pages/LineUp'
import Trainings from './pages/Trainings'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Layout/>}>
      <Route path='/' index element={<Home/>}/>
      <Route path='/about' index element={<About/>}/>
      <Route path='/trainings' index element={<Trainings/>}/>
      <Route path='/lineup' index element={<LineUp/>}/>
      <Route path='/contact' index element={<Contact/>}/>
    </Route>
   </Routes>
   </BrowserRouter>
  )
}

export default App
