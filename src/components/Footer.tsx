import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <footer>
      <motion.div
        className="container custom-transition hidden w-full border-t-[0.2px] border-borderColor py-3 lg:block"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <p className="custom-transition text-center text-[8px] uppercase text-textColor md:text-[10px]">
          &copy; 2025 Tetiana Niukalo. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
};
