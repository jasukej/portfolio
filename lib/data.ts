import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { MdOutlineComputer, MdDesignServices } from "react-icons/md";
import { TfiStatsUp } from "react-icons/tfi";
import { ImStatsDots } from "react-icons/im";
import { BiStats } from "react-icons/bi";
import injurney from "@/public/injurney.png";
import readbuddy from "@/public/ReadBuddy.png";
import boltbootcamp from "@/public/boltbootcamp.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "ReadBuddy",
    description:
      "A browser extension to customize text and display features specially designed for dyslexic and visually impaired users.",
    tags: ["HTML", "Tailwind", "Javascript", "Google Cloud Platform"],
    imageUrl: readbuddy,
  },
  {
    title: "Injurney",
    description:
      "A web application for users with injuries to generate and integrate personalized AI care plans into their lifestyle.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "MongoDB", "OpenAI"],
    imageUrl: injurney,
  },
  {
    title: "2024 BOLT Bootcamp",
    description:
      "Utilising data-driven insights and predictive ML models to create a cohesive, business-oriented solution to credit card fraud.",
    tags: ["Python", "Machine Learning", "CNN", "Tensorflow", "Data Analytics", "Marketing"],
    imageUrl: boltbootcamp,
  },
] as const;

export const skillsData = [
  {
    category: "Front-End",
    icon: "🖥 ",
    skills:["HTML",
    "Tailwind",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js"]
  },
  {
    category: "Back-End",
    icon: "🚪",
    skills:["Node.js + Express",
    "Google Cloud Platform",
    "Python",
    "MongoDB",
    "Java"]
  },
  {
    category: "ML & Analytics",
    icon: "📊",
    skills:["Python",
    "R",
    "Tableau",
    "Tensorflow",
    "Google Analytics"]
  },
  {
    category: "Others",
    icon: "🥞",
    skills:["Communication",
    "Marketing",
    "Presentation",
    "Figma",
    "Adobe Illustrator"]
  },

] as const;

export const experiencesData = [
  {
    title: "VP Web Development",
    org: "INFISA Santa Laurensia",
    tag: "volunteer",
    location: "Jakarta, Indonesia",
    description: 
    "Developed a dynamic website using Editor X, JavaScript and jQuery, enhancing user interaction and creating a responsive layout. Led a team of 12 volunteers that executed design, coding, and content updates.",
    icon: React.createElement(MdOutlineComputer),
    date: "Oct 2021 - Jan 2023",
  }, 
  {
    title: "VP Design",
    org: "Educating Lives Indonesia",
    tag: "volunteer",
    location: "Jakarta, Indonesia",
    description: 
    "Led the design of an educational platform with a focus on UX/UI principles, enhancing user experience and content accessibility in social media posts and promotional materials.",
    icon: React.createElement(MdDesignServices),
    date: "Oct 2021 - July 2022",
  }, 
  {
    title: "B2C (Marketing) Portfolio Member",
    org: "AIESEC in UBC",
    tag: "volunteer",
    location: "Vancouver, BC",
    description: 
    "Conducted class shouts and boothings to promote AIESEC’s exchange opportunities. Designed compelling newsletters and promotional materials, ensuring consistent branding across digital platforms.",
    icon: React.createElement(ImStatsDots),
    date: "Jan 2024 - Present",
  }, 
] as const;