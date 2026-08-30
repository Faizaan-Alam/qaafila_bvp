import Seo from "../components/layout/Seo";
import PageShell from "../components/layout/PageShell";
import AboutSpread from "../components/about/AboutSpread";
import Button from "../components/ui/Button";
import Reveal from "../components/ui/Reveal";
import { site } from "../data/site";
export default function About() {
  return (
    <>
      <Seo
        title="About"
        description="Qaafila is a fun literary society and a pariwaar. Poetry, shayari, acting, standup, open mic, podcast, dance, rap and a book club, built around bonds."
        path="/about"
      />
      <PageShell>
        <AboutSpread />

        <Reveal className="mt-24 grid lg:grid-cols-2 gap-16 items-start border-t border-gold/20 pt-16">
          <div>
            <p className="kicker">A note on the name</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-cream leading-tight">
              {site.devanagari}
            </h2>
            <p className="mt-6 text-cream/75 leading-relaxed">
              Qaafila, a caravan, and a pariwaar. The emblem holds a circular Q,
              Devanagari lettering, a quill, and the long script of the word
              itself. The house is literary. The people inside it are family.
            </p>
          </div>
          <div className="space-y-8">
            <p className="font-display italic text-2xl text-parchment leading-snug">
              Founded in May 2022 by Keshav Goyal and Mayank Hora. The people
              who carried the house after that live on the legacy page.
            </p>
            <div className="flex flex-wrap gap-8">
              <Button to="/execom">Meet the team</Button>
              <Button to="/legacy">The legacy</Button>
            </div>
          </div>
        </Reveal>
      </PageShell>
    </>
  );
}
