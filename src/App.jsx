import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Navbar from "./components/Navbar"
import Jobs from './pages/Jobs'
import GoPro from './pages/GoPro'
import Inspiration from './pages/Inspiration'
import FindDesigners from './pages/FindDesigners'
import Home from './pages/Home'
import Hero from './components/Hero'
import MovingCards from './components/MovingCards'
import HoverCards from './components/HoverCards'
import Join from './components/Join'
import MovingFooterCards from './components/MovingFooterCards'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container mx-auto py-8">
        <MovingCards />
      </div>
      <div className='mt-24'>
      <h1 className='text-center text-5xl'>Explore inspiring designs</h1>
      &nbsp;
      &nbsp;
      <HoverCards/>
      </div>
      <Join/>
      <MovingFooterCards/>
      <Footer/>
      <main>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/find-designers" element={<FindDesigners />} />
          <Route path="/inspirations" element={<Inspiration />} />
          <Route path="/go-pro" element={<GoPro />} />
          <Route path="/jobs" element={<Jobs/>}/>
        </Routes>
      </main>
    </div>
  )
}

export default App
