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
        max-w-[40rem]">
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
                px-4 
                py-2
                mx-2 
                rounded-md
                md:max-h-[2rem]
                h-auto
                text-xs 
              ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-cyan-500 to-blue-500  text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        </div>
        <div className="
          flex-col 
          flex 
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
