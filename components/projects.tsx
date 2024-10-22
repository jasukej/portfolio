"use client";

import React, { useEffect, useState } from "react";
import { projectsData } from "@/lib/projectsData";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import ProjectCard from "./ProjectCard";

const projectTypes = ["All", "Hackathon", "Personal Project", "Data Science"];

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.75);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = projectsData.filter((project) => 
    selectedCategory === "All" ? true : project.category === selectedCategory
  )

  return (
    <section 
      ref={ref} 
      id="projects" 
      className="
      scroll-mt-28
      flex
      justify-center
      ">
      <div className="
        flex
        flex-col
        justify-center
        max-w-[40rem]
        xl:w-[60rem]">
        <div className="flex flex-col items-center gap-y-4">
        <div className="text-2xl flex font-mono justify-center font-semibold">
          things I&apos;ve built
        </div>
        {/* Filtering bar */}
        <div 
        className="
          rounded-full
          px-4
          border-black
          border-[1px]
          flex
          max-w-fit
          mb-4">
            <div className="relative flex">
              {projectTypes.map((category, index) => (
                <button
                  key={category}
                  className={`
                    px-2 
                    py-2
                    mx-2
                    md:max-h-[2rem]
                    h-auto
                    text-xs 
                    transition
                    duration-300
                    text-nowrap
                    hover:opacity-60
                    relative
                  `}
                  onClick={() => setSelectedCategory(category)}
                >
                  <span className={`
                  transition-colors duration-300
                  ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent"
                      : "text-gray-700"
                  }`}>
                    {category}
                  </span>
                </button>
              ))}
              <div 
                className="absolute px-4 bottom-0 h-0.5 bg-blue-500 transition-all duration-300"
                style={{
                  left: projectTypes.slice(0, projectTypes.indexOf(selectedCategory)).reduce((acc, type) => acc + type.length, 0) * 8 + 13 + (projectTypes.indexOf(selectedCategory) % 3 != 0 ? projectTypes.indexOf(selectedCategory) * 17 : projectTypes.indexOf(selectedCategory) * 11),
                  width: `${selectedCategory != "Personal Project" ? selectedCategory.length * 8 : 110}px`
                }}
              ></div>
            </div>
          </div>
        </div>
        <div className="
          flex-col 
          gap-y-1
          flex
          flex-wrap
          xl:gap-x-4
          items-center 
          justify-center">
          {filteredProjects.map((project, index) => (
            <React.Fragment key={index}>
              <ProjectCard {...project} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}