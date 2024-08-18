"use client";

import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import SectionHeading from "./section-heading";
import useMeasure from "react-use-measure";
import { experiencesData } from "@/lib/experiencesData";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useSectionInView } from "@/lib/hooks";
import { useSpring, animated } from "@react-spring/web";
import ExperienceItem from "./ExperienceItem";

const CustomTimeline = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  const { ref } = useSectionInView("Experience", 0.75);

  const handleToggle = (index: number) => {
    setExpanded(expanded === index ? null : index);
  }

  return (
    <section ref={ref} id="experience" className="scroll-mt-28">
      <div
        className="
        flex
        justify-center
      "
      >
        <div
          className="
        relative 
        flex 
        flex-col"
        >
          <div className="text-2xl font-mono font-semibold mb-4">
            what I've been up to
          </div>
          <div
            className="
          absolute 
          mt-14
          w-1 
          bg-gray-200 
          left-6 
          top-0 
          h-[94%]"
          ></div>
          {experiencesData.map((exp, index) => (
            <ExperienceItem 
              key={index}
              exp={exp}
              index={index}
              expanded={expanded}
              handleToggle={handleToggle}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomTimeline;
