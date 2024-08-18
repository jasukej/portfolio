import injurney from "@/public/injurney.png";
import readbuddy from "@/public/ReadBuddy.png";
import boltbootcamp from "@/public/bolt-casecomp/1.png";
import jalankami from "@/public/jalankami/1.png";
import study_spotter from "@/public/study-spotter/4.png";
import widscasecomp from "@/public/wids-casecomp/1.png";
import datafest2024 from "@/public/datafest/1.png";

export const projectsData = [
  {
    title: "JalanKami",
    description:
      "A web application leveraging AI to improve pedestrian accessibility by automating manual sidewalk surveys and urban needs assessments.",
    tags: ["React", "TypeScript", "Pytorch", "Tailwind", "Flask", "Firebase", "OpenAI API"],
    imageUrl: jalankami,
    category: "Hackathon",
    github: 'https://github.com/jasukej/garudahacks',
    external: 'https://devpost.com/software/jalankami',
    detailed: false,
    winDesc: "Won 1st Place & Best Solo Hack out of 108 projects"
  },
    {
      title: 'Study Spotter',
      description: 
      "Community-driven website that helps students find the best study spots based on personalized preferences and real-time user reviews.",
      tags: ["Next.js", "React", "Prisma", "MongoDB", "Tailwind", "Maps API"],
      imageUrl: study_spotter,
      category: "Personal Project",
      github: 'https://github.com/jasukej/study-spotter',
      external: 'https://studyspotter.vercel.app/',
      detailed: false,
    },
    {
      title: "SPArk Business Plan",
      description:
        "Utilising data-driven insights and predictive ML models to create a cohesive, business-oriented solution to credit card fraud.",
      tags: ["Python", "Machine Learning", "Tensorflow", "Data Analytics", "Marketing"],
      imageUrl: boltbootcamp,
      category: "Data Science",
      github: 'https://github.com/jasukej/BoltCaseComp2024',
      external: 'https://drive.google.com/file/d/1zArPVUS5emdSvPQnCWLjNSYr6HU2ZMco/view?usp=sharing',
      detailed: false,
      winDesc: "Won 1st Place in the BOLT UBC x Mastercard Case Competition"
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
      detailed: false,
    },
    {
      title: "Injurney",
      description:
        "A web application for users with chronic injuries to generate and integrate personalized care plans into their lifestyle.",
      tags: ["React", "TypeScript", "Next.js", "Tailwind", "MongoDB", "OpenAI"],
      imageUrl: injurney,
      category: "Hackathon",
      github: 'https://github.com/gm4vm0/injurney/tree/deev',
      external: 'https://devpost.com/software/injurney',
      detailed: false,
    },
    {
      title: "WiDS x SAP Analytics Case Competition",
      description:
        "Utilized data analytics and compelling visualizations to develop an AI democratization strategy aimed at reducing customer churn.",
      tags: ["Python", "Machine Learning", "Data Analytics", "Data Visualization"],
      imageUrl: widscasecomp,
      category: "Data Science",
      github: 'https://github.com/jasukej/WiDSxSAPCaseComp2024',
      external: 'https://drive.google.com/file/d/1hL29_cmWdU23JWOwfD7-QxEgxX2FViYD/view?usp=sharing',
      detailed: false,
      winDesc: "Won 1st Place out of 18 teams"
    },
    // {
    //   title: "🏆 ASA Datafest Presentation",
    //   description:
    //     "Analyzed student performance metrics and created data visualizations of a statistics learning platform to identify key predictors of learning outcomes.",
    //   tags: ["R", "Data Analytics", "Data Visualization"],
    //   imageUrl: datafest2024,
    //   category: "Data Science",
    //   github: 'https://github.com/jasukej/datafest-2024',
    //   external: 'https://drive.google.com/file/d/1qAVeJ1WOYwc6wnQE6bhfd4HrrL4Kp1CI/view?usp=drive_link',
    //   detailed: false,
    // },
  ] as const;