import { FaGraduationCap, FaBriefcase } from "react-icons/fa";
import { experiences } from "../constants";

export const Experience = () => {
  return (
    <section id="experience">
      <div className="container">
        <h2 className="title" data-content="Experience">
          My <span className="text-accentColor">path</span>
        </h2>

        <ul className="custom-transition relative flex flex-col items-end after:absolute after:left-5 after:z-[-1] after:h-full after:w-[2px] after:-translate-x-1/2 after:transform after:bg-accentColor md:items-center md:after:left-1/2">
          {experiences.map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <li
                key={item.id}
                className={`group relative my-8 flex items-center md:w-[680px] lg:w-[870px] ${
                  isLeft ? "justify-start" : "justify-end"
                }`}
              >
                <div className="custom-transition absolute -left-[45px] -ml-5 flex size-[38px] items-center justify-center rounded-full bg-secondTextColor shadow-sm group-hover:bg-hoverColor group-focus-visible:bg-hoverColor sm-max:-left-[28px] md:left-1/2 md:-ml-6 md:size-[48px]">
                  {item.type === "education" ? (
                    <FaGraduationCap className="size-[14px] fill-textColor md:size-[18px]" />
                  ) : (
                    <FaBriefcase className="size-[12px] fill-textColor md:size-[16px]" />
                  )}
                </div>

                <div
                  className={`custom-transition relative flex h-[160px] w-[270px] flex-col rounded-[25px] bg-secondTextColor p-5 after:custom-transition after:absolute after:top-[63px] after:hidden after:border-8 after:border-transparent group-hover:bg-grayColor group-focus-visible:bg-grayColor sm-max:w-[230px] sm-max:p-4 md:h-[145px] md:w-[290px] md:after:block lg:h-[120px] lg:w-[380px] lg:after:top-[50px] ${
                    isLeft
                      ? "after:-right-4 after:border-l-secondTextColor after:group-hover:border-l-grayColor after:group-focus-visible:border-l-grayColor"
                      : "after:-left-4 after:border-r-secondTextColor after:group-hover:border-r-grayColor after:group-focus-visible:border-r-grayColor"
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
                    className={`description link mt-auto whitespace-nowrap md:absolute md:top-[63px] md:mt-0 lg:top-[48px] ${
                      isLeft
                        ? "md:left-[130%] lg:left-[125%]"
                        : "md:-left-[57%] lg:-left-[175px]"
                    }`}
                  >
                    {item.year}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
