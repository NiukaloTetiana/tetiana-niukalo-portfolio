import { BsTrello } from "react-icons/bs";
import { GiCardboardBox } from "react-icons/gi";
import { SiStyledcomponents } from "react-icons/si";
import { BsFiletypeScss, BsGit } from "react-icons/bs";
import {
  FaReact,
  FaJsSquare,
  FaCss3Alt,
  FaHtml5,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiVercel,
  SiVite,
  SiWebpack,
  SiFirebase,
  SiAxios,
} from "react-icons/si";

import pets from "../assets/images/portfolio/pets.webp";
import nanny from "../assets/images/portfolio/nanny.jpg";
import events from "../assets/images/portfolio/events.png";
import pharmacy from "../assets/images/portfolio/pharmacy.png";
import tattoo from "../assets/images/portfolio/tattoo.png";
import expensetracker from "../assets/images/portfolio/expensetracker.jpg";
import task from "../assets/images/portfolio/task.png";
import food from "../assets/images/portfolio/food.jpg";
import house from "../assets/images/portfolio/house.jpg";

export const portfolioItems = [
  {
    title: "Ukrainian House",
    answerable: `sections "Header" and "Footer", ContactsPage, Site developers part.`,
    image: house,
    description:
      "This website is dedicated to promoting Ukrainian literature, featuring library and news pages, both equipped with search functionality, a contact page with a map and a feedback form, as well as an admin panel for adding news and literary works.",
    role: "Front-end developer.",
    githubLink: "https://github.com/DimkaGrek/UkrainianHouse",
    websiteLink: "https://uamaastricht.nl/",
    technologies: [
      { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-700" /> },
      { name: "JavaScript", icon: <FaJsSquare className="text-yellow-500" /> },
      { name: "React", icon: <FaReact className="text-blue-500" /> },
      { name: "Axios", icon: <SiAxios className="text-blue-800" /> },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-teal-500" />,
      },
      { name: "Vite", icon: <SiVite className="text-purple-500" /> },
      { name: "Git", icon: <BsGit className="text-gray-400" /> },
      { name: "Trello", icon: <BsTrello className="text-cyan-600" /> },
    ],
  },

  {
    title: "HYPE TATTOO",
    answerable: "Individual project.",
    image: tattoo,
    description: ` "HYPE TATTOO" is a responsive landing page for a tattoo studio, featuring a modern design and user-friendly experience. It includes two additional pages: a "Not Found" (404) page for unavailable resources and a "Thank You" page after completing an action. `,
    githubLink: "https://github.com/NiukaloTetiana/hype-tattoo",
    websiteLink: "https://hype-tattoo.vercel.app/",
    technologies: [
      { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-700" /> },
      { name: "JavaScript", icon: <FaJsSquare className="text-yellow-500" /> },
      {
        name: "SCSS",
        icon: <BsFiletypeScss className="text-rose-600" />,
      },
      {
        name: "Vercel",
        icon: <SiVercel className="bg-black text-white" />,
      },
      { name: "Vite", icon: <SiVite className="text-purple-500" /> },
      { name: "Git", icon: <BsGit className="text-gray-400" /> },
    ],
  },
  {
    title: "E-Pharmacy",
    answerable: "Individual project.",
    image: pharmacy,
    description: ` "E-Pharmacy" is a accessible web application is aimed at helping users easily search for, compare, and purchase medicines from pharmacies nearby. User authentication, dynamic search a smooth experience for users to locate and order essential medicines at their convenience.`,
    githubLink: "https://github.com/NiukaloTetiana/e-pharmacy",
    websiteLink: "https://e-pharmacy-rust.vercel.app/",
    technologies: [
      { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-700" /> },
      { name: "JavaScript", icon: <FaJsSquare className="text-yellow-500" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
      { name: "React", icon: <FaReact className="text-blue-500" /> },
      { name: "Axios", icon: <SiAxios className="text-blue-800" /> },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-teal-500" />,
      },
      {
        name: "Vercel",
        icon: <SiVercel className="bg-black text-white" />,
      },
      { name: "Vite", icon: <SiVite className="text-purple-500" /> },
      { name: "Git", icon: <BsGit className="text-gray-400" /> },
      { name: "NodeJs", icon: <FaNodeJs className="text-green-600" /> },
    ],
  },

  {
    title: "pet Love",
    answerable: "Individual project.",
    image: pets,
    description: ` "petLove" is a streamlined web application designed for pet owners and animal lovers, providing a convenient platform to post pet listings, find up-to-date information, connect with project partners, and enable user interaction.`,
    githubLink: "https://github.com/NiukaloTetiana/petLove",
    websiteLink: "https://pet-love-ecru.vercel.app/",
    technologies: [
      { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-700" /> },
      { name: "JavaScript", icon: <FaJsSquare className="text-yellow-500" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
      { name: "React", icon: <FaReact className="text-blue-500" /> },
      { name: "Axios", icon: <SiAxios className="text-blue-800" /> },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-teal-500" />,
      },
      { name: "Vercel", icon: <SiVercel className="bg-black text-white" /> },
      {
        name: "Vite",
        icon: <SiVite className="text-purple-500" />,
      },
      { name: "Git", icon: <BsGit className="text-gray-400" /> },
    ],
  },

  {
    title: "Nanny.Services",
    answerable: "Individual project.",
    image: nanny,
    description: ` "Nanny.Services" is a web application designed to connect users with available nannies. It allows users to browse through a list of nannies, filter them based on various criteria, and registered users can add or remove their favorite nannies.`,
    githubLink: "https://github.com/NiukaloTetiana/nanny-services",
    websiteLink: "https://nanny-services-sigma.vercel.app/",
    technologies: [
      { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-700" /> },
      { name: "JavaScript", icon: <FaJsSquare className="text-yellow-500" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
      { name: "React", icon: <FaReact className="text-blue-500" /> },
      { name: "Axios", icon: <SiAxios className="text-blue-800" /> },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-teal-500" />,
      },
      {
        name: "Vercel",
        icon: <SiVercel className="bg-black text-white" />,
      },
      { name: "Vite", icon: <SiVite className="text-purple-500" /> },
      { name: "Git", icon: <BsGit className="text-gray-400" /> },
      { name: "Firebase", icon: <SiFirebase className="text-yellow-400" /> },
    ],
  },

  {
    title: "Event-View",
    answerable: "Individual project.",
    image: events,
    description: ` "Event-View" is a dynamic and user-friendly application helps users discover, register for, and manage events. It features user authentication, responsive design and interactive tools, making finding and joining events of interest easy.`,
    githubLink: "https://github.com/NiukaloTetiana/event-view",
    websiteLink: "https://event-view.vercel.app/",
    technologies: [
      { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-700" /> },
      { name: "JavaScript", icon: <FaJsSquare className="text-yellow-500" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
      { name: "React", icon: <FaReact className="text-blue-500" /> },
      { name: "Axios", icon: <SiAxios className="text-blue-800" /> },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-teal-500" />,
      },
      {
        name: "Vercel",
        icon: <SiVercel className="bg-black text-white" />,
      },
      { name: "Vite", icon: <SiVite className="text-purple-500" /> },
      { name: "Git", icon: <BsGit className="text-gray-400" /> },
      { name: "NodeJs", icon: <FaNodeJs className="text-green-600" /> },
    ],
  },

  {
    title: "ExpenseTracker",
    answerable: "RegisterPage, LoginPage, WelcomePage.",
    image: expensetracker,
    description:
      "This project is a finance tracking application. Key features include expense and income tracking, intuitive organization, a user-friendly interface, and instant access to financial insights.",
    role: "Developer and Scrum Master.",
    githubLink: "https://github.com/DimkaGrek/ReactAvengers",
    websiteLink: "https://dimkagrek.github.io/ReactAvengers/",
    technologies: [
      { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-700" /> },
      { name: "JavaScript", icon: <FaJsSquare className="text-yellow-500" /> },
      { name: "React", icon: <FaReact className="text-blue-500" /> },
      { name: "Axios", icon: <SiAxios className="text-blue-800" /> },
      { name: "Webpack", icon: <SiWebpack className="text-blue-400" /> },
      { name: "Git", icon: <BsGit className="text-gray-400" /> },
      { name: "Trello", icon: <BsTrello className="text-cyan-600" /> },
    ],
  },

  {
    title: "Task Pro",
    answerable:
      "- Front: SideBar, NeedHelpForm. - Back: Issues controllers, services, routes.",
    image: task,
    description:
      "This application is designed to create and customize boards to suit your workflow, dividing them into columns and populating them with cards representing your planned tasks.",
    role: "Developer.",
    githubLink: "https://github.com/tim-pashkevych/goals-achiever-react",
    websiteLink:
      "https://tim-pashkevych.github.io/goals-achiever-react/welcome",
    technologies: [
      { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-700" /> },
      {
        name: "StyledComponents",
        icon: <SiStyledcomponents className="text-rose-400" />,
      },
      { name: "JavaScript", icon: <FaJsSquare className="text-yellow-500" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
      { name: "React", icon: <FaReact className="text-blue-500" /> },
      { name: "Axios", icon: <SiAxios className="text-blue-800" /> },
      { name: "Vite", icon: <SiVite className="text-purple-500" /> },
      { name: "Git", icon: <BsGit className="text-gray-400" /> },
      { name: "NodeJs", icon: <FaNodeJs className="text-green-600" /> },
      { name: "Trello", icon: <BsTrello className="text-cyan-600" /> },
    ],
  },

  {
    title: "Food Boutique",
    answerable: `section "Footer".`,
    image: food,
    description: `"Food Boutique" is an online store specializing in organic products, offering users the ability to search, sort, view, and order a wide range of items. Detailed product descriptions and high-quality images provide a clear understanding of each item.`,
    role: "Developer.",
    githubLink: "https://github.com/DimkaGrek/AsyncAvengers",
    websiteLink: "https://dimkagrek.github.io/AsyncAvengers/",
    technologies: [
      { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-700" /> },
      { name: "JavaScript", icon: <FaJsSquare className="text-yellow-500" /> },
      { name: "Axios", icon: <SiAxios className="text-blue-800" /> },
      { name: "Parcel", icon: <GiCardboardBox className="text-yellow-300" /> },
      { name: "Git", icon: <BsGit className="text-gray-400" /> },
      { name: "Trello", icon: <BsTrello className="text-cyan-600" /> },
    ],
  },
];
