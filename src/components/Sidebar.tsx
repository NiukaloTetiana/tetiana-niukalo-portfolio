import { navItems } from "../constants";

export const Sidebar = () => {
  return (
    <aside className="custom-transition fixed bottom-0 left-0 h-[62px] w-full rounded-t-[10px] bg-bgSecondColor pt-3 shadow-lg md:left-auto md:right-0 md:top-1/2 md:h-[325px] md:w-[120px] md:-translate-y-1/2 md:bg-transparent md:p-9 md:shadow-none">
      <ul className="flex justify-around md:flex-col md:justify-start md:gap-5">
        {navItems.map((item) => (
          <li key={item.path} className="group relative">
            <a href={item.path}>
              <span className="custom-transition relative z-[9] flex h-[38px] w-[38px] items-center justify-center rounded-[30px] border-none bg-bgFirstColor group-hover:bg-accentColor group-hover:shadow-md group-focus-visible:bg-accentColor group-focus-visible:shadow-md md:h-[48px] md:w-[48px] md:text-[16px]">
                {item.icon}
              </span>

              <span className="custom-transition absolute right-0 top-0 z-[8] hidden h-[38px] rounded-full bg-accentColor pl-4 pr-[50px] text-[16px] opacity-0 group-hover:right-[5px] group-hover:opacity-100 md:flex md:h-[48px] md:items-center md:pr-[60px] md:text-center md:font-fontSecondary md:text-[18px] md:font-medium md:uppercase md:leading-[0.917] md:tracking-[-0.01em] md:text-textColor">
                {item.label}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};
