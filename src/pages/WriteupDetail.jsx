import { Link, useParams } from "react-router-dom";
import Seo from "../components/layout/Seo";
import WriteupCard from "../components/writeups/WriteupCard";
import Button from "../components/ui/Button";
import { getRelatedWriteups, getWriteupBySlug } from "../data/writeups";
import {
  DATE_PLACEHOLDER,
  displayName,
  isFilled,
  readingTime,
} from "../utils/format";
export default function WriteupDetail() {
  const { slug } = useParams();
  const piece = slug ? getWriteupBySlug(slug) : undefined;
  if (!piece) {
    return (
      <div className="pt-28 pb-24 mx-auto max-w-7xl px-5 sm:px-8">
        <p className="kicker">The journal</p>
        <h1 className="mt-4 font-display text-5xl text-cream">
          This piece is not in the journal.
        </h1>
        <div className="mt-10">
          <Button to="/write-ups">Return to write-ups</Button>
        </div>
      </div>
    );
  }
  const related = getRelatedWriteups(piece);
  const minutes = readingTime(
    piece.content.replace(/<[^>]+>/g, " "),
    piece.readingMinutes,
  );
  return (
    <>
      <Seo
        title={piece.title}
        description={piece.excerpt}
        path={`/write-ups/${piece.slug}`}
        image={piece.coverImage}
        type="article"
      />
      <article className="pt-28 pb-24">
        <header className="mx-auto max-w-3xl px-5 sm:px-8">
          <p className="kicker">{piece.category}</p>
          <h1 className="mt-5 font-display text-4xl md:text-6xl text-cream leading-[1.05] text-balance">
            {piece.title}
          </h1>
          <p className="mt-6 text-sm tracking-[0.16em] uppercase text-gold/80">
            {displayName(piece.author, "Author forthcoming")}
            <span className="mx-3">·</span>
            {isFilled(piece.date) ? piece.date : DATE_PLACEHOLDER}
            <span className="mx-3">·</span>
            {minutes} min read
          </p>
        </header>

        <figure className="mx-auto max-w-5xl px-5 sm:px-8 mt-12">
          <img
            src={piece.coverImage}
            alt=""
            className="w-full aspect-[16/8] object-cover paper-edge"
          />
        </figure>

        {piece.pullQuote ? (
          <blockquote className="mx-auto max-w-3xl px-5 sm:px-8 mt-16 font-display italic text-3xl md:text-4xl text-parchment leading-snug">
            {piece.pullQuote}
          </blockquote>
        ) : null}

        <div
          className="writeup-body mx-auto max-w-[42rem] px-5 sm:px-8 mt-14 text-lg text-cream/80 leading-[1.9] [&_p]:mb-6 [&_blockquote]:font-display [&_blockquote]:italic [&_blockquote]:text-2xl [&_blockquote]:text-parchment [&_blockquote]:my-10 [&_blockquote]:leading-snug"
          dangerouslySetInnerHTML={{ __html: piece.content }}
        />

        <footer className="mx-auto max-w-7xl px-5 sm:px-8 mt-24 pt-12 border-t border-gold/20">
          <p className="kicker mb-10">Related in the journal</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {related.map((item) => (
              <WriteupCard key={item.id} piece={item} />
            ))}
          </div>
          <div className="mt-12">
            <Link to="/write-ups" className="ghost-btn">
              All write-ups <span className="text-gold">→</span>
            </Link>
          </div>
        </footer>
      </article>
    </>
  );
}
