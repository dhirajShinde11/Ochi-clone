import { motion } from 'framer-motion';
import React from 'react'
import { IoIosArrowRoundUp } from "react-icons/io";

export const Landing = () => {
   
  return (
    <div data-scroll data-scroll-speed="-.4" className=' w-full h-screen bg-zinc-700 p-1'>
        <div className='textstruture   mt-[7vw] p-20 '> 
            
            {["we create","eye-opening","presentations"].map((item,index)=>{
                return <div className='masker '>
                    <div className='w-fit flex items-end'>
                    {index === 1 && <motion.div initial={{width:0}} animate={{width:"8vw"}} transition={{ease:[0.87, 0, 0.13, 1],duration: 2}} className='relative bg-cover bg-[url(https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg)] w-[8vw] h-[6vw] rounded-md mr-[1vw] -my-1 top-[0.1vw]'></motion.div>
                    }
                    <h1 className=' pt-[1vw]  uppercase leading-[0.7] font-[a] text-9xl'>{item}</h1>
                    </div> 
                </div>
            })}
        </div>
        <div className='  mt-4 border-t-[1px] border-zinc-600 font-[b]'>
            <div className='mt-6 flex justify-between px-5 items-center'>
                {["For public and private companies","From the first pitch to IPO"].map((items,index)=><p>{items}</p>)}
            
            <div className=' flex items-center gap-1'>
            <div className='btn border rounded-full px-2 text-sm py-1 uppercase  border-white text-white'>
                <h1>start the project</h1>
                
            </div>
            <span  className='btn border border-white px-1 py-1 rounded-full'>
                <IoIosArrowRoundUp className=' text-xl  rotate-[45deg] '/>
            </span>
            </div>
            </div>
            
        </div>
    </div>
  )
}
