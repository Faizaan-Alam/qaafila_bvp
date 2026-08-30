export const easeLiterary = [0.22, 1, 0.36, 1];
export const fadeUp = (delay = 0) => ({
  hidden: { opacity: 1, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay, ease: easeLiterary },
  },
});
export const fadeIn = (delay = 0) => ({
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, delay, ease: easeLiterary },
  },
});
export const revealLine = {
  hidden: { scaleX: 0.2, opacity: 1 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 0.8, ease: easeLiterary },
  },
};
export const stagger = (staggerChildren = 0.12, delayChildren = 0.1) => ({
  hidden: {},
  visible: {
    transition: { staggerChildren, delayChildren },
  },
});
export const pageTransition = {
  initial: { opacity: 1 },
  animate: {
    opacity: 1,
    transition: { duration: 0.35, ease: easeLiterary },
  },
  exit: {
    opacity: 1,
    transition: { duration: 0.2, ease: easeLiterary },
  },
};
