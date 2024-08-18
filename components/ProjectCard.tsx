import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { projectsData } from "@/lib/projectsData";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";
import { animated, to as interpolate } from '@react-spring/web';
import { useRouter } from "next/navigation";
import { FaExternalLinkSquareAlt, FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import Badge from "./Badge";
import Link from "next/link";
import { StaticImageData } from 'next/image';

type ProjectProps = {
  title: string;
  description: string;
  tags: readonly string[];
  imageUrl: string | StaticImageData;
  github: string;
  external: string;
  detailed?: boolean;
  winDesc?: string;
};

export default function ProjectCard({
  title,
  description,
  tags,
  imageUrl,
  github,
  external,
  detailed,
  winDesc
}: ProjectProps) {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);

  const handleCardClick = () => {
    detailed ? router.push(`projects/${title}`) : window.open(external, "_blank");
  }
 
  return (
    <motion.div
      onClick={handleCardClick}
      className="
        group
        border-[2px]
        border-grey-800 
        mb-3
        hover:shadow-md
        transition-shadow
        duration-200
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
        onClick={handleCardClick}
        className="
          max-h-[18rem]
          overflow-hidden
          mb-2
          border-black
          border-[1px]
          rounded-lg
          relative
          cursor-pointer
        ">
          <Image 
            src={imageUrl}
            alt={`${title}-alt`}
            style={{
              objectFit:"cover",
              filter: isHovered ? "none" : "sepia(1) saturate(0.8) hue-rotate(190deg) opacity(1) drop-shadow(0 0 5px rgba(0, 0, 0, 0.2))",
              scale: isHovered ? '1.02' : 'none',
              transition: "scale 0.2s ease-in-out",
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
        className="mt-1">
          <div 
          className="
            flex-row
            flex
            justify-between
          ">
            <div 
            className="
              text-xl 
              cursor-pointer
              font-semibold">
              {winDesc && (
                <span className="relative">
                  <span
                    className="inline-block transition-transform duration-200 ease-in-out peer hover:rotate-12"
                    style={{ display: "inline-block", transformOrigin: "center" }}
                  >
                    🏆&nbsp;
                  </span>
                  <span className="absolute left-0 bottom-full mb-2 hidden w-max ml-[-4px] px-2 py-1 text-sm font-medium text-gray-500 border-[2px] shadow-md bg-white rounded peer-hover:block">
                    {winDesc}
                  </span>
                </span>
              )}
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
              <Link 
                href={github} 
                passHref
                target="_blank"
                >
                <FaGithub 
                  size={24}
                  onClick={(e) => e.stopPropagation()}
                  className="hover:scale-110 transition transform duration-200 hover:text-sky-800"
                />
              </Link>
              <Link
                href={external} 
                passHref
                target="_blank"
                >
                <FiExternalLink 
                  size={24}
                  onClick={(e) => e.stopPropagation()}
                  className="hover:scale-110 transition transform duration-200 hover:text-sky-800"
                />
              </Link>
            </div>
          </div>
          <div 
          className="
            mt-2 
            text-sm
            font-light
            text-neutral-900
            cursor-default
            ">
            {description}
          </div>
          <div
          className="
            flex
            flex-row
            overflow-x-scroll
            max-w-full
            gap-x-2
            mt-3
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
