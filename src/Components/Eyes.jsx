import React, { useEffect, useState } from 'react';

const Eyes = () => {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      let mousex = e.clientX;
      let mousey = e.clientY;

      let deltaX = mousex - window.innerWidth / 2;
      let deltaY = mousey - window.innerHeight / 2;

      let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle-180);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className='eyes w-full min-h-screen overflow-hidden'>
      <div data-scroll data-scroll-speed="-.4" className='relative w-full h-screen flex items-center justify-center bg-[url(https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg)]'>
        <div className='absolute flex gap-[3vw] items-center justify-center'>
          <div className='h-[26vh] w-[14vw] rounded-full text-center items-center flex justify-center  bg-white'>
            <div className='relative h-[60%] w-[60%] bg-black rounded-full'>
              <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 line w-full h-6'>
                <div className='w-6 h-6 rounded-full bg-white'></div>
              </div>
            </div>
          </div>
          <div className='h-[26vh] w-[14vw] rounded-full  items-center flex justify-center  bg-white'>
            <div className='relative h-[60%] w-[60%] bg-black rounded-full'>
              <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 line w-full h-6'>
                <div className='w-6 h-6 rounded-full bg-white'></div>
              </div>
            </div>
          </div>
          
          
          
        </div>
        
      </div>
    </div>
  );
};

export default Eyes;
