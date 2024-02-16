import React from 'react'
import HeroContent from '../sub/HeroContent'

const Herosection = () => {
  return (
    <div className=' h-full w-full flex flex-col '>
       
       <video  loop  autoPlay muted className=' mt-[100px] md:mt-0  h-auto  w-full object-cover'>
        <source src='/blackhole.webm'  type='video/webm'/>
       </video>
       
      <HeroContent />
    </div>
  )
}

export default Herosection