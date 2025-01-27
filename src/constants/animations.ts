export const fadeInUp = {
  initial: { y: 70, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  transition: { duration: 0.7, ease: "easeIn", delay: 0.1 },
  viewport: { once: true, amount: 0.4 },
};

export const createFlipVariants = (rotateY: number) => ({
  hidden: { rotateY, opacity: 0 },
  visible: {
    rotateY: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeIn",
    },
  },
});
