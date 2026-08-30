import ResultCard from "./ResultCard";
import Reveal from "../ui/Reveal";
export default function ResultGrid({ entries }) {
  const [first, second, ...rest] = entries;
  return (
    <div className="grid gap-12">
      {first ? (
        <Reveal>
          <ResultCard entry={first} featured />
        </Reveal>
      ) : null}
      {second ? (
        <Reveal>
          <div className="lg:w-[90%]">
            <ResultCard entry={second} featured />
          </div>
        </Reveal>
      ) : null}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {rest.map((entry, index) => (
          <Reveal key={entry.id} delay={index * 0.05}>
            <ResultCard entry={entry} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
