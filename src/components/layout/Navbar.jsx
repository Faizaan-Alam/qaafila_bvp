import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import logo from "../../assets/logo/qaafila-logo.png";
import { navItems, site } from "../../data/site";
import useScrolled from "../../hooks/useScrolled";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled(16);
  const reduce = useReducedMotion();
  const location = useLocation();
  const close = () => setOpen(false);
  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-500 ${scrolled || open ? "bg-ink/92 backdrop-blur-[10px]" : "bg-transparent"}`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <nav
          className="flex items-center justify-between h-[4.5rem] border-b border-gold/15"
          aria-label="Primary"
        >
          <Link
            to="/"
            className="flex items-center gap-3 group"
            onClick={close}
            aria-label={`${site.name} home`}
          >
            <img
              src={logo}
              alt="Qaafila emblem"
              className="h-11 w-11 object-cover"
              width={88}
              height={88}
            />
            <span className="font-display text-xl tracking-[0.18em] uppercase text-parchment">
              {site.wordmark}
            </span>
          </Link>

          <ul className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className="nav-link"
                  aria-current={
                    location.pathname === item.to ? "page" : undefined
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="lg:hidden relative h-10 w-10 text-parchment"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <span
              className={`absolute left-2 right-2 h-px bg-parchment transition-transform duration-300 ${open ? "top-1/2 rotate-45" : "top-[14px]"}`}
            />
            <span
              className={`absolute left-2 right-2 top-1/2 h-px bg-parchment transition-opacity duration-300 ${open ? "opacity-0" : "opacity-100"}`}
            />
            <span
              className={`absolute left-2 right-2 h-px bg-parchment transition-transform duration-300 ${open ? "top-1/2 -rotate-45" : "top-[26px]"}`}
            />
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="lg:hidden bg-ink border-b border-gold/15"
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <ul className="px-8 py-8 flex flex-col gap-6">
              {navItems.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    className="font-display text-3xl text-cream"
                    onClick={close}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
