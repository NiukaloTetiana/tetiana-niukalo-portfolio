import AnimatedCursor from "react-animated-cursor";

import { ThemeToggle } from "./ThemeToggle";
import { SideBar } from "./SideBar";

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
      <SideBar />
    </>
  );
};
