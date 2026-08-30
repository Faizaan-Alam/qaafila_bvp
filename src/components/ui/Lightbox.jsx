import { useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
export default function Lightbox({
  open,
  src,
  alt,
  caption,
  onClose,
  onPrev,
  onNext,
}) {
  const reduce = useReducedMotion();
  useEffect(() => {
    if (!open) return;
    const onKey = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") onPrev?.();
      if (event.key === "ArrowRight") onNext?.();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose, onPrev, onNext]);
  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/92 px-4 py-10"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          onClick={onClose}
        >
          <button
            type="button"
            className="absolute top-6 right-6 kicker text-cream/80 hover:text-parchment"
            onClick={onClose}
          >
            Close
          </button>
          {onPrev ? (
            <button
              type="button"
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-parchment text-2xl"
              onClick={(event) => {
                event.stopPropagation();
                onPrev();
              }}
              aria-label="Previous image"
            >
              ←
            </button>
          ) : null}
          {onNext ? (
            <button
              type="button"
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-parchment text-2xl"
              onClick={(event) => {
                event.stopPropagation();
                onNext();
              }}
              aria-label="Next image"
            >
              →
            </button>
          ) : null}
          <figure
            className="max-w-5xl w-full"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={src}
              alt={alt}
              className="w-full max-h-[78vh] object-contain paper-edge"
            />
            {caption ? (
              <figcaption className="mt-4 text-center font-display italic text-parchment/80">
                {caption}
              </figcaption>
            ) : null}
          </figure>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
