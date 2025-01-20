import { FaGraduationCap, FaBriefcase } from "react-icons/fa";
import { motion } from "framer-motion";

import { experiences } from "../constants";

export const Experience = () => {
  const listVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.35,
      },
    },
  };

  const itemsVariants = {
    hidden: (isLeft: boolean) => ({
      opacity: 0,
      x: isLeft ? -100 : 100,
    }),
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeIn",
      },
    },
  };

  return (
    <section id="experience">
      <div className="container">
        <h2 className="title" data-content="Experience">
          My <span className="text-accentColor">path</span>
        </h2>

        <motion.ul
          className="custom-transition relative flex flex-col items-end after:absolute after:left-5 after:z-[-1] after:h-full after:w-[2px] after:-translate-x-1/2 after:transform after:bg-accentColor md:items-center md:after:left-1/2"
          variants={listVariants}
        >
          {experiences.map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <motion.li
                key={item.id}
                className={`group relative my-8 flex items-center md:w-[680px] lg:w-[870px] ${
                  isLeft ? "justify-start" : "justify-end"
                }`}
                custom={isLeft}
                variants={itemsVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.5 }}
              >
                <div className="custom-transition absolute -left-[45px] -ml-5 flex size-[38px] items-center justify-center rounded-full bg-secondTextColor shadow-sm group-hover:bg-hoverColor group-focus-visible:bg-hoverColor sm-max:-left-[39px] md:left-1/2 md:-ml-6 md:size-[48px]">
                  {item.type === "education" ? (
                    <FaGraduationCap className="size-[14px] fill-textColor md:size-[18px]" />
                  ) : (
                    <FaBriefcase className="size-[12px] fill-textColor md:size-[16px]" />
                  )}
                </div>

                <div
                  className={`custom-transition relative flex h-[160px] w-[270px] flex-col rounded-[25px] bg-secondTextColor p-5 after:custom-transition after:absolute after:-left-[3px] after:top-1/2 after:size-3 after:origin-top-right after:rotate-45 after:bg-secondTextColor group-hover:bg-borderColor after:group-hover:bg-borderColor group-focus-visible:bg-borderColor sm-max:w-[220px] sm-max:p-4 md:h-[145px] md:w-[290px] lg:h-[120px] lg:w-[380px] ${
                    isLeft ? "md:after:-right-2 md:after:left-auto" : ""
                  }`}
                >
                  <h5 className="address-label mb-3 !text-hoverColor">
                    {item.title}
                  </h5>
                  <p className="description">{item.description}</p>
                  <p className="address-text mt-3 sm-max:mt-2 sm-max:text-[12px]">
                    {item.text}
                  </p>

                  <p
                    className={`description mt-auto whitespace-nowrap md:link md:absolute md:top-[63px] md:mt-0 lg:top-[48px] ${
                      isLeft
                        ? "md:left-[130%] lg:left-[125%]"
                        : "md:-left-[57%] lg:-left-[175px]"
                    }`}
                  >
                    {item.year}
                  </p>
                </div>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
};
