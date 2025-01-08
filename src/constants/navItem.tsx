import { FaBriefcase, FaGraduationCap } from "react-icons/fa6";
import { PiUserGearFill } from "react-icons/pi";
import { BsEnvelopeAtFill } from "react-icons/bs";

const iconStyles = "fill-textColor size-[14px] md:size-[18px]";

export const navItems = [
  {
    path: "#about",
    label: "About",
    icon: <PiUserGearFill className={iconStyles} />,
  },
  {
    path: "#experience",
    label: "Experience",
    icon: <FaGraduationCap className={iconStyles} />,
  },
  {
    path: "#portfolio",
    label: "Portfolio",
    icon: <FaBriefcase className={iconStyles} />,
  },
  {
    path: "#contact",
    label: "Contact",
    icon: <BsEnvelopeAtFill className={iconStyles} />,
  },
];
