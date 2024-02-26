import React from 'react'
import { Nav } from './Components/Nav'
import { Landing } from './Components/Landing'
import Marquee from './Components/Marquee'
import About from './Components/About'
import Eyes from './Components/Eyes'
import Featured from './Components/Featured'
import LocomotiveScroll from 'locomotive-scroll';

const App = () => {
  
const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className=' w-full min-h-screen bg-zinc-700 text-white  '>
      <Nav/>
      <Landing/>
      <Marquee/>
      <About/>
      <Eyes/>
      <Featured/>
    </div>
  )
}

export default App