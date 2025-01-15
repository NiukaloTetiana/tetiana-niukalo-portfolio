import { FaCogs, FaHandsHelping } from "react-icons/fa";
import { BsTools } from "react-icons/bs";
import { BsFolderSymlinkFill } from "react-icons/bs";

import photo from "../assets/images/photo.jpg";

import { developmentSkills, qualities, tools } from "../constants";
import { FaCheck } from "react-icons/fa6";

export const About = () => {
  return (
    <section id="about">
      <div className="container">
        <h2 className="title" data-content="Resume">
          About <span className="text-accentColor">me</span>
        </h2>

        <div className="mb-10 md:flex md:gap-5 lg:gap-20">
          <div className="mx-auto mb-7 flex size-[180px] shrink-0 items-center justify-center overflow-hidden rounded-full shadow-md md:mx-0 md:mb-0 md:size-[370px] lg:size-[500px]">
            <img
              className="h-full w-full object-cover"
              src={photo}
              alt="Tetiana Niukalo photo"
              loading="lazy"
            />
          </div>

          <div className="lg:pt-[70px]">
            <h1 className="custom-transition relative mb-4 text-center font-fontSecondary text-[38px] uppercase leading-[1.1] text-accentColor before:hidden before:content-['&mdash;'] md:text-start md:text-[54px] lg:text-[70px] lg:before:absolute lg:before:left-[-55px] lg:before:top-0 lg:before:inline-block lg:before:text-accentColor">
              I&#8217;m Tetiana.
              <span className="block text-[28px] text-textColor md:text-[40px] lg:text-[54px]">
                Fullstack Developer
              </span>
            </h1>
            <p className="custom-transition mb-6 w-full text-center text-[14px] font-semibold leading-[1.5] tracking-[-0.03em] text-textColor md:w-[320px] md:text-start md:text-[15px] lg:w-[490px] lg:text-[16px]">
              With a passion for continuous learning and growth, I am committed
              to taking on new challenges with enthusiasm. I take a responsible
              approach to time management and understand the importance of
              deadlines. I approach challenges with curiosity and see every
              experience as an opportunity for self-improvement.
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
          </div>
        </div>

        <h3 className="custom-transition mb-10 text-center font-fontSecondary text-[28px] uppercase leading-[1.1] text-textColor md:text-start md:text-[40px] lg:text-[54px]">
          My skills
        </h3>

        <div className="flex flex-col gap-10 md:flex-row md:flex-wrap md:gap-12">
          <div>
            <h4 className="custom-transition mb-5 flex items-center gap-2 text-[20px] uppercase text-textColor md:mb-8 md:text-[24px]">
              <FaCogs className="size-10 text-accentColor" />
              Development
            </h4>

            <ul className="flex flex-wrap gap-2 md:w-[600px] md:gap-4 lg:max-w-[490px]">
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
              <FaHandsHelping className="size-10 fill-accentColor" /> Personal
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
      </div>
    </section>
  );
};
