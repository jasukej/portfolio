"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { useActiveSectionContext } from "@/context/active-section-context";
import React, { useEffect, useState } from "react";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";
import { fadeIn } from "../variants";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function About() {
  const { ref } = useSectionInView("About", 0.5);

  const { activeSection } = useActiveSectionContext();

  const [heyAnimated, setHeyAnimated] = useState(false);

  return (
    <section 
      ref={ref} 
      className="scroll-mt-32 lg:scroll-mt-[15rem]" 
      id="about">
      <div className="
        mx-4 
        mt-4 
        mb-20 
        flex 
        justify-center 
        gap-x-8">
        <div className="
          flex 
          flex-col 
          md:flex-row 
          lg:flex-row 
          gap-y-8">
          <div className="
            flex 
            flex-col
            min-w-[15rem] 
            min-h-[15rem]">
            {activeSection === "About" && (
              <TypeAnimation
                sequence={["Hey,", 1200, () => setHeyAnimated(true)]}
                speed={25}
                className="
                  font-bold
                  mb-0 
                  text-7xl 
                  max-w-[12rem]"
                cursor={false}
              />
            )}
            {activeSection === "About" && heyAnimated && (
              <TypeAnimation
                sequence={["I'm Kez!", 1000]}
                speed={25}
                className="
                  font-bold 
                  mb-4 
                  text-7xl 
                  max-w-[12rem]"
                cursor={true}
              />
            )}
          </div>

          <div className="
            flex 
            flex-col 
            gap-y-4">
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
            >
              <h3 className="
                bg-gradient-to-r 
                from-cyan-500 
                via-indigo-500 
                to-blue-500 
                bold text-xl 
                lg:text-2xl 
                bg-clip-text 
                inline-block 
                text-transparent 
                h-[40px] 
                font-bold
              ">
                Currently a...
              </h3>
              <li>BSc. Computer Science Student <span className="text-gray-500 font-light">@ UBC</span></li>
              <li>Engagement Coordinator <span className="text-gray-500 font-light">@ nwPlus</span></li>
              <li>SWE Intern <span className="text-gray-500 font-light">@ Kawan Lama Group</span></li>
              <li>CS TA + Support Analyst <span className="text-gray-500 font-light">@ UBC</span></li>
            </motion.div>

            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
            >
              <h3 className="
                bg-gradient-to-r 
                from-cyan-500 
                via-indigo-500 
                to-blue-500 
                bold 
                text-xl 
                lg:text-2xl 
                bg-clip-text 
                inline-block 
                text-transparent 
                h-[40px] 
                font-bold">
                Talk to me about...
              </h3>
              <li>Machine Learning</li>
              <li>Data Analytics</li>
              <li>Web Development</li>
              <li>Community Engagement</li>
            </motion.div>

            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
            >
              <h3 className="
                bg-gradient-to-r 
                from-cyan-500 
                via-indigo-500 
                to-blue-500 
                bold 
                text-xl 
                lg:text-2xl 
                bg-clip-text 
                inline-block 
                text-transparent 
                h-[40px] 
                font-bold">
                I also like...
              </h3>
              <div>🏸 &nbsp; smacking birdies</div>
              <div>🚶 &nbsp; walking insane distances</div>
              <div>🥘 &nbsp; cooking up comforting meals</div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
