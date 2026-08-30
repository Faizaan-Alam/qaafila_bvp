import { displayName, isFilled } from "../../utils/format";
import PortraitFrame from "./PortraitFrame";
export default function MemberCard({ member, label }) {
  return (
    <article className="group">
      <PortraitFrame
        name={member.name}
        position={member.position}
        image={member.image}
      />
      <div className="mt-4">
        <p className="kicker text-[0.62rem]">
          {label ||
            (isFilled(member.department) ? member.department : member.position)}
        </p>
        <h3 className="mt-2 font-display text-2xl md:text-3xl text-cream leading-tight">
          {displayName(member.name)}
        </h3>
        <span className="mt-3 block h-px w-0 bg-gold/50 transition-all duration-500 group-hover:w-12" />
        {isFilled(member.bio) ? (
          <p className="mt-3 text-sm text-cream/60 leading-relaxed">
            {member.bio}
          </p>
        ) : !isFilled(member.name) ? (
          <p className="mt-3 text-sm text-cream/60 leading-relaxed">
            A brief note will appear here when this seat is named.
          </p>
        ) : null}
      </div>
    </article>
  );
}
