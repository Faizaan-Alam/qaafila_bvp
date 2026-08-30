import Reveal from "../ui/Reveal";

export default function TeacherIncharge({ member }) {
  return (
    <Reveal className="max-w-sm border border-gold/20 px-6 py-5">
      <p className="kicker">Teacher Incharge</p>
      <p className="mt-3 font-display text-2xl md:text-3xl text-cream leading-tight">
        {member.name}
      </p>
    </Reveal>
  );
}
