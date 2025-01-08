import { DarkModeSwitch } from "react-toggle-dark-mode";

import { useTheme } from "../hooks";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  const isDarkMode = theme === "dark";

  return (
    <DarkModeSwitch
      checked={isDarkMode}
      onChange={toggleTheme}
      size={40}
      moonColor="#fafafa"
      sunColor="#2e2e36"
      className="fixed right-5 top-5"
    />
  );
};
