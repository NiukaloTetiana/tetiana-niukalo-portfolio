import { useEffect, useState } from "react";
import throttle from "lodash.throttle";

import { navItems } from "../constants";

export const Sidebar = () => {
  const [currentPath, setCurrentPath] = useState(window.location.hash);

  useEffect(() => {
    const handleScroll = throttle(() => {
      const scrollPosition = window.scrollY;

      navItems.forEach((item) => {
        const section = document.querySelector(item.path) as HTMLElement;
        if (section) {
          const sectionTop = section.offsetTop;

          if (scrollPosition >= sectionTop / 2) {
            setCurrentPath(item.path);
          }
        }
      });
    }, 400);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <aside className="custom-transition fixed bottom-0 left-0 z-20 h-[62px] w-full rounded-t-[10px] bg-bgSecondColor pt-3 shadow-lg lg:left-auto lg:right-0 lg:top-1/2 lg:h-[325px] lg:w-[84px] lg:-translate-y-1/2 lg:bg-transparent lg:p-9 lg:pl-0 lg:shadow-none">
      <ul className="mx-auto flex max-w-[375px] justify-around md:max-w-[768px] lg:flex-col lg:justify-start lg:gap-5">
        {navItems.map((item) => (
          <li key={item.path} className="group relative">
            <a href={item.path} onClick={() => setCurrentPath(item.path)}>
              <span
                className={`custom-transition relative z-[9] flex size-[38px] items-center justify-center rounded-[30px] border-none shadow-sm ${
                  currentPath === item.path ? "bg-accentColor" : "bg-grayColor"
                } group-hover:bg-hoverColor group-hover:shadow-md group-focus-visible:bg-hoverColor group-focus-visible:shadow-md md:size-[48px] md:text-[16px]`}
              >
                {item.icon}
              </span>

              <span className="custom-transition absolute right-0 top-0 z-[8] hidden h-[38px] rounded-full bg-hoverColor pl-4 pr-[50px] text-[16px] opacity-0 group-hover:right-[5px] group-hover:opacity-100 md:flex md:h-[48px] md:items-center md:pr-[60px] md:text-center md:font-fontSecondary md:text-[18px] md:font-medium md:uppercase md:leading-[0.917] md:tracking-[-0.01em] md:text-textColor">
                {item.label}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};
