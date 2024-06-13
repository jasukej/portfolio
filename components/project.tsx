import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { projectsData } from "@/lib/projectsData";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { FaExternalLinkSquareAlt, FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import Badge from "./Badge";

type ProjectProps = (typeof projectsData)[number];

export default function ProjectCard({
  title,
  description,
  tags,
  imageUrl,
}: ProjectProps) {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);
 
  return (
    <motion.div
      onClick={() => {router.push(`projects/${title}`)}}
      className="
        group
        border-[2px]
        border-grey-800 
        mb-3
        min-h-[5rem]
        max-w-[25rem]
        rounded-lg 
        sm:mb-8 
        last:mb-0"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      >
      <div
        className="
        flex
        flex-col
        p-4
        border-gray-800
        ">
        <div 
        className="
          max-h-[18rem]
          overflow-hidden
          mb-2
          border-black
          border-[1px]
          rounded-lg
          relative
        ">
          <Image 
            src={imageUrl}
            alt={`${title}-alt`}
            style={{
              objectFit:"cover",
              filter: isHovered ? "none" : "sepia(1) saturate(0.8) hue-rotate(190deg) opacity(1) drop-shadow(0 0 5px rgba(0, 0, 0, 0.2))",
              //transition: "0.3s ease-in-out",
            }}
          />
          <div
            className="
              absolute
              inset-0
              bg-cover
              bg-center
              opacity-20
              transition-opacity
              duration-300
              group-hover:opacity-0
            "
            style={{ backgroundImage: "url('/blue-overlay.jpeg')" }}
          ></div>
        </div>
        <div
        className="">
          <div 
          className="
            flex-row
            flex
            justify-between
          ">
            <div 
            className="
              text-xl 
              font-semibold">
              {title}
            </div>
            <div
            className="
              max-w-[30%]
              flex-row
              flex
              gap-4
              items-center
              justify-center
            "
            >
              <FaGithub 
                size={24}
              />
              <FiExternalLink 
                size={24}
              />
            </div>
          </div>
          <div 
          className="
            mt-2 
            text-sm
            text-neutral-900
            ">
            {description}
          </div>
          <div
          className="
            flex
            flex-row
            overflow-x-scroll
            max-w-full
            gap-x-3
            mt-2
          ">
            {tags.map((tech:string, index:any) => {
              return (
                <Badge 
                  key={index}
                  title={tech}
                />
              )
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
