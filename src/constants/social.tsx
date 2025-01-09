import { FaTelegramPlane, FaLinkedinIn, FaGithub } from "react-icons/fa";

const iconStyles = "fill-textColor size-[12px] md:size-[16px]";

export const socialLinks = [
  {
    href: "https://t.me/Tetiana_Niukalo",
    icon: <FaTelegramPlane className={iconStyles} />,
    ariaLabel: "Telegram",
  },
  {
    href: "https://github.com/NiukaloTetiana",
    icon: <FaGithub className={iconStyles} />,
    ariaLabel: "Github",
  },
  {
    href: "https://www.linkedin.com/in/tetiana-niukalo/",
    icon: <FaLinkedinIn className={iconStyles} />,
    ariaLabel: "Linkedin",
  },
];
