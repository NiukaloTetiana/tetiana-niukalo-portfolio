import { BsMoonStars } from "react-icons/bs";
import { TbSunglasses } from "react-icons/tb";

import { useTheme } from "../hooks";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="pointer-events-auto flex size-12 items-center justify-center rounded-full bg-textColor shadow-md transition duration-300 lg:hover:bg-hoverColor lg:hover:shadow-lg"
    >
      {theme === "light" ? (
        <BsMoonStars className="size-5 fill-bgFirstColor sm-max:size-[14px]" />
      ) : (
        <TbSunglasses className="size-6 stroke-bgFirstColor sm-max:size-[14px]" />
      )}
    </button>
  );
};
