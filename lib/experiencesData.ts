import { MdOutlineComputer, MdDesignServices } from "react-icons/md";
import { BsEnvelopeHeart } from "react-icons/bs";
import { ImStatsDots } from "react-icons/im";
import { LuTriangle } from "react-icons/lu";
import { AiFillSmile } from "react-icons/ai";

export const experiencesData = [
    {
      title: "VP Web Development",
      org: "INFISA Santa Laurensia",
      tag: "clubs",
      location: "Jakarta, Indonesia",
      description: 
      "Developed a dynamic website using Editor X, JavaScript and jQuery, enhancing user interaction and creating a responsive layout. Led a team of 12 volunteers that executed design, coding, and content updates.",
      icon: MdOutlineComputer,
      date: "Oct 2021 - Jan 2023",
    }, 
    {
      title: "VP Design",
      org: "Educating Lives Indonesia",
      tag: "volunteer",
      location: "Jakarta, Indonesia",
      description: 
      "Led the design of an educational platform with a focus on UX/UI principles, enhancing user experience and content accessibility in social media posts and promotional materials.",
      icon: MdDesignServices,
      date: "Oct 2021 - July 2022",
    }, 
    {
      title: "B2C (Marketing) Portfolio Member",
      org: "AIESEC in UBC",
      tag: "clubs",
      location: "Vancouver, BC",
      description: 
      "Conducted class shouts and boothings to promote AIESEC’s exchange opportunities. Designed compelling newsletters and promotional materials, ensuring consistent branding across digital platforms.",
      icon: ImStatsDots,
      date: "Jan 2024 - Present",
    }, 
    {
      title: "Engagement Coordinator",
      org: "nwPlus",
      tag: "clubs",
      location: "Vancouver, BC",
      description: 
      "Planning day-of hacker activities and engagement strategies for Western Canada's largest hackathons.",
      icon: AiFillSmile,
      date: "May 2024 - Present",
    }, 
    {
      title: "Developer",
      org: "Develop For Good",
      tag: "client project",
      location: "Remote",
      description: 
      "Creating a webapp to optimize 30+ internal user flows for the Swim England team.",
      icon: BsEnvelopeHeart,
      date: "May 2024 - Present",
    }, 
    {
      title: "Events Director",
      org: "UBC Product Management Club",
      tag: "club",
      location: "Vancouver, BC",
      description: 
      "Co-directing UBC's first PM conference to be held later this January.",
      icon: LuTriangle,
      date: "May 2024 - Present",
    }, 
  ] as const;