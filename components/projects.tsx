"use client";

import React, { useEffect, useState } from "react";
import { projectsData } from "@/lib/projectsData";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import ProjectCard from "./project";

const projectTypes = ["All", "Hackathon", "Personal Project", "Case Comp"];

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
      <div className="
          flex
          md:flex-row
          flex-col
          justify-between
        ">
      <SectionHeading>projects</SectionHeading>
      {/* Filtering bar */}
      <div 
      className="
        flex 
        justify-end 
        min-w-[75%]
        mb-4">
          {projectTypes.map((category) => (
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
                duration-100
                relative
                text-nowrap
                hover:opacity-60
                ${selectedCategory === category ? "border-b-2 border-blue-500" : "text-gray-700 border-none"}
              `}
              onClick={() => setSelectedCategory(category)}
            >
              <span className={`
              ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text underline-offset-4 underline text-transparent"
                  : "text-gray-700 border-none"
              }`}>
                {category}
              </span>
            </button>
          ))}
        </div>
        </div>
        <div className="
          flex-col 
          gap-y-1
          flex
          xl:flex-wrap
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
