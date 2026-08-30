import { isFilled, resultLabel } from "../../utils/format";
import PortraitFrame from "../members/PortraitFrame";
export default function ResultCard({ entry, featured = false }) {
  return (
    <article className={featured ? "sm:col-span-2 lg:col-span-2" : ""}>
      <div className={featured ? "grid md:grid-cols-2 gap-8 items-center" : ""}>
        <PortraitFrame
          name={entry.name}
          position={entry.position}
          image={entry.image}
          large={featured}
        />
        <div className={featured ? "" : "mt-4"}>
          {isFilled(entry.position) && entry.position !== "Selected" ? (
            <p className="kicker">{entry.position}</p>
          ) : (
            <p className="kicker">Selected</p>
          )}
          <h3
            className={`mt-2 font-display text-cream leading-tight ${featured ? "text-4xl md:text-5xl" : "text-2xl md:text-3xl"}`}
          >
            {resultLabel(entry)}
          </h3>
          <p className="mt-3 text-sm tracking-[0.2em] uppercase text-gold/70">
            {entry.year}
            {isFilled(entry.department) ? ` · ${entry.department}` : ""}
          </p>
          {isFilled(entry.quote) ? (
            <p className="mt-4 text-cream/65 leading-relaxed">
              “{entry.quote}”
            </p>
          ) : null}
        </div>
      </div>
    </article>
  );
}
