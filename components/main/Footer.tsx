'use client'
import React from "react";
import NextLink from "next/link";
import {
  RxDiscordLogo,
  RxGithubLogo,
} from "react-icons/rx";

import { FaLinkedin, FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Social Media</div>
            <a href='https://www.linkedin.com/in/debarun-pal-3ba144216' className="flex flex-row items-center my-[15px] cursor-pointer">
              <FaLinkedin />
              <div className="text-[15px] ml-[6px]">LinkedIn</div>    
            </a>

            <a href='https://github.com/' className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxGithubLogo />
              <div className="text-[15px] ml-[6px]">GitHub</div>    
            </a>

            <a href='https://www.facebook.com/' className="flex flex-row items-center my-[15px] cursor-pointer">
              <FaFacebook />
              <div className="text-[15px] ml-[6px]">Facebook</div>    
            </a>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">About</div>
            <div className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">Become Sponsor</span>    
            </div>
            <div className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">Learning about me</span>    
            </div>
            <div className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">paldebarun27@gmail.com</span>    
            </div>
          </div>
        </div>
        <div className="mb-[20px] text-[15px] text-center">
          &copy; Debarun Pal 2024 Inc. All rights reserved
        </div>
      </div>
    </div>
  )
}

export default Footer;
