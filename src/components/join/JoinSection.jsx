import Button from "../ui/Button";
import Reveal from "../ui/Reveal";
import { instagram, whatsapp } from "../../data/site";
export default function JoinSection() {
  return (
    <Reveal>
      <p className="kicker">The invitation</p>
      <h2 className="mt-5 font-display text-5xl md:text-7xl text-cream leading-[0.95]">
        Join the journey
      </h2>
      <p className="mt-8 max-w-2xl text-lg text-cream/75 leading-relaxed">
        Qaafila is a pariwaar. Walk in through Instagram, or enter the support
        group on WhatsApp. Poetry, shayari, acting, standup, open mic, podcast,
        dance, rap, the book club: there is a seat if you want one. Email and
        recruitment notes will be printed here when they are ready.
      </p>
      <dl className="mt-12 grid sm:grid-cols-3 gap-10 border-t border-gold/20 pt-10">
        <div>
          <dt className="kicker">Instagram</dt>
          <dd className="mt-3 font-display text-2xl text-parchment">
            <a
              href={instagram.href}
              target="_blank"
              rel="noreferrer"
              className="hover:text-cream transition-colors"
            >
              {instagram.handle}
            </a>
          </dd>
        </div>
        <div>
          <dt className="kicker">WhatsApp</dt>
          <dd className="mt-3 font-display text-2xl text-parchment">
            <a
              href={whatsapp.href}
              target="_blank"
              rel="noreferrer"
              className="hover:text-cream transition-colors"
            >
              {whatsapp.handle}
            </a>
          </dd>
        </div>
        <div>
          <dt className="kicker">Email</dt>
          <dd className="mt-3 font-display text-2xl text-parchment">
            Address forthcoming
          </dd>
        </div>
      </dl>
      <div className="mt-12 flex flex-wrap gap-8">
        <Button href={instagram.href}>Follow Qaafila</Button>
        <Button href={whatsapp.href}>Join the support group</Button>
        <Button to="/write-ups">Explore write-ups</Button>
        <Button to="/events">Explore events</Button>
      </div>
    </Reveal>
  );
}
