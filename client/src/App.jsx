import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MySkills from './components/MySkills'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div  className="overflow-x-hidden">
      <Navbar/>
      <Hero/>
      <Projects/>
      <MySkills/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App