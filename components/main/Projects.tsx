"use client";
import React from "react";
import ProjectCard from "../sub/ProjectCard";
import { projectdata } from "@/constants/index";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";


// import './styles.css';

// import { Autoplay } from 'swiper/modules';
// import './styles.css';
// import { Pagination } from 'swiper/modules';

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>

      {/* <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView='1'
        modules={[Autoplay]}
        className="mySwiper  h-auto flex items-center"
      >
     {
      projectdata.map((project,index)=>(

        <SwiperSlide key={index} >
       
         <ProjectCard
            src={project.source}
          title={project.title}
          description={project.description} />

        </SwiperSlide>
      ))

     }


      </Swiper> */}

      <Carousel       opts={{
        align: "start",
      }}
      className="w-8/12 sm:w-9/12  max-w-3xl md:max-w-5xl z-[20]">
        <CarouselContent >
          {projectdata.map((project, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              
              
              <ProjectCard
                src={project.source}
                title={project.title}
                description={project.description}
                url={project.link}
              />
             
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Projects;
