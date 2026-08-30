import MemberCard from "./MemberCard";
import Reveal from "../ui/Reveal";
export default function MemberGrid({
  members,
  columns = "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  label,
}) {
  return (
    <div className={`grid gap-x-8 gap-y-12 ${columns}`}>
      {members.map((member, index) => (
        <Reveal key={`${label ?? "member"}-${member.id}`} delay={index * 0.05}>
          <MemberCard member={member} label={label} />
        </Reveal>
      ))}
    </div>
  );
}
