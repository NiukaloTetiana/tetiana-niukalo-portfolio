import { DarkModeSwitch } from "react-toggle-dark-mode";

import { useTheme } from "../hooks";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  const isDarkMode = theme === "dark";

  return (
    <DarkModeSwitch
      checked={isDarkMode}
      onChange={toggleTheme}
      size={30}
      moonColor="#fafafa"
      sunColor="#2e2e36"
      className="hover:text- custom-transition fixed right-5 top-5 z-[10] !cursor-none focus-visible:text-accentColor md:right-9 md:top-9 md:size-10"
    />
  );
};
