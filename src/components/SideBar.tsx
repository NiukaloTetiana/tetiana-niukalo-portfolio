import { navItems } from "../constants";

export const SideBar = () => {
  return (
    <aside className="fixed bottom-0 left-0 h-[62px] w-full bg-bgSecondColor pt-3 shadow-lg transition-all duration-300 md:static md:ml-auto md:h-full md:w-[120px] md:translate-y-1/2 md:bg-transparent md:p-9 md:shadow-none">
      <ul className="flex justify-around md:flex-col md:justify-start md:gap-5">
        {navItems.map((item) => (
          <li key={item.path} className="group relative">
            <a
              href={item.path}
              className="group-hover z-[9] flex h-[38px] w-[38px] items-center justify-center rounded-[30px] border-none bg-bgFirstColor transition duration-300 hover:bg-accentColor md:h-[48px] md:w-[48px] md:text-[16px]"
            >
              {item.icon}
            </a>
            <span className="absolute -left-full top-0 z-[8] hidden h-[38px] rounded-full bg-accentColor pl-3 pr-[38px] group-hover:flex md:h-[48px] md:items-center md:pr-[48px] md:text-center md:font-fontSecondary md:text-[14px] md:font-medium md:uppercase md:leading-[0.917] md:tracking-[-0.02em] md:text-textColor">
              {item.label}
            </span>
          </li>
        ))}
      </ul>
    </aside>
  );
};
