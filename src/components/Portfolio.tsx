import { FaGithub } from "react-icons/fa6";
import { FaExternalLinkSquareAlt } from "react-icons/fa";

import { portfolioItems } from "../constants";

export const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="container">
        <h2 className="title" data-content="Works">
          My <span className="text-accentColor">portfolio</span>
        </h2>

        <ul className="flex flex-wrap gap-x-6 gap-y-12">
          {portfolioItems.map((item, index) => (
            <li
              key={index}
              className="sm:w-[calc(50%-12px)] group custom-transition w-full rounded-[30px] hover:shadow-md md:w-[calc(33.333%-16px)]"
            >
              <div className="custom-transition relative overflow-hidden rounded-t-[30px] border-[1.3px] border-borderColor">
                <img
                  src={item.image}
                  alt={`${item.title} home page`}
                  width="342"
                  height="220"
                  loading="lazy"
                  className="h-[220px] w-full shrink-0 transition duration-500 group-hover:scale-110"
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
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
