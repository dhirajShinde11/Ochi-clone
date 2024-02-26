import React from 'react'
import { motion } from "framer-motion"

const Marquee = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="0.01" className='w-full py-[5vw] bg-[#004D43] font-[a] overflow-hidden uppercase rounded-tl-[50px] rounded-tr-[50px]'>
        <div className=' flex border-t border-b   '> 
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{repeat:Infinity, ease:"linear",duration:5}} className='leading-none text-[30vw] font-semibold text-nowrap pr-[4vw] '>We are ochi</motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{repeat:Infinity, ease:"linear",duration:5}} className='leading-none text-[30vw] font-semibold text-nowrap pr-[4vw] '>We are ochi</motion.h1>
        </div>
    </div>
  )
}

export default Marquee