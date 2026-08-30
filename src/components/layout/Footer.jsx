import { Link } from "react-router-dom";
import logo from "../../assets/logo/qaafila-logo.png";
import { footerNav, site, socials } from "../../data/site";
export default function Footer() {
  return (
    <footer className="border-t border-gold/20 bg-ink-2">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <Link to="/" className="inline-flex items-center gap-3">
              <img
                src={logo}
                alt="Qaafila emblem"
                className="h-14 w-14 object-cover"
                width={112}
                height={112}
              />
              <span className="font-display text-2xl tracking-[0.16em] uppercase text-parchment">
                {site.wordmark}
              </span>
            </Link>
            <p className="mt-6 font-display italic text-xl text-parchment/90">
              {site.tagline}
            </p>
            <p className="mt-3 font-deva text-lg text-beige/70">
              {site.devanagari}
            </p>
          </div>

          <div>
            <p className="kicker mb-6">Navigate</p>
            <ul className="grid grid-cols-2 gap-y-3 gap-x-6">
              {footerNav.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-sm tracking-wide text-cream/75 hover:text-parchment transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="kicker mb-6">Listen in</p>
            <ul className="flex flex-col gap-3">
              {socials.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm tracking-wide text-cream/75 hover:text-parchment transition-colors"
                  >
                    {item.label}
                    <span className="ml-3 text-[0.65rem] tracking-[0.2em] uppercase text-gold/70">
                      {item.handle}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gold/15 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <p className="text-sm text-muted">
            © {site.copyrightYear} Qaafila.
            <span className="block md:inline md:ml-2">
              Built around words, people and stories.
            </span>
          </p>
          <p className="text-xs tracking-[0.18em] uppercase text-gold/80">
            Website created by {site.maker}
          </p>
        </div>
      </div>
    </footer>
  );
}
