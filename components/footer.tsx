import Link from "next/link";
import React from "react";
import { MdEmail, MdOutlineMail } from "react-icons/md";

export default function Footer() {
  return (
    <section id="footer">
      <div className="
        font-light 
        text-sm 
        flex 
        w-full 
        justify-center 
        mb-4">
          👋 Thanks for visiting! |&nbsp;
        <Link
          href="mailto:keziarijadi25@gmail.com"
          className="
            flex 
            items-center 
            group
            hover:underline-offset-2
            hover:text-purple-500
            "
        >
          <MdOutlineMail size={15} /> 
          &nbsp;keziarijadi25@gmail.com
          <span className="
            ml-2 
            mt-[1px]
            transition-transform 
            transform 
            group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>
    </section>
  );
}
