import injurney from "@/public/injurney.png";
import readbuddy from "@/public/ReadBuddy.png";
import boltbootcamp from "@/public/bolt-casecomp/1.png";
import study_spotter from "@/public/study-spotter/2.png";

export const projectsData = [
    {
      title: 'Study Spotter',
      description: 
      "Community-driven website that helps students find the best study spots based on personalized preferences and real-time user reviews.",
      tags: ["Next.js", "React", "Prisma", "MongoDB", "Tailwind", "Maps API"],
      imageUrl: study_spotter,
      category: "Personal Project",
      github: 'https://github.com/jasukej/study-spotter',
      external: 'https://studyspotter.vercel.app/',
    },
    {
      title: "BOLT Bootcamp 2024",
      description:
        "Utilising data-driven insights and predictive ML models to create a cohesive, business-oriented solution to credit card fraud.",
      tags: ["Python", "Machine Learning", "Tensorflow", "Data Analytics", "Marketing"],
      imageUrl: boltbootcamp,
      category: "Case Comp",
      github: 'https://github.com/jasukej/BoltCaseComp2024',
      external: 'https://drive.google.com/file/d/1zArPVUS5emdSvPQnCWLjNSYr6HU2ZMco/view?usp=sharing',
    },
    {
      title: "ReadBuddy",
      description:
        "A browser extension to customize text and display features specially designed for dyslexic and visually impaired users.",
      tags: ["HTML", "Tailwind", "Javascript", "Google Cloud Platform"],
      imageUrl: readbuddy,
      category: "Hackathon",
      github: 'https://github.com/jasukej/ReadBuddy',
      external: 'https://devpost.com/software/readbuddy',
    },
    {
      title: "Injurney",
      description:
        "A web application for users with injuries to generate and integrate personalized AI care plans into their lifestyle.",
      tags: ["React", "TypeScript", "Next.js", "Tailwind", "MongoDB", "OpenAI"],
      imageUrl: injurney,
      category: "Hackathon",
      github: 'https://github.com/gm4vm0/injurney/tree/deev',
      external: 'https://devpost.com/software/injurney',
    },
  ] as const;