'use client'

import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import SectionHeading from "./section-heading";
import useMeasure from "react-use-measure";
import { experiencesData } from "@/lib/data";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useSectionInView } from "@/lib/hooks";
import { useSpring, animated } from '@react-spring/web'


const CustomTimeline = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  const { ref } = useSectionInView("Experience", 0.75);

  const handleToggle = (index: number) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <section 
      ref={ref}
      id="experience" 
      className="scroll-mt-28">
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
        flex-col">
        <SectionHeading>
          experience
        </SectionHeading>
        <div 
        className="
          absolute 
          mt-14
          w-1 
          bg-gray-200 
          left-6 
          top-0 
          h-[94%]">
        </div>
        {experiencesData.map((exp, index) => {
            const {
              title,
              org,
              tag,
              location,
              description,
              icon: Icon,
              date,
            } = exp;
            const [measureRef, { height: viewHeight }] = useMeasure();
            const isExpanded = expanded === index;
            const expandProps = useSpring({
              config: { tension: 120, friction: 20 },
              from: {
                height: 0,
                opacity: 0
              }, 
              to: {
                height: isExpanded ? viewHeight : 0,
                opacity: 1
              },
            })

        return (
          <div 
            key={index} 
            className="
              relative 
              flex 
              items-start 
              mb-8">
            <div 
              className="
                bg-white 
                border-2 
                border-gray-200 
                rounded-full 
                p-3 
                absolute 
                left-0
                top-10
                transform 
                -translate-y-1/2"
            >
              <Icon 
                size={26}
              />
            </div>
            <div
              className="
                bg-gray-100 
                border 
                border-gray-200 
                rounded-lg 
                w-full
                md:w-[36rem]
                p-6 
                ml-16 
                cursor-pointer 
                transition-shadow 
                duration-300 
                hover:shadow-md"
              onClick={() => handleToggle(index)}
            >
              <div 
              className="
                bg-gradient-to-r 
                from-indigo-500 
                to-purple-500 
                text-white 
                text-xs 
                rounded-md 
                px-2 
                py-1 
                mb-2 
                inline-block"
              >
                {exp.tag}
              </div>
              <h3 
              className="
                font-bold 
                text-lg"
              >
                {exp.title} 
                <span className="font-light">&nbsp; @ {exp.org}</span>
              </h3>
              <div 
              className="
              text-gray-500 
              text-sm 
              mb-2">
                {exp.date}
              </div>
              <animated.div style={{overflow: "hidden", ...expandProps}}>
                <div ref={measureRef}>
              {isExpanded && (
                <>
                  <div 
                    className="
                    flex 
                    items-center 
                    text-gray-600 
                    text-sm mb-2">
                    <FaLocationDot className="mr-2" />
                    {exp.location}
                  </div>
                  <p className="text-gray-700">{exp.description}</p>
                </>
              )}
              </div>
              </animated.div>
            </div>
          </div>
        );
        })}
      </div>
      </div>
    </section>
  );
};

export default CustomTimeline;
