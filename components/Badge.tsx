import React from 'react'

interface BadgeProps {
    title: string,
}

const Badge = ({ title }:BadgeProps) => {
  return (
    <div 
    className="
        px-2
        py-1
        text-xs
        text-sky-700
        bg-white
        border-sky-700
        border-[1px]
        rounded-full
        uppercase
        flex
        w-auto
        justify-center
        items-center
        whitespace-nowrap
    ">
        {title}
    </div>
  )
}

export default Badge