import { useEffect, useRef, useState } from "react";
import throttle from "lodash.throttle";
import { FaArrowUp } from "react-icons/fa6";

export const ScrollUpButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollYRef = useRef(0);

  useEffect(() => {
    const handleScroll = throttle(() => {
      scrollYRef.current = window.scrollY;
      setIsVisible(scrollYRef.current > 300);
    }, 400);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClickBtn = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={handleClickBtn}
      className={`group fixed bottom-4 right-4 flex h-12 w-12 items-center justify-center rounded-full bg-bgFirstColor shadow-sm transition duration-500 hover:-translate-y-2 hover:bg-accentColor focus:-translate-y-2 md:bottom-[30px] md:right-[30px] lg:bottom-[40px] lg:right-[60px] ${!isVisible ? "scale-0" : "scale-100"}`}
    >
      <FaArrowUp className="fill-textColor md:size-[18px]" size={16} />
    </button>
  );
};
