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
                  className="h-auto w-full transition duration-500 group-hover:scale-110"
                />
                <div className="custom-transition absolute inset-0 flex translate-y-full flex-col justify-center bg-black bg-opacity-60 p-5 text-[14px] text-white group-hover:translate-y-0 group-focus-visible:translate-y-0">
                  <p>{item.description}</p>
                  <p className="mt-auto">Role: {item.role}</p>
                </div>
              </div>
              <div className="custom-transition flex justify-between rounded-b-[30px] border-x-[1.3px] border-b-[1.3px] border-borderColor p-4 md:p-5">
                <div>
                  <h2 className="address-label custom-transition mb-3 !text-textColor">
                    {item.title}
                  </h2>

                  <div className="flex space-x-2">
                    {item.technologies.map((tech, index) => (
                      <div key={index} title={tech.name}>
                        {tech.icon}
                      </div>
                    ))}
                  </div>
                </div>

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
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
