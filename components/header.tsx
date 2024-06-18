"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { links } from "@/lib/links";
import clsx from "clsx";

import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";

import { useActiveSectionContext } from "@/context/active-section-context";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  // State to handle the background visibility
  const [showBackground, setShowBackground] = useState(false);

  // Effect to add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // State to handle if navigation menu (burger) is open
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header
      className="
      z-[999] 
      absolute"
    >
      <div
        className="
        wrap 
        justify-between 
        items-center 
        w-full 
        h-[4.5rem] 
        sm:h-[3.25rem]"
      >
        <div
          className="
        fixed 
        sm:top-6 
        top-1.5 
        left-0 
        h-[4.5rem] 
        sm:h-[3.25rem] 
        flex 
        items-center 
        px-4 
        sm:px-6 
        z-10
        md:translate-y-4.5 
        transition-all 
        duration-300"
        >
          <a href="#home">
            {/* <Image
              src="/logo-black.png"
              alt="Logo"
              width={40}
              height={20}
              layout="fixed"
            /> */}
          </a>
        </div>

        {/* Hamburger */}
        <button
          className="
            z-10 
            fixed 
            right-0 
            top-7 
            px-4 
            sm:px-6 
            sm:hidden"
          onClick={() => {
            console.log("Before clicking:", isNavOpen);
            setIsNavOpen(!isNavOpen);
            console.log("After clicking:", !isNavOpen);
          }}
        >
          {isNavOpen ? (
            <MdClose className="h-6 w-6" />
          ) : (
            <FiMenu className="h-6 w-6" />
          )}
        </button>

        {/* Collapsible Menu */}
        {isNavOpen && (
          <nav
            className="
            flex 
            fixed 
            top-[4.5rem] 
            left-0 
            w-full 
            bg-white
            sm:hidden 
            shadow-md"
          >
            <ul
              className="
              flex 
              flex-col 
              items-center 
              w-full 
              pb-2"
            >
              {links.map((link) => (
                <li
                  key={link.hash}
                  className="
                  w-full 
                  text-center"
                >
                  <Link
                    className="
                      block 
                      py-3 
                      px-3 
                      hover:text-gray-950 
                      transition"
                    href={link.hash}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}

        {/* Main Navigation */}
        <div>
          <motion.div
            className={`
              fixed 
              top-0 
              left-1/2 
              transform 
              -translate-x-1/2 
              h-[4.5rem] 
              w-auto 
              sm:top-6 
              sm:h-[3.25rem] 
              sm:w-[24rem] 
              sm:rounded-full 
              transition-all 
              duration-300 ${
                showBackground
                  ? "rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 sm:bg-opacity-100 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] dark:bg-gray-200 dark:bg-opacity-75"
                  : "bg-transparent"
              }`}
            initial={{ y: -100, x: "-50%", opacity: 0 }}
            animate={{ y: 0, x: "-50%", opacity: 1 }}
          ></motion.div>

          <nav
            className="
            hidden 
            md:flex 
            fixed
            top-[0.15rem] 
            left-1/2 
            h-12 
            -translate-x-1/2 
            py-2 
            sm:top-[1.3rem] 
            sm:h-[initial] 
            py:0 
            sm:flex 
            items-center"
          >
            <ul
              className="
              flex 
              w-auto
              flex-wrap 
              items-center 
              justify-center 
              gap-y-1 
              text-[0.9rem] 
              font-medium 
              text-gray-500 
              sm:w-[initial] 
              sm:gap-5 
              sm:flex-nowrap"
            >
              {links.map((link) => (
                <motion.li
                  className="
                    h-3/4 
                    flex 
                    items-center 
                    justify-center 
                    relative"
                  key={link.hash}
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                >
                  <Link
                    className={clsx(
                      "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition",
                      {
                        "text-gray-950": activeSection === link.name,
                      }
                    )}
                    href={link.hash}
                    onClick={() => {
                      setActiveSection(link.name);
                      setTimeOfLastClick(Date.now());
                    }}
                  >
                    {link.name}

                    {link.name === activeSection && (
                      <motion.span
                        className={`
                        ${showBackground && "bg-gray-100"} 
                        rounded-full 
                        absolute 
                        inset-0 
                        -z-10 
                        h-[80%] 
                        mt-1`}
                        layoutId="activeSection"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      ></motion.span>
                    )}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
