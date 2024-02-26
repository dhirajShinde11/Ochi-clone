import { delay, motion, useAnimation } from 'framer-motion'
import React, { useState } from 'react'

const Featured = () => {
    const cards = [useAnimation(),useAnimation()]
    const handlehover = (index)=>{
        cards[index].start({y:0})
    }
    const handlehoverend = (index)=>{
        cards[index].start({y:"100%"})
    }
  return (
    <div className='w-full py-[2vw] font-[b]'>
        <div className=' p-[4vw]'>
        <h1 className=' text-[4vw] '>Featured Projects</h1>
        </div>
        <div className=' relative w-full h-[80vh] border-t p-[4vw] flex gap-[2vw]'>
            <motion.div onHoverStart={()=>handlehover(0)} onHoverEnd={()=>handlehoverend(0)} className='container  w-[45vw] h-[70vh] bg-white overflow-hidden bg-cover bg-[url(https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png)] rounded-xl'>
            <div className=' absolute  overflow-hidden top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] '>
                <h1 className=' font-[b]  text-[#CDEA68] text-[6vw]'>
                    {"FYDE".split("").map((item,index)=><motion.span initial={{y:"100%" }} animate={cards[0]} transition={{ease:[0.22, 1, 0.36, 1],delay:index*.1}}  className=' inline-block '>{item}</motion.span>)}
                </h1>
            </div>
           
            </motion.div>
            <motion.div  onHoverStart={()=>handlehover(1)} onHoverEnd={()=>handlehoverend(1)} className='container   w-[45vw] h-[70vh] bg-white overflow-hidden bg-cover bg-[url(https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg)] rounded-xl'>
            <div className=' absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] overflow-hidden '>
                <h1 className=' text-[#CDEA68] font-[b] text-[6vw]'>
                {"VISE".split("").map((item,index)=><motion.span initial={{y:"100%" }} animate={cards[1]} transition={{ease:[0.22, 1, 0.36, 1],delay:index*.1}}  className=' inline-block '>{item}</motion.span>)}
                </h1>
            </div>
            <div className='container w-[45vw] h-[70vh]  rounded-xl'></div>
            </motion.div>
        </div>
    </div>
  )
}

export default Featured