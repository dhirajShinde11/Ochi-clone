import React from 'react'

const About = () => {
  return (
    <div className=' w-full py-20  text-black  font-[b] rounded-tl-[50px] leading-[3vw] tracking-normal rounded-tr-[50px] bg-[#CDEA68]'>
        <h1 className='text-[3vw]  mr-[10vw] px-10'>Ochi is a strategic partner for fast-growing tech businesses that need
            to raise funds, sell products, explain complex ideas, and hire great people.</h1>

        <div className='border-t font-[b] border-t-zinc-500 flex  justify-between  mt-[4vw]'>
            <div className=' p-10'>
                <h1 className='text-[3vw] flex'>Our approach</h1>
                <button className='bg-black text-white rounded-full px-10 py-2 mt-[2vw] flex items-center gap-5'>Read More
                <div className='chotu rounded-full  bg-white px-1 py-1'></div>
                </button>
                
            </div>
            <div className='w-[40vw] h-[60vh] bg-[url(https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg)] mr-[7vw] mt-[5vw] rounded-2xl'></div>
        </div>
    </div>
  )
}

export default About