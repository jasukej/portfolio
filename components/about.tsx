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
    <section ref={ref} className="scroll-mt-28" id="about">
      <SectionHeading>A Bit About Myself</SectionHeading>
      <div className="mx-4 flex justify-center gap-x-8">
        <div className="flex flex-col md:flex-row lg:flex-row gap-y-8">
          <div className="flex flex-col min-w-[15rem] min-h-[15rem]">
            {activeSection === "About" && (
              <TypeAnimation
                sequence={["Hey,", 1200, () => setHeyAnimated(true)]}
                speed={25}
                className="font-bold mb-0 text-7xl max-w-[12rem]"
                cursor={false}
              />
            )}
            {activeSection === "About" && heyAnimated && (
              <TypeAnimation
                sequence={["I'm Kez!", 1000]}
                speed={25}
                className="font-bold mb-4 text-7xl max-w-[12rem]"
                cursor={true}
              />
            )}
          </div>

          <div className="flex flex-col gap-y-4">
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
            >
              <h3 className="bg-gradient-to-r from-cyan-500 via-indigo-500 to-blue-500 bold text-xl lg:text-2xl bg-clip-text inline-block text-transparent h-[40px] font-bold">
                Currently a...
              </h3>
              <li>Bachelor of Science Student @ UBC</li>
              <li>B2C Member @ AIESEC in UBC</li>
              <li>Tutor @ The C.O.D.E Intiative</li>
              <li>Incoming Cohort @ SEEDS 2024</li>
            </motion.div>

            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
            >
              <h3 className="bg-gradient-to-r from-cyan-500 via-indigo-500 to-blue-500 bold text-xl lg:text-2xl bg-clip-text inline-block text-transparent h-[40px] font-bold">
                My interests span ...
              </h3>
              <li>ML Research</li>
              <li>Business Analytics</li>
              <li>UI/UX Design</li>
              <li>Events Planning</li>
            </motion.div>

            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
            >
              <h3 className="bg-gradient-to-r from-cyan-500 via-indigo-500 to-blue-500 bold text-xl lg:text-2xl bg-clip-text inline-block text-transparent h-[40px] font-bold">
                I like ...
              </h3>
              <li>🏸 smacking birdies</li>
              <li>🚶‍♂️ walking insane distances</li>
              <li>🥘 cooking up delicious meals</li>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
