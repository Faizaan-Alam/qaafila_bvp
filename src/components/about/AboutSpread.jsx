import { aboutColumns, aboutIntro } from "../../data/about";
import Reveal from "../ui/Reveal";
export default function AboutSpread() {
  return (
    <div className="grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.2fr)] gap-12 lg:gap-20">
      <Reveal>
        <p className="kicker">{aboutIntro.kicker}</p>
        <h2 className="mt-5 font-display text-5xl md:text-7xl leading-[0.95] text-cream text-balance">
          {aboutIntro.heading}
        </h2>
        <p className="mt-8 font-display italic text-2xl text-parchment/90 leading-snug max-w-md">
          {aboutIntro.lede}
        </p>
      </Reveal>
      <div className="grid sm:grid-cols-2 gap-x-10 gap-y-12">
        {aboutColumns.map((column, index) => (
          <Reveal
            key={column.id}
            delay={index * 0.08}
            className="border-t border-gold/25 pt-6"
          >
            <p className="kicker">
              {column.kicker} / {column.title}
            </p>
            <p className="mt-4 text-cream/75 leading-relaxed">{column.body}</p>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
