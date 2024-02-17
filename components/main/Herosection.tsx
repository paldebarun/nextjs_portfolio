import React from 'react'
import HeroContent from '../sub/HeroContent'

const Herosection = () => {
  return (
    <div   className=' h-full w-full gap-[50px] flex flex-col '>
       
       <video  loop  autoPlay muted className=' rotate-180 absolute top-[-250px]  h-full w-full left-0 z-[1] object-cover'>
        <source src='/blackhole.webm'  type='video/webm'/>
       </video>
       
      <HeroContent  />
    </div>
  )
}

export default Herosection