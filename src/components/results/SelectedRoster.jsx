import Reveal from "../ui/Reveal";

export default function SelectedRoster({ members }) {
  if (!members.length) {
    return (
      <p className="font-display italic text-2xl text-parchment/80">
        The list is being prepared.
      </p>
    );
  }

  return (
    <ol>
      {members.map((member, index) => (
        <Reveal key={member.id}>
          <li className="grid md:grid-cols-[3.25rem_minmax(0,1fr)_auto] gap-3 md:gap-8 items-baseline border-t border-gold/20 py-5">
            <span className="kicker text-gold/70">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="font-display text-2xl md:text-3xl text-cream leading-tight">
              {member.name}
            </h3>
            <p className="text-sm tracking-[0.12em] uppercase text-gold/75">
              {member.departments.join(" · ")}
            </p>
          </li>
        </Reveal>
      ))}
    </ol>
  );
}
