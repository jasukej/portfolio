"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { fadeIn } from "../variants";

import { useSectionInView } from "@/lib/hooks";
import { TfiDownload } from "react-icons/tfi";
import SocialBar from "./socialbar";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);

  return (
    <section
      ref={ref}
      className="
        min-h-[85vh] 
        lg:min-h-[78vh] 
        max-w-screen"
      id="home"
    >
      <div className="
        w-full 
        flex 
        flex-col 
        lg:flex-row 
        items-center 
        justify-center 
        min-h-screen 
        gap-y-8 
        sm:px-6 
        px-12">
          {/*image*/}
        <div className="
          block
          lg:hidden 
          my-4
          max-w-[320px] 
          lg:max-w-[420px] 
          overflow-hidden 
          animate-profile-animate">
          <Image
            src="/kezrijadi.jpg"
            alt="Kez Rijadi"
            className="w-full h-full object-cover"
            width={320}
            height={298.93}
          />
        </div>
        <div className="
          flex 
          flex-col 
          gap-y-8 
          sm:items-center 
          lg:max-w-[560px] 
          lg:ml-4">
          <div className="
          text-center
          md:flex-none
          flex-1 
          lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="
                text-6xl
                lg:text-7xl 
                font-bold py-4"
            >
              <span>
                Kezia Rijadi
              </span>
            </motion.h1>

            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="
                flex
                flex-col
                items-center
                justify-center
                font-light
                md:flex-row
                md:justify-start
                md:items-end
                h-auto
              "
            >
              <span className="
                mt-4
                mb-2 
                md:my-4
                text-5xl 
                lg:text-6xl
                text-nowrap
                ">
                  I love to&nbsp;
              </span>
              <TypeAnimation
                sequence={[
                  " develop",
                  2000,
                  " ideate",
                  2000,
                  " design",
                  2000,
                ]}
                speed={50}
                className="
                  bg-gradient-to-r 
                  from-cyan-500
                  to-blue-500 
                  bold 
                  text-5xl 
                  lg:text-6xl 
                  bg-clip-text 
                  block
                  md:inline-block
                  md:mb-[6px] 
                  text-transparent 
                  h-[60px]
                  lg:h-[70px] 
                  lg:min-w-[345px]"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="
                mt-2 
                mb-8 
                md:max-w-md 
                lg:mx-0 
                sm:px-6 
                md:px-6 
                lg:px-0"
            >
              Incoming sophomore at the University of British Columbia
              developing <span className="
                bold 
                bg-gradient-to-r 
                from-cyan-600 
                to-blue-600 
                bg-clip-text 
                inline-block 
                text-transparent">
                  software
                </span> for a sustainable and accessible future.
              I'm dedicated to bringing impactful ideas to life, whether by creating useful applications or fostering opportunities for fellow students.
            </motion.p>
            <div className="
              flex
              flex-col
              xl:justify-between
              xl:max-w-[75%]
              xl:flex-row
              xl:items-center
              gap-y-8 
              mb-12">
              <div className="
                flex 
                max-w-max 
                gap-x-6 
                items-center
                lg:mx-0 
                mx-auto">
                <a
                  href="https://drive.google.com/file/d/1l0NXVSVCMEhrJktTbgIQPwep_ACBrDQI/view?usp=sharing"
                  target="_blank"
                >
                  <button className="
                    bg-gradient-to-r 
                    from-cyan-500 
                    to-blue-500 
                    hover:opacity-[70%]
                    hover:transition
                    duration-200
                    text-white 
                    font-bold 
                    py-2 
                    px-4 
                    rounded-full 
                    mb-4
                    xl:mb-0
                    align-items
                    flex 
                    flex-row 
                    gap-x-2">
                      Resume 
                      <TfiDownload className="mt-[5px] text-[14px]" />
                  </button>
                </a>
              </div>
              {/* socials */}
              <SocialBar />
            </div>
          </div>
        </div>
        {/*image*/}
        <div className="
          hidden
          lg:flex 
          lg:flex-1 
          max-w-[320px] 
          lg:max-w-[420px] 
          overflow-hidden 
          animate-profile-animate">
          <Image
            src="/kezrijadi.jpg"
            alt="Kez Rijadi"
            className="w-full h-full object-cover"
            width={270}
            height={250}
          />
        </div>
      </div>
    </section>
  );
}
