import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa6";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";

import { portfolioItems } from "../constants";

export const Portfolio = () => {
  const isMobile = useMediaQuery({ query: "(max-width:767.98px)" });
  const itemVariants = {
    hidden: { opacity: 0, ...(isMobile ? { y: 100 } : { x: 100 }) },
    show: (i: number) => ({
      opacity: 1,
      ...(isMobile ? { y: 0 } : { x: 0 }),
      transition: {
        duration: 0.8,
        delay: i * 0.25,
        ease: "easeIn",
      },
    }),
  };

  return (
    <section id="portfolio">
      <div className="container">
        <h2 className="title" data-content="Works">
          My <span className="text-accentColor">portfolio</span>
        </h2>

        <ul className="grid grid-cols-1 gap-x-4 gap-y-6 md:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item, index) => (
            <motion.li
              key={index}
              className="group custom-transition w-full rounded-[30px] hover:shadow-md focus-visible:shadow-md"
              variants={itemVariants}
              initial="hidden"
              whileInView="show"
              custom={index % 3}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="custom-transition relative overflow-hidden rounded-t-[30px] border-[1.3px] border-borderColor">
                <img
                  src={item.image}
                  alt={`${item.title} home page`}
                  width="342"
                  height="220"
                  loading="lazy"
                  className="h-[220px] w-full object-cover object-top transition duration-500 group-hover:scale-110"
                />

                <div className="custom-transition absolute inset-0 flex translate-y-full flex-col justify-center bg-black bg-opacity-70 p-5 text-[14px] text-white group-hover:translate-y-0 group-focus-visible:translate-y-0">
                  <p>{item.description}</p>
                  {item.role && (
                    <p>
                      <span className="text-accentColor">Role: </span>
                      {item.role}
                    </p>
                  )}
                  <p className="mt-auto">
                    <span className="text-accentColor">Answerable: </span>
                    {item.answerable}
                  </p>
                </div>
              </div>
              <div className="custom-transition flex h-[100px] flex-col rounded-b-[30px] border-x-[1.3px] border-b-[1.3px] border-borderColor p-4 md:px-5 md:py-3">
                <div className="flex items-center justify-between">
                  <h2 className="custom-transition font-fontSecondary text-[22px] font-bold uppercase leading-[0.99] text-textColor">
                    {item.title}
                  </h2>

                  <ul className="flex gap-2">
                    <li className="hover custom-transition size-[36px] rounded-full border-none bg-grayColor shadow-sm md:size-[46px]">
                      <a
                        className="flex size-full items-center justify-center"
                        href={item.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Github"
                      >
                        <FaGithub className="size-[12px] fill-textColor md:size-[16px]" />
                      </a>
                    </li>
                    <li className="hover custom-transition size-[36px] rounded-full border-none bg-grayColor shadow-sm md:size-[46px]">
                      <a
                        className="flex size-full items-center justify-center"
                        href={item.websiteLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Web Site"
                      >
                        <FaExternalLinkSquareAlt className="size-[12px] fill-textColor md:size-[16px]" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="mt-auto flex justify-center gap-2">
                  {item.technologies.map((tech, index) => (
                    <div key={index} title={tech.name}>
                      {tech.icon}
                    </div>
                  ))}
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};
