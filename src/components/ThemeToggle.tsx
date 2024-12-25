import { BsMoonStars } from "react-icons/bs";
import { TbSunglasses } from "react-icons/tb";

import { useTheme } from "../hooks";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="pointer-events-auto flex items-center justify-center rounded-full bg-textColor p-4 shadow-md transition duration-300 lg:hover:bg-hoverColor lg:hover:shadow-lg"
    >
      {theme === "light" ? (
        <BsMoonStars className="size-5 fill-bgFirstColor sm-max:size-[14px]" />
      ) : (
        <TbSunglasses className="size-6 stroke-accentColor sm-max:size-[14px]" />
      )}
    </button>
  );
};
