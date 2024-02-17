
"use client"
import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";
import Link from "@/node_modules/next/link";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";
import { RxCrossCircled } from "react-icons/rx";

const Navbar = () => {
   
   const [MenuBox,SetMenuBox]=useState(false);
   
   const openMenuBox=()=>{
       
    SetMenuBox(!MenuBox);
     
   }

  return (
    <div className="w-full h-[80px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-0 sm:px-[7px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex gap-5 items-center justify-center"
        >
          <img
            src="/pngwing.com.png"
            alt="logo"
            
            className="cursor-pointer w-[25px] sm:w-[40px] hover:animate-slowspin"
          />

          <span className="font-bold text-sm md:text-lg hidden lg:block text-gray-300">
            Debarun Pal
          </span>
        </a>

        <div className="w-[400px] hidden h-full md:flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#aboutme" className="cursor-pointer">
              About me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
          </div>
        </div>

        <div className="hidden md:flex flex-row gap-4 items-center justify-center">
          {Socials.map((social,index) => (
            <Link href={social.link} key={index}>
            <Image
              src={social.src}
              alt={social.name}
              key={social.name}
              width={social.width}
              height={social.height}
            />
            </Link>
          ))}

         
        </div>

       {!MenuBox && <div className="inline md:hidden" onClick={openMenuBox}>
          <IoMenu className="text-fuchsia-300 w-[24px] h-[24px]" />
          </div>}
      </div>

      {MenuBox && <div className="text-white w-[150px] flex flex-col items-center justify-center gap-10 backdrop-blur-lg py-6 rounded-[30px] absolute top-0 bg-[#0300145e] right-0 border bg-blur border-[#7042f861]">
      <div className="flex flex-col items-end justify-between w-full h-auto  gap-[10px]  mr-[15px] px-[20px] py-[10px] rounded-[20px] text-gray-200 ">
            <a href="#aboutme" className="cursor-pointer">
              About me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
            
            
          </div>

          <div className="flex flex-col w-full gap-4 px-[20px] items-end justify-center">
          {Socials.map((social,index) => (
            <Link href={social.link} key={index}>
            <Image
              src={social.src}
              alt={social.name}
              key={social.name}
              width={social.width}
              height={social.height}
            />
            </Link>
          ))}

         
        </div>

           
          <RxCrossCircled className="w-[20px] h-[20px] " onClick={openMenuBox}/>
      </div>}
    </div>
  );
};

export default Navbar;
