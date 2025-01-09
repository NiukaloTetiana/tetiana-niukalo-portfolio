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
      className="fixed left-5 top-5 z-[10] md:left-9 md:top-9 md:size-10"
    />
  );
};
