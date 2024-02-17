import React from 'react'
import HeroContent from '../sub/HeroContent'

const Herosection = () => {
  return (
    <div   className=' h-full w-full flex flex-col '>
       
       <video  loop  autoPlay muted className=' rotate-180 absolute top-[-650px] xl:top-[-600px]  h-full w-full left-0 z-[1] object-cover'>
        <source src='/blackhole.webm'  type='video/webm'/>
       </video>
       
      <HeroContent  />
    </div>
  )
}

export default Herosection