import { motion, useReducedMotion } from "framer-motion";
export default function SectionHeading({
  kicker,
  heading,
  subtitle,
  align = "left",
  roman,
}) {
  const reduce = useReducedMotion();
  const alignment =
    align === "center"
      ? "text-center mx-auto items-center"
      : "text-left items-start";
  return (
    <motion.header
      className={`flex flex-col gap-5 max-w-3xl ${alignment}`}
      initial={reduce ? false : { y: 12 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className={`flex gap-4 ${align === "center" ? "justify-center" : ""}`}
      >
        {roman ? (
          <span className="kicker text-gold/80 pt-1" aria-hidden="true">
            {roman}
          </span>
        ) : null}
        {kicker ? <p className="kicker">{kicker}</p> : null}
      </div>
      <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05] text-cream text-balance">
        {heading}
      </h2>
      <span
        className={`block h-px bg-gold/50 ${align === "center" ? "w-24 mx-auto" : "w-16"}`}
      />
      {subtitle ? (
        <p className="font-display italic text-xl md:text-2xl text-parchment leading-snug">
          {subtitle}
        </p>
      ) : null}
    </motion.header>
  );
}
