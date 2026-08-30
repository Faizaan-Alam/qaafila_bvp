import { Link } from "react-router-dom";
import { DATE_PLACEHOLDER, isFilled } from "../../utils/format";
export default function EventCard({ event, featured = false }) {
  return (
    <article className={`group ${featured ? "md:col-span-2" : ""}`}>
      <Link to={`/events/${event.slug}`} className="block">
        <div
          className={`relative overflow-hidden paper-edge ${featured ? "aspect-[16/9] md:aspect-[21/10]" : "aspect-[4/3]"}`}
        >
          <img
            src={event.image}
            alt=""
            className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
          <p className="absolute top-4 left-4 kicker text-cream">
            {event.category}
          </p>
        </div>
        <div className="mt-4">
          <p className="text-xs tracking-[0.22em] uppercase text-gold/80">
            {isFilled(event.date) ? event.date : DATE_PLACEHOLDER}
          </p>
          <h3
            className={`mt-2 font-display text-cream leading-tight group-hover:text-parchment transition-colors ${featured ? "text-3xl md:text-5xl" : "text-2xl md:text-3xl"}`}
          >
            {event.title}
          </h3>
          <p className="mt-3 text-cream/65 leading-relaxed line-clamp-3">
            {event.description}
          </p>
          <p className="mt-4 kicker text-gold/80">View event</p>
        </div>
      </Link>
    </article>
  );
}
