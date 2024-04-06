"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useSectionInView } from "@/lib/hooks";
import { experiencesData } from "@/lib/data";
import { FaLocationDot } from "react-icons/fa6";

export default function Experience() {
  const {ref} = useSectionInView("Experience", 0.7);
  return (
    <section 
    id="experience" 
    className="scroll-mt-28" 
    ref={ ref }>
      <SectionHeading>Experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((exp, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              visible={true}
              contentStyle={{
                background: "#f3f4f6",
                boxShadow: "none",
                border: "1px solid rgb(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight: "0.4rem solid #9ca3af",
              }}
              date={exp.date}
              iconStyle={{
                background: "white",
                fontSize: "1.5rem",
              }}
              icon={exp.icon}
            >
              <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-1 text-white text-xs max-w-fit rounded-md px-2 mb-2">
                {exp.tag}
              </div>
              <h3 className="font-bold">
                {exp.title} <span className="font-light">@ {exp.org}</span>
              </h3>
              <p className="!mt-1 text-gray-600 font-light">
                <span className="flex-row flex gap-x-2 items-center font-light text-md">
                  <FaLocationDot />
                  {exp.location}
                </span>
              </p>
              <p className="!mt-2 !font-light">{exp.description}</p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
