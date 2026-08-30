import WriteupCard from "./WriteupCard";
import Reveal from "../ui/Reveal";
export default function WriteupGrid({ pieces, layout = "journal" }) {
  if (layout === "row") {
    return (
      <div>
        {pieces.map((piece, index) => (
          <Reveal key={piece.id} delay={index * 0.03}>
            <WriteupCard piece={piece} layout="row" />
          </Reveal>
        ))}
      </div>
    );
  }
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
      {pieces.map((piece, index) => (
        <Reveal key={piece.id} delay={index * 0.04}>
          <WriteupCard piece={piece} />
        </Reveal>
      ))}
    </div>
  );
}
