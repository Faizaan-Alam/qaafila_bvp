import Reveal from "../ui/Reveal";
import PortraitFrame from "./PortraitFrame";
import { displayName } from "../../utils/format";

function FacultyCard({ member }) {
  return (
    <article className="group">
      <PortraitFrame
        name={member.name}
        position={member.position}
        image={member.image}
      />
      <p className="kicker mt-4">{member.position}</p>
      <h3 className="mt-2 font-display text-2xl md:text-3xl text-cream leading-tight">
        {displayName(member.name)}
      </h3>
    </article>
  );
}

export default function TeacherIncharge({ members }) {
  return (
    <div className="grid sm:grid-cols-2 gap-8 max-w-3xl">
      {members.map((member, index) => (
        <Reveal key={member.id} delay={index * 0.05}>
          <FacultyCard member={member} />
        </Reveal>
      ))}
    </div>
  );
}
