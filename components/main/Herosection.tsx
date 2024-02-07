import React from 'react'
import HeroContent from '../sub/HeroContent'

const Herosection = () => {
  return (
    <div className='relative h-full w-full flex flex-col'>
       
       <video loop autoPlay muted className='absolute left-0 top-[-300px] z-[1] h-full w-full object-cover'>
        <source src='/blackhole.webm' type='video/webm'/>
       </video>
       
      <HeroContent />
    </div>
  )
}

export default Herosection