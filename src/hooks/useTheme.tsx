import { useLayoutEffect, useState } from "react";

export const useTheme = () => {
  const savedTheme = localStorage.getItem("theme") ?? "dark";
  const initialTheme = savedTheme === "light" ? "light" : "dark";

  const [theme, setTheme] = useState(initialTheme);

  useLayoutEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return { theme, toggleTheme };
};
