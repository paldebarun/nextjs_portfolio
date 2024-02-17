import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  url_link:string
}

const ProjectCard = ({ src, title, description ,url_link}: Props) => {
  return (
    <a href={url_link} >
    <div className="relative overflow-hidden h-[500px] rounded-lg shadow-lg border border-[#2A0E61]">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </div>
    </a>
  );
};

export default ProjectCard;
