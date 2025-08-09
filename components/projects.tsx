"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { projectsData } from "@/lib/projectsData";
import { useSectionInView } from "@/lib/hooks";
import ProjectCard from "./ProjectCard";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";

const projectTypes = ["All", "Hackathon", "Personal Project", "Data Science"];

export default function Projects() {
  const { ref: inViewRef } = useSectionInView("Projects", 0.75);
  const sectionRef = useRef<HTMLElement | null>(null);
  const setSectionRefs = useCallback(
    (node: HTMLElement | null) => {
      sectionRef.current = node;
      inViewRef(node);
    },
    [inViewRef]
  );
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);
  const [isCollapsing, setIsCollapsing] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const thirdItemRef = useRef<HTMLDivElement | null>(null);
  const moreButtonRef = useRef<HTMLButtonElement | null>(null);
  const listContainerRef = useRef<HTMLDivElement | null>(null);
  const [lessStickyTop, setLessStickyTop] = useState<number | null>(null);
  const [lessStickyLeftOffset, setLessStickyLeftOffset] = useState<
    number | null
  >(null);

  const handleShowMore = () => {
    const btn = moreButtonRef.current;
    const third = thirdItemRef.current;
    const list = listContainerRef.current;
    if (btn) {
      const btnRect = btn.getBoundingClientRect();
      setLessStickyTop(btnRect.top - 4);
    }
    if (third && list) {
      const thirdRect = third.getBoundingClientRect();
      const listRect = list.getBoundingClientRect();
      const leftOffset = thirdRect.left + thirdRect.width + 16 - listRect.left;
      setLessStickyLeftOffset(leftOffset);
    }
    setShowAll(true);
  };

  const handleShowLess = () => {
    const target = thirdItemRef.current;
    setIsCollapsing(true);
    setShowAll(false);
    if (target) {
      target.scrollIntoView({
        behavior: prefersReducedMotion ? "auto" : "smooth",
        block: "start",
      });
    }
    // Allow exit animations to complete before clearing collapsing state
    const durationMs = prefersReducedMotion ? 0 : 300;
    window.setTimeout(() => {
      setIsCollapsing(false);
    }, durationMs + 50);
  };

  useEffect(() => {
    setShowAll(false);
    setLessStickyTop(null);
    setLessStickyLeftOffset(null);
    setIsCollapsing(false);
  }, [selectedCategory]);

  const filteredProjects = projectsData.filter((project) =>
    selectedCategory === "All" ? true : project.category === selectedCategory
  );
  const displayedProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 3);

  // Recompute horizontal position on resize while expanded (constrained to list container)
  useEffect(() => {
    if (!showAll) return;
    const recompute = () => {
      const third = thirdItemRef.current;
      const list = listContainerRef.current;
      if (third && list) {
        const thirdRect = third.getBoundingClientRect();
        const listRect = list.getBoundingClientRect();
        const leftOffset =
          thirdRect.left + thirdRect.width + 16 - listRect.left;
        setLessStickyLeftOffset(leftOffset);
      }
    };
    window.addEventListener("resize", recompute);
    return () => window.removeEventListener("resize", recompute);
  }, [showAll]);

  return (
    <section
      ref={setSectionRefs}
      id="projects"
      className="
      scroll-mt-28
      flex
      justify-center
      "
    >
      <div
        className="
        flex
        flex-col
        justify-center
        max-w-[40rem]
        xl:w-[60rem]"
      >
        <div className="flex flex-col items-center gap-y-4">
          <div className="text-2xl flex font-mono justify-center font-semibold">
            things I&apos;ve built
          </div>
          <div
            className="
          rounded-full
          px-4
          border-black
          border-[1px]
          flex
          max-w-fit
          mb-4"
          >
            <div className="relative flex">
              {projectTypes.map((category, index) => (
                <button
                  key={category}
                  className={`
                    px-2 
                    py-2
                    mx-2
                    md:max-h-[2rem]
                    h-auto
                    text-xs 
                    transition
                    duration-300
                    text-nowrap
                    ${
                      selectedCategory === category
                        ? "hover:opacity-100"
                        : "hover:opacity-60"
                    }
                    relative
                  `}
                  onClick={() => setSelectedCategory(category)}
                >
                  <span
                    className={`
                  transition duration-300
                  ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent"
                      : "text-gray-700"
                  }`}
                  >
                    {category}
                  </span>
                </button>
              ))}
              <div
                className="absolute px-4 bottom-0 h-0.5 bg-blue-500 transition-all duration-300"
                style={{
                  left:
                    projectTypes
                      .slice(0, projectTypes.indexOf(selectedCategory))
                      .reduce((acc, type) => acc + type.length, 0) *
                      8 +
                    13 +
                    (projectTypes.indexOf(selectedCategory) % 3 != 0
                      ? projectTypes.indexOf(selectedCategory) * 17
                      : projectTypes.indexOf(selectedCategory) * 11),
                  width: `${
                    selectedCategory != "Personal Project"
                      ? selectedCategory.length * 8
                      : 110
                  }px`,
                }}
              ></div>
            </div>
          </div>
        </div>
        <div
          ref={listContainerRef}
          className="
          flex-col 
          gap-y-1
          flex
          flex-wrap
          xl:gap-x-4
          items-center 
          justify-center"
        >
          <AnimatePresence initial={false}>
            {displayedProjects.map((project, index) => {
              const shouldAnimate = showAll && index >= 3;
              const delay = shouldAnimate ? (index - 3) * 0.05 : 0;
              const content = <ProjectCard {...project} />;
              const isThirdCollapsed =
                !showAll && index === 2 && filteredProjects.length > 3;
              const isThird = index === 2;

              if (isThirdCollapsed) {
                return (
                  <div
                    key={`${project.title}-${index}`}
                    ref={thirdItemRef}
                    className="relative scroll-mt-28"
                  >
                    {content}
                    <button
                      ref={moreButtonRef}
                      onClick={handleShowMore}
                      className="absolute left-full ml-4 -translate-y-6 bottom-1 text-sm text-gray-700 px-3 py-1 rounded-md cursor-pointer transition-colors transition-shadow duration-200 hover:bg-gray-100 hover:shadow-sm"
                      aria-label="Show more projects"
                    >
                      <span className="mr-2">↓</span>
                      <span>More</span>
                    </button>
                  </div>
                );
              }

              return shouldAnimate ? (
                <motion.div
                  key={`${project.title}-${index}`}
                  initial={
                    prefersReducedMotion
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: -8 }
                  }
                  animate={{ opacity: 1, y: 0 }}
                  exit={
                    prefersReducedMotion
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: -8 }
                  }
                  transition={
                    prefersReducedMotion
                      ? { duration: 0 }
                      : { duration: 0.3, ease: "easeOut", delay }
                  }
                >
                  {content}
                </motion.div>
              ) : (
                <div
                  key={`${project.title}-${index}`}
                  ref={isThird ? thirdItemRef : undefined}
                  className={isThird ? "scroll-mt-28" : undefined}
                >
                  {content}
                </div>
              );
            })}
          </AnimatePresence>

          {showAll &&
            lessStickyTop !== null &&
            lessStickyLeftOffset !== null && (
              <div
                className="sticky self-start z-20 pointer-events-none"
                style={{ top: lessStickyTop }}
              >
                <button
                  onClick={handleShowLess}
                  className="text-sm text-gray-700 px-3 py-1 -translate-y-8 rounded-md cursor-pointer duration-200 hover:bg-gray-100 hover:shadow-sm pointer-events-auto"
                  style={{ marginLeft: lessStickyLeftOffset }}
                  aria-label="Show fewer projects"
                >
                  <span className="mr-2">↑</span>
                  <span>Less</span>
                </button>
              </div>
            )}
        </div>
      </div>
    </section>
  );
}