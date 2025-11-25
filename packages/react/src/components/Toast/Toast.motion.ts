export const variants = {
  initial: {
    opacity: 0,
    y: -20,
    scale: 0.95,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
  exit: {
    opacity: 0,
    x: 300,
    scale: 0.9,
    transition: {
      duration: 0.2,
    },
  },
};
