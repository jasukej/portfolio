import Link from 'next/link'
import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

const SocialBar = () => {
  return (
    <div>
      <div className="flex gap-x-6 text-[24px] max-w-max mx-auto lg:mx-0">
        <Link href="https://github.com/jasukej" target="_blank">
          <FaGithub 
            className="
                text-gray-700
                transform 
                transition 
                duration-300 
                filter 
                grayscale 
                hover:scale-125 
                hover:text-gray-500 
                hover:filter-none" />
        </Link>
        <Link href="https://www.linkedin.com/in/roselina-kezia-rijadi-515522283/" target="_blank">
          <FaLinkedin 
            className="
            text-neutral-900
            transform 
            transition 
            duration-300 
            hover:scale-125 
            hover:transition
            hover:text-sky-700" />
        </Link>
        <Link 
            href="https://www.instagram.com/kezrijadi/" 
            target="_blank"
        >
          <FaInstagram 
          className="
            text-neutral-900
            transform 
            transition 
            duration-300 
            hover:scale-125 
            hover:transition
            hover:text-pink-600
            " />
        </Link>
      </div>
    </div>
  )
}

export default SocialBar
