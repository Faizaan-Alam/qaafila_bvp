import { Link } from "react-router-dom";
import { isFilled } from "../../utils/format";
import WriteupWatermark from "./WriteupWatermark";

export default function WriteupCard({ piece, layout = "journal" }) {
  if (layout === "row") {
    return (
      <article className="group border-t border-gold/20 py-8">
        <Link
          to={`/write-ups/${piece.slug}`}
          className="grid md:grid-cols-[7.5rem_1fr_auto] gap-4 md:gap-8 items-baseline"
        >
          <p className="kicker">{piece.category}</p>
          <div>
            <h3 className="font-display text-3xl md:text-4xl text-cream group-hover:text-parchment transition-colors leading-tight">
              {piece.title}
            </h3>
            <p className="mt-2 text-sm text-cream/55">
              Written by {piece.author}
              {isFilled(piece.date) ? (
                <>
                  <span className="mx-2 text-gold/50">/</span>
                  {piece.date}
                </>
              ) : null}
            </p>
          </div>
          <p className="kicker text-gold/80 hidden md:block">Read</p>
        </Link>
      </article>
    );
  }
  return (
    <article className="group">
      <Link to={`/write-ups/${piece.slug}`} className="block">
        <div className="relative overflow-hidden paper-edge aspect-[4/5]">
          <img
            src={piece.coverImage}
            alt=""
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
          <WriteupWatermark compact />
          <div className="absolute bottom-0 inset-x-0 p-5">
            <p className="kicker text-cream">{piece.category}</p>
            <h3 className="mt-2 font-display text-2xl md:text-3xl text-cream leading-tight">
              {piece.title}
            </h3>
          </div>
        </div>
        <p className="mt-4 text-cream/65 leading-relaxed">{piece.excerpt}</p>
        <p className="mt-3 text-sm text-gold/75">Written by {piece.author}</p>
        <p className="mt-3 kicker text-gold/80">Read</p>
      </Link>
    </article>
  );
}
