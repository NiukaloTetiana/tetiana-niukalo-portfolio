import { FaGraduationCap, FaBriefcase } from "react-icons/fa";
import { experiences } from "../constants";

export const Experience = () => {
  return (
    <section id="experience">
      <div className="container">
        <h2 className="title" data-content="Experience">
          My <span className="text-accentColor">path</span>
        </h2>

        <div className="after:hover after:content:'' custom-transition relative flex flex-col items-center after:absolute after:left-1/2 after:z-[-1] after:h-full after:w-[2px] after:-translate-x-1/2 after:transform after:bg-accentColor">
          {experiences.map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div
                key={item.id}
                className={`relative my-8 flex w-[870px] items-center ${
                  isLeft ? "justify-start" : "justify-end"
                }`}
              >
                <div className="hover custom-transition absolute left-1/2 -ml-5 flex size-10 items-center justify-center rounded-full bg-grayColor shadow-sm md:-ml-6 md:size-[48px]">
                  {item.type === "education" ? (
                    <FaGraduationCap className="fill-textColor" />
                  ) : (
                    <FaBriefcase className="fill-textColor" />
                  )}
                </div>

                {/* Контейнер для контенту */}
                <div
                  className={`after:contetn:'' custom-transition relative h-[120px] rounded-[25px] bg-grayColor p-5 after:absolute after:top-[50px] after:border-8 after:border-transparent ${
                    isLeft
                      ? "after:-right-4 after:border-l-grayColor"
                      : "after:-left-4 after:border-r-grayColor"
                  }`}
                >
                  <h5 className="mb-2 text-xl font-semibold text-accentColor">
                    {item.title}
                  </h5>
                  <p className="text-textColor">{item.description}</p>
                  <span className="mt-4 block text-sm text-gray-500">
                    {item.year}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
