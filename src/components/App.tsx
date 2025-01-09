import AnimatedCursor from "react-animated-cursor";

import { ThemeToggle } from "./ThemeToggle";
import { ScrollUpButton, Sidebar } from "../components";

export const App = () => {
  return (
    <>
      <ThemeToggle />
      <AnimatedCursor
        innerSize={7}
        outerSize={35}
        color="91, 162, 33"
        outerAlpha={0.3}
        innerScale={1}
        outerScale={1.7}
      />
      <Sidebar />

      <ScrollUpButton />
    </>
  );
};
