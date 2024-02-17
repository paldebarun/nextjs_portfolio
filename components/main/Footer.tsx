
import React from "react";
import NextLink from "next/link";
// import {
//   RxDiscordLogo,
//   RxGithubLogo,
// } from "react-icons/rx";

import { FaGithub } from "react-icons/fa";
import { CiFacebook,CiLinkedin  } from "react-icons/ci";


import { FaLinkedin, FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full  h-full bg-transparent text-gray-200 shadow-lg py-[100px] ">
      <div className="w-full flex flex-col items-center justify-center m-auto">
     
        <div className="mb-[20px] text-[10px] sm:text-[15px] text-center">
          &copy; Debarun Pal 2024 Inc. All rights reserved
        </div>
      </div>
    </div>
  )
}

export default Footer;
