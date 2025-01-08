import AnimatedCursor from "react-animated-cursor";

import { ThemeToggle } from "./ThemeToggle";

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
      <h1 className="text-4xl text-textColor">PORTFOLIO</h1>
    </>
  );
};
