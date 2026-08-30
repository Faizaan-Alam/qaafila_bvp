import { motion, useReducedMotion } from "framer-motion";
import { isFilled } from "../../utils/format";
import { fadeUp } from "../../utils/motion";
import { founding } from "../../data/legacy";

function SmallPortrait({ person }) {
  if (!isFilled(person.image)) return null;
  return (
    <img
      src={person.image}
      alt={person.name}
      className="h-16 w-16 object-cover object-top paper-edge shrink-0"
      loading="lazy"
    />
  );
}

const ROLE_PLURALS = {
  President: "Presidents",
  "Co-President": "Co-Presidents",
  "Vice President": "Vice Presidents",
  Founder: "Founders",
  "Co-founder": "Co-founders",
  "General Secretary": "General Secretaries",
  "Joint Secretary": "Joint Secretaries",
  "Cultural Secretary": "Cultural Secretaries",
  Treasurer: "Treasurers",
};

function PersonList({ label, people }) {
  if (!people?.length) return null;
  const heading =
    people.length > 1 ? (ROLE_PLURALS[label] ?? `${label}s`) : label;
  return (
    <div>
      <p className="kicker">{heading}</p>
      <ul className="mt-3 flex flex-col gap-3">
        {people.map((person) => (
          <li key={person.name} className="flex items-center gap-3">
            <SmallPortrait person={person} />
            <p className="font-display text-2xl md:text-3xl text-cream leading-tight">
              {person.name}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function RoleGrid({ entry }) {
  return (
    <div className="grid sm:grid-cols-2 gap-8">
      <PersonList label="President" people={entry.presidents} />
      <PersonList label="Co-President" people={entry.coPresidents} />
      <PersonList label="Vice President" people={entry.vicePresidents} />
      <PersonList
        label="General Secretary"
        people={entry.generalSecretaries}
      />
      <PersonList label="Joint Secretary" people={entry.jointSecretaries} />
      <PersonList
        label="Cultural Secretary"
        people={entry.culturalSecretaries}
      />
      <PersonList label="Treasurer" people={entry.treasurers} />
    </div>
  );
}

export function FoundingNote() {
  return (
    <div className="grid md:grid-cols-[8rem_1fr] gap-4 md:gap-10 py-10 md:py-14 border-t border-gold/20">
      <p className="font-display text-2xl text-gold pt-1">{founding.year}</p>
      <div className="grid sm:grid-cols-2 gap-8">
        <PersonList label="Founder" people={[founding.founder]} />
        <PersonList label="Co-founder" people={[founding.coFounder]} />
        <PersonList
          label="General Secretary"
          people={founding.generalSecretaries}
        />
      </div>
    </div>
  );
}

export default function LegacyTimeline({ entries, showFounding = false }) {
  const reduce = useReducedMotion();

  return (
    <ol className="relative">
      {showFounding ? (
        <li>
          <FoundingNote />
        </li>
      ) : null}
      {entries.map((entry, index) => (
        <motion.li
          key={entry.year}
          className="grid md:grid-cols-[8rem_1fr] gap-4 md:gap-10 py-10 md:py-14 border-t border-gold/20"
          variants={fadeUp(index * 0.05)}
          initial={reduce ? false : "hidden"}
          whileInView="visible"
          animate="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: index * 0.05 }}
        >
          <p className="font-display text-2xl text-gold pt-1">{entry.year}</p>
          <div>
            <RoleGrid entry={entry} />
            {entry.note ? (
              <p className="mt-6 text-sm text-cream/60 leading-relaxed">
                {entry.note}
              </p>
            ) : null}
          </div>
        </motion.li>
      ))}
    </ol>
  );
}
