import { FaCheck } from "react-icons/fa6";
import { FaCogs, FaHandsHelping } from "react-icons/fa";
import { BsTools, BsFolderSymlinkFill, BsGlobeAmericas } from "react-icons/bs";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";

import photo from "../assets/images/myphoto.jpg";

import { developmentSkills, languages, qualities, tools } from "../constants";

export const About = () => {
  const isMobile = useMediaQuery({ query: "(max-width:767.98px)" });

  return (
    <section id="about">
      <motion.div
        className="container"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
      >
        <h2 className="title" data-content="Resume">
          About <span className="text-accentColor">me</span>
        </h2>

        <div className="mb-10 md:flex md:gap-5 lg:gap-20">
          <motion.img
            className="img mx-auto mb-7 size-[220px] md:mx-0 md:mb-0 md:size-[370px] lg:size-[500px]"
            src={photo}
            width={300}
            height={300}
            alt="Tetiana Niukalo photo"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
          />

          <motion.div
            className="lg:pt-[70px]"
            initial={{ ...(isMobile ? { y: 100 } : { x: 100 }), opacity: 0 }}
            animate={{ ...(isMobile ? { y: 0 } : { x: 0 }), opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
          >
            <h1 className="custom-transition relative mb-4 text-center font-fontSecondary text-[38px] uppercase leading-[1.1] text-accentColor before:hidden before:content-['\2014'] md:text-start md:text-[54px] md:before:absolute md:before:left-[-40px] md:before:top-0 md:before:inline-block md:before:text-accentColor lg:text-[70px] lg:before:left-[-55px]">
              I&#8217;m Tetiana.
              <span className="block text-[28px] text-textColor md:text-[40px] lg:text-[54px]">
                Fullstack Developer
              </span>
            </h1>
            <p className="custom-transition mb-6 w-full text-center text-[14px] font-semibold leading-[1.5] tracking-[-0.03em] text-textColor md:w-[320px] md:text-start lg:w-[490px] lg:text-[16px]">
              With a passion for continuous learning and growth, I am committed
              to taking on new challenges with enthusiasm. I take a responsible
              approach to time management and understand the importance of
              deadlines. I&nbsp;approach&nbsp;challenges with curiosity and see
              every experience as an opportunity for self-improvement.
            </p>
            <a
              href="https://drive.google.com/file/d/1rXDNQ1smYqRzwxFxOLD00MdNYlqd0ZPs/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="button group mx-auto !w-[140px] md:mx-0 md:!w-[180px]"
            >
              View CV
              <span className="button-span flex items-center justify-center bg-hoverColor">
                <BsFolderSymlinkFill className="custom-transition z-10 size-4 fill-textColor md:size-5" />
              </span>
            </a>
          </motion.div>
        </div>

        <h3 className="subtitle">Skills</h3>

        <div className="mb-10 flex flex-col gap-10 md:mb-14 md:flex-row md:flex-wrap md:justify-center md:gap-12 lg:gap-[62px]">
          <div>
            <h4 className="custom-transition mb-5 flex items-center gap-2 text-[20px] uppercase text-textColor md:mb-8 md:text-[24px]">
              <FaCogs className="h-8 w-10 text-accentColor" />
              Development
            </h4>

            <ul className="flex flex-wrap gap-2 md:w-[600px] md:gap-4 lg:max-w-[510px]">
              {developmentSkills.map((item) => (
                <li
                  key={item}
                  className="hover custom-transition flex size-[85px] items-center justify-center rounded-full border border-borderColor bg-transparent text-[12px] text-textColor md:size-[100px] md:text-[14px]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="custom-transition mb-5 flex items-center gap-2 text-[20px] uppercase text-textColor md:mb-8 md:text-[24px]">
              <BsTools className="size-8 fill-accentColor" />
              Tools
            </h4>

            <ul className="flex flex-col gap-4 pl-4">
              {tools.map((item) => (
                <li
                  key={item}
                  className="link custom-transition flex w-fit items-center gap-2 text-[14px] text-textColor md:text-[16px]"
                >
                  <FaCheck className="text-accentColor" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="custom-transition mb-5 flex items-center gap-2 text-[20px] uppercase text-textColor md:mb-8 md:text-[24px]">
              <FaHandsHelping className="h-8 w-10 fill-accentColor" /> Personal
              Qualities
            </h4>

            <ul className="flex flex-col gap-4 pl-4">
              {qualities.map((item) => (
                <li
                  key={item}
                  className="link custom-transition flex w-fit items-center gap-2 text-[14px] text-textColor md:text-[16px]"
                >
                  <FaCheck className="text-accentColor" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <h3 className="subtitle">Languages</h3>
          <ul className="flex items-center justify-center gap-2 md:gap-4">
            {languages.map((item) => (
              <li
                key={item}
                className="hover custom-transition flex w-fit items-center justify-center gap-2 rounded-full bg-accentColor px-[12px] py-[10px] text-center text-[14px] text-textColor md:px-8 md:text-[16px]"
              >
                <BsGlobeAmericas className="custom-transition size-5 text-textColor sm-max:hidden" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};
