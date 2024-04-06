"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { skillsData } from "@/lib/data";

export default function Skills() {
  const { ref } = useSectionInView("Skills", 0.5);
  return (
    <section 
      id="skills" 
      ref={ref}
      className="scroll-mt-28 px-4">
      <SectionHeading>Skills</SectionHeading>
      <div className="flex justify-center my-4 mx-2 lg:mx-16">
        <div className="gap-y-8 justify-between gap-x-8 text-slate-700 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 ">
          {skillsData.map((item, index) => (
            <div key={index} className="flex flex-col items-center shadow-lg">
              <div className="rounded-full min-w-[80px] max-w-[80px] min-h-[80px] max-h-[80px] border-2 border-slate-700 bg-gray-100 p-4 relative text-4xl flex justify-center items-center z-10 shadow-inset">
                {item.icon}
              </div>
              <div className="text-center rounded-lg border-2 border-slate-700 px-6 py-6  sm:min-w-[10rem] sm:max-w-[25rem] pt-[60px] mt-[-50px] relative z-0 lg:min-h-[12.5rem] md:min-h-[14.5rem]">
                <h3 className="font-bold mb-4 text-xl">{item.category}</h3>
                <div className="flex justify-center">
                  <ul className="text-center flex flex-wrap justify-center gap-2 mt-auto">
                    {item.skills.map((skill, index) => (
                      <li
                        className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
                        key={index}
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
