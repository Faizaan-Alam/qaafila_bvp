import { motion, useReducedMotion } from "framer-motion";
import logo from "../../assets/logo/qaafila-logo.png";
import { site } from "../../data/site";
import Button from "../ui/Button";
export default function Hero() {
  const reduce = useReducedMotion();
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden bg-ink">
      <div className="vignette" />
      <div
        className="absolute inset-0 opacity-[0.12]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 55px, rgba(168,137,90,0.07) 56px)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 pt-28 pb-16 md:pb-20 w-full">
        <div className="grid lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] gap-8 lg:gap-16 items-center">
          <motion.div
            className="flex justify-center lg:justify-start"
            initial={reduce ? false : { opacity: 0.4 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative">
              <span
                className="absolute -inset-4 sm:-inset-6 border border-gold/25"
                aria-hidden="true"
              />
              <img
                src={logo}
                alt="Official Qaafila emblem: a circular Q containing Devanagari lettering, with a quill and the wordmark Qaafila"
                className="w-[min(72vw,380px)] lg:w-[min(42vw,420px)] aspect-square object-cover"
                width={840}
                height={840}
              />
            </div>
          </motion.div>

          <div className="pb-2">
            <p className="kicker text-gold">A literary pariwaar</p>
            <h1 className="mt-4 font-display text-[clamp(3.2rem,8.4vw,6.8rem)] leading-[0.88] text-cream">
              {site.wordmark}
            </h1>
            <p className="mt-3 font-deva text-xl md:text-3xl text-beige">
              {site.devanagari}
            </p>
            <span className="mt-6 block h-px w-20 bg-gold" />
            <p className="mt-6 font-display italic text-[1.55rem] md:text-[2rem] text-parchment leading-snug max-w-xl">
              {site.tagline}
            </p>
            <p className="mt-5 max-w-xl text-cream/80 text-base md:text-lg leading-relaxed">
              {site.description}
            </p>
            <div className="mt-9 flex flex-wrap gap-8">
              <Button to="/about">Explore Qaafila</Button>
              <Button to="/events">Enter the archive</Button>
            </div>
          </div>
        </div>
        <p className="mt-14 kicker text-gold/70">Scroll</p>
      </div>
    </section>
  );
}
