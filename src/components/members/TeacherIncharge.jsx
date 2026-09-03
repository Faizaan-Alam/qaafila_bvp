import Reveal from "../ui/Reveal";
import PortraitFrame from "./PortraitFrame";
import { displayName } from "../../utils/format";

function FacultyCard({ member }) {
  return (
    <article className="group flex items-center justify-end gap-4">
      <div className="min-w-0 text-right">
        <p className="kicker">{member.position}</p>
        <h3 className="mt-2 font-display text-xl md:text-2xl text-cream leading-tight">
          {displayName(member.name)}
        </h3>
      </div>
      <div className="w-32 md:w-40 shrink-0">
        <PortraitFrame
          name={member.name}
          position={member.position}
          image={member.image}
          compact
        />
      </div>
    </article>
  );
}

export default function TeacherIncharge({ members }) {
  return (
    <div className="flex justify-end">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-4xl">
        {members.map((member, index) => (
          <Reveal key={member.id} delay={index * 0.05}>
            <FacultyCard member={member} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
