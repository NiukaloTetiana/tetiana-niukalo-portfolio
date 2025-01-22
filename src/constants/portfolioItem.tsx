import { FaReact, FaJsSquare, FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiVercel, SiVite } from "react-icons/si";

import photo from "../assets/images/portfolio/3.webp";

export const portfolioItems = [
  {
    title: "pet Love",
    role: "Individual project.",
    image: photo,
    altText: "petLove photo site",
    description:
      "petLove is an application designed for pet owners and animal lovers, providing a convenient platform to post pet listings, find up-to-date information, connect with project partners, and enable user interaction.",
    githubLink: "https://github.com/NiukaloTetiana/petLove",
    websiteLink: "https://pet-love-ecru.vercel.app/",
    technologies: [
      { name: "React", icon: <FaReact className="text-blue-500" /> },
      { name: "JavaScript", icon: <FaJsSquare className="text-yellow-500" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-700" /> },
      { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-teal-500" />,
      },
      { name: "Vercel", icon: <SiVercel className="text-black" /> },
      { name: "Vite", icon: <SiVite className="text-purple-500" /> },
    ],
  },
];
