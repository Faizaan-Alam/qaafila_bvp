import { displayName, isFilled } from "../../utils/format";
import PortraitFrame from "./PortraitFrame";
import Reveal from "../ui/Reveal";
export default function PresidentCard({ member, size = "lg" }) {
  const compact = size === "md";
  const isPresident = member.position === "President";
  const isCoPresident = member.position === "Co-President";
  const note = isFilled(member.bio)
    ? member.bio
    : isPresident
      ? "A note from the President will appear here. Until then, this space is held for the voice carrying Qaafila forward."
      : isCoPresident
        ? "A note from the Co-President will appear here. Until then, this space is held for the voice carrying Qaafila forward."
        : "A note will appear here when it is ready to be shared.";
  return (
    <Reveal
      className={
        compact
          ? "grid md:grid-cols-[minmax(0,0.84fr)_minmax(0,1.16fr)] gap-9 lg:gap-14 items-center lg:w-[93%]"
          : "grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-10 lg:gap-16 items-center"
      }
    >
      <PortraitFrame
        name={member.name}
        position={isFilled(member.position) ? member.position : "Member"}
        image={member.image}
        large
      />
      <div>
        <p className="kicker">
          {isFilled(member.position) ? member.position : "Position forthcoming"}
        </p>
        <h3
          className={`mt-4 font-display text-cream leading-[1.05] ${compact ? "text-[2.65rem] md:text-5xl" : "text-5xl md:text-6xl"}`}
        >
          {displayName(member.name)}
        </h3>
        <span className="mt-6 block h-px w-16 bg-gold/50" />
        <p
          className={`mt-6 text-cream/75 leading-relaxed max-w-xl ${compact ? "text-base md:text-lg" : "text-lg"}`}
        >
          {note}
        </p>
        {(member.year || member.department) && (
          <p className="mt-4 text-sm tracking-[0.18em] uppercase text-gold/80">
            {[member.year, member.department].filter(Boolean).join(" · ")}
          </p>
        )}
      </div>
    </Reveal>
  );
}
