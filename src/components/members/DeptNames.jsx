import { isFilled } from "../../utils/format";
import Reveal from "../ui/Reveal";
export default function DeptNames({ title, members, size = "sm" }) {
  const named = members.filter((member) => isFilled(member.name));
  if (!named.length) return null;
  const nameClass =
    size === "lg"
      ? "font-display text-4xl md:text-6xl text-cream leading-tight"
      : size === "md"
        ? "font-display text-3xl md:text-4xl text-cream leading-tight"
        : "font-display text-2xl md:text-3xl text-cream leading-tight";
  return (
    <Reveal className="border-t border-gold/20 pt-8">
      {title ? <p className="kicker">{title}</p> : null}
      <ul className={`flex flex-col gap-2 ${title ? "mt-5" : ""}`}>
        {named.map((member) => (
          <li key={member.id} className={nameClass}>
            {member.name}
          </li>
        ))}
      </ul>
    </Reveal>
  );
}
