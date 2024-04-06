"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { fadeIn } from "../variants";

import { useSectionInView } from "@/lib/hooks";

import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { TfiDownload } from "react-icons/tfi";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);

  return (
    <section
      ref={ref}
      className="min-h-[85vh] lg:min-h-[78vh] w-screen"
      id="home"
    >
      <div className="w-full flex flex-col lg:flex-row items-center justify-center min-h-screen gap-y-8 sm:px-6 px-12">
        <div className="flex flex-col gap-y-8 sm:items-center lg:max-w-[560px] lg:ml-4">
          <div className="text-center flex-1 lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-6xl lg:text-7xl font-bold py-4"
            >
              <span>Kezia Rijadi</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
            >
              <span className="mi-4 text-5xl lg:text-6xl">I am a </span>
              <TypeAnimation
                sequence={[
                  "developer",
                  2000,
                  "data analyst",
                  2000,
                  "designer",
                  2000,
                ]}
                speed={50}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 bold text-5xl lg:text-6xl bg-clip-text inline-block text-transparent h-[75px] lg:min-w-[345px]"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mt-2 mb-8 md:max-w-md lg:mx-0 sm:px-6 md:px-6 lg:px-0"
            >
              Student at the University of British Columbia passionate about
              creating sustainable and accessible tech-driven solutions using{" "}
              <span className="bold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text inline-block text-transparent">
                AI
              </span>{" "}
              and{" "}
              <span className="bold  bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text inline-block text-transparent">
                data analytics.
              </span>{" "}
              I'm always experimenting, whether its refining an innovative
              technical project or cooking up delicious meals.
            </motion.p>
            <div className="gap-y-8 mb-12">
              <div className="flex max-w-max gap-x-6 items-center lg:mx-0 mx-auto">
                <a
                  href="https://drive.google.com/file/d/1hl4UF9lg-gOkF9caRICqTaO_I1q0ry5p/view?usp=sharing"
                  target="_blank"
                >
                  <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-700 hover:to-blue-900 text-white font-bold py-2 px-4 rounded-full mb-4 flex align-items">
                    <div className="flex flex-row gap-x-2">
                      Resume <TfiDownload className="mt-[5px] text-[14px]" />
                    </div>
                  </button>
                </a>
              </div>
              {/* socials */}
              <div className="flex gap-x-6 text-[24px] max-w-max mx-auto lg:mx-0">
                <a href="https://github.com/jasukej" target="_blank">
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/roselina-kezia-rijadi-515522283/"
                  target="_blank"
                >
                  <FaLinkedin />
                </a>
                <a href="https://www.instagram.com/kezrijadi/" target="_blank">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/*image*/}
        <div className="lg:flex lg:flex-1 max-w-[320px] lg:max-w-[420px] overflow-hidden animate-profile-animate">
          <img
            src="/kezrijadi.png"
            alt="Kez Rijadi"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
