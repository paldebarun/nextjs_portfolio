'use client'

import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromTop,slideInFromLeft,slideInFromRight } from '@/utils/motion'
import { SparklesIcon } from "@heroicons/react/24/solid";

const HeroContent = () => {
  return (
    <motion.div
    initial="hidden"
    animate="visible"
    id="aboutme"
    className="flex flex-col xl:flex-row items-center justify-center gap-[70px] lg:gap-[20px] mt-80 lg:px-20 px-10  lg:mt-40 w-full z-[20]"
    >
        <div className='h-full w-full flex flex-col gap-5 justify-center m-auto text-start'>
        <motion.div
        variants={slideInFromTop}
        
        className='Welcome-box y-[15px] px-[8px] py-[4px] border border-[#7042f88b] opacity-[0.9]'
        >
        <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
        <h1 className='Welcome-text text-[13px]'>FullStack Developer </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6  sm:text-xl md:text-4xl xl:text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span >
            Providing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              the best{" "}
            </span>
            project experience
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-sm sm:text-lg  text-gray-400 my-5 max-w-[600px]"
        >
          I&apos;m a Full Stack Software Engineer with experience in Website
          . Check out my projects and skills.
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          href="#projects"
          className="py-2 button-primary text-center text-[10px] sm:text-lg text-white cursor-pointer rounded-lg max-w-[150px] sm:max-w-[200px]"
        >
          Learn More!
        </motion.a>

        </div>
  
        <motion.div
        variants={slideInFromRight(0.8)}
        className="w-screen h-full flex  justify-end  items-center"
      >
        <img
          src="/mainIconsdark.svg"
          alt="work icons"
          
          className='w-9/12 md:w-8/12 h-full xl:w-[650px]  xl:h-[650px]'
        />
      </motion.div>

    </motion.div>
  )
}

export default HeroContent