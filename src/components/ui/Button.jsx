import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
export default function Button({
  to,
  href,
  children,
  className = "",
  onClick,
  type = "button",
}) {
  const reduce = useReducedMotion();
  const classes = `ghost-btn ${className}`;
  const hover = reduce ? undefined : { y: -2 };
  const inner = (
    <>
      <span>{children}</span>
      <span aria-hidden="true" className="text-gold">
        →
      </span>
    </>
  );
  if (to) {
    return (
      <motion.div whileHover={hover} className="inline-flex">
        <Link to={to} className={classes}>
          {inner}
        </Link>
      </motion.div>
    );
  }
  if (href) {
    const isPlaceholder = href.trim() === "";
    return (
      <motion.div
        whileHover={isPlaceholder ? undefined : hover}
        className="inline-flex"
      >
        <a
          href={isPlaceholder ? undefined : href}
          className={`${classes} ${isPlaceholder ? "pointer-events-none opacity-55" : ""}`}
          aria-disabled={isPlaceholder}
          target={isPlaceholder ? undefined : "_blank"}
          rel={isPlaceholder ? undefined : "noreferrer"}
        >
          {inner}
        </a>
      </motion.div>
    );
  }
  return (
    <motion.div whileHover={hover} className="inline-flex">
      <button type={type} onClick={onClick} className={classes}>
        {inner}
      </button>
    </motion.div>
  );
}
