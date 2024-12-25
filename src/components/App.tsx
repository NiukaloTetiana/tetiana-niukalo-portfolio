import { useEffect } from "react";
import AnimatedCursor from "react-animated-cursor";

import { ThemeToggle } from "./ThemeToggle";

export const App = () => {
  useEffect(() => {
    document.body.classList.add(
      "bg-gradient-to-r",
      "from-bgFirstColor",
      "to-bgSecondColor"
    );
    return () => {
      document.body.classList.remove(
        "bg-gradient-to-r",
        "from-bgFirstColor",
        "to-bgSecondColor"
      );
    };
  }, []);

  return (
    <div className="flex h-screen items-center justify-center">
      <ThemeToggle />
      <h1 className="text-4xl text-accentColor">PORTFOLIO</h1>
      <AnimatedCursor
        innerSize={7}
        outerSize={35}
        color="91, 162, 33"
        outerAlpha={0.3}
        innerScale={1}
        outerScale={1.7}
        // clickables={[
        //   "a",
        //   'input[type="text"]',
        //   'input[type="email"]',
        //   'input[type="number"]',
        //   'input[type="submit"]',
        //   'input[type="image"]',
        //   "label[for]",
        //   "select",
        //   "textarea",
        //   "button",
        //   ".link",
        // ]}
      />
    </div>
  );
};
