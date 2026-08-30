import { Link, useParams } from "react-router-dom";
import Seo from "../components/layout/Seo";
import PageShell from "../components/layout/PageShell";
import EventCard from "../components/events/EventCard";
import Gallery from "../components/gallery/Gallery";
import Button from "../components/ui/Button";
import { getEventBySlug, getRelatedEvents } from "../data/events";
import { DATE_PLACEHOLDER, isFilled } from "../utils/format";
export default function EventDetail() {
  const { slug } = useParams();
  const event = slug ? getEventBySlug(slug) : undefined;
  if (!event) {
    return (
      <PageShell>
        <p className="kicker">The archive</p>
        <h1 className="mt-4 font-display text-5xl text-cream">
          This evening is not in the record.
        </h1>
        <div className="mt-10">
          <Button to="/events">Return to the archive</Button>
        </div>
      </PageShell>
    );
  }
  const related = getRelatedEvents(event);
  const gallery = event.gallery.map((src, index) => ({
    id: `${event.id}-g-${index}`,
    src,
    alt: `${event.title}, still ${index + 1}`,
    category: "Literary sessions",
    caption: event.title,
  }));
  return (
    <>
      <Seo
        title={event.title}
        description={event.description}
        path={`/events/${event.slug}`}
        image={event.image}
        type="article"
      />
      <article>
        <header className="relative min-h-[70svh] flex items-end overflow-hidden">
          <img
            src={event.image}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/20" />
          <div className="relative mx-auto max-w-7xl px-5 sm:px-8 pb-16 pt-36 w-full">
            <p className="kicker">{event.category}</p>
            <h1 className="mt-4 font-display text-5xl md:text-7xl text-cream leading-[0.95] max-w-4xl">
              {event.title}
            </h1>
            <p className="mt-6 text-sm tracking-[0.22em] uppercase text-gold">
              {isFilled(event.date) ? event.date : DATE_PLACEHOLDER}
            </p>
          </div>
        </header>

        <PageShell className="pt-16">
          <div className="grid lg:grid-cols-[minmax(0,1.4fr)_minmax(0,0.7fr)] gap-16">
            <div>
              <p className="font-display text-2xl md:text-3xl italic text-parchment leading-snug">
                {event.description}
              </p>
              {event.highlights.length ? (
                <ul className="mt-12 space-y-4">
                  {event.highlights.map((item) => (
                    <li
                      key={item}
                      className="border-t border-gold/20 pt-4 text-cream/80"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-10 text-cream/60">
                  Highlights will be listed here once the evening is documented.
                </p>
              )}
              {event.video ? (
                <div className="mt-12 aspect-video paper-edge overflow-hidden">
                  <iframe
                    title={`${event.title} video`}
                    src={event.video}
                    className="h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : null}
            </div>
            <aside className="lg:border-l lg:border-gold/20 lg:pl-10">
              <p className="kicker">Filed under</p>
              <p className="mt-3 font-display text-3xl text-cream">
                {event.category}
              </p>
              <p className="mt-8 kicker">In the journal</p>
              <Link to="/write-ups" className="mt-3 inline-block ghost-btn">
                Related write-ups <span className="text-gold">→</span>
              </Link>
            </aside>
          </div>

          <section className="mt-20">
            <p className="kicker mb-8">Stills</p>
            <Gallery photos={gallery} />
          </section>

          {related.length ? (
            <section className="mt-24">
              <p className="kicker mb-10">Related evenings</p>
              <div className="grid md:grid-cols-2 gap-10">
                {related.slice(0, 2).map((item) => (
                  <EventCard key={item.id} event={item} />
                ))}
              </div>
            </section>
          ) : null}
        </PageShell>
      </article>
    </>
  );
}
