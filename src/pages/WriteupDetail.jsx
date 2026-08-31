import { Link, useParams } from "react-router-dom";
import Seo from "../components/layout/Seo";
import WriteupCard from "../components/writeups/WriteupCard";
import WriteupWatermark from "../components/writeups/WriteupWatermark";
import WriteupComments from "../components/writeups/WriteupComments";
import Button from "../components/ui/Button";
import { getRelatedWriteups, getWriteupBySlug } from "../data/writeups";
import { isFilled, readingTime } from "../utils/format";

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
          <p className="mt-6 font-display italic text-xl md:text-2xl text-parchment">
            Written by {piece.author}
          </p>
          <p className="mt-3 text-sm tracking-[0.16em] uppercase text-gold/80">
            {isFilled(piece.date) ? piece.date : null}
            {isFilled(piece.date) ? <span className="mx-3">·</span> : null}
            {minutes} min read
          </p>
        </header>

        <figure className="mx-auto max-w-5xl px-5 sm:px-8 mt-12">
          <div className="relative">
            <img
              src={piece.coverImage}
              alt=""
              className="w-full aspect-[16/8] object-cover paper-edge"
            />
            <WriteupWatermark compact />
          </div>
        </figure>

        {piece.pullQuote ? (
          <blockquote className="mx-auto max-w-3xl px-5 sm:px-8 mt-16 font-display italic text-3xl md:text-4xl text-parchment leading-snug">
            {piece.pullQuote}
          </blockquote>
        ) : null}

        <div className="relative mx-auto max-w-[42rem] px-5 sm:px-8 mt-14">
          <WriteupWatermark />
          <div
            className="relative writeup-body text-lg text-cream/80 leading-[1.9] [&_p]:mb-6 [&_blockquote]:font-display [&_blockquote]:italic [&_blockquote]:text-2xl [&_blockquote]:text-parchment [&_blockquote]:my-10 [&_blockquote]:leading-snug"
            dangerouslySetInnerHTML={{ __html: piece.content }}
          />
          <p className="relative mt-10 font-display italic text-xl text-parchment">
            Written by {piece.author}
          </p>
        </div>

        <WriteupComments slug={piece.slug} />

        <footer className="mx-auto max-w-7xl px-5 sm:px-8 mt-24 pt-12 border-t border-gold/20">
          {related.length ? (
            <>
              <p className="kicker mb-10">Related in the journal</p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {related.map((item) => (
                  <WriteupCard key={item.id} piece={item} />
                ))}
              </div>
            </>
          ) : null}
          <div className={related.length ? "mt-12" : ""}>
            <Link to="/write-ups" className="ghost-btn">
              All write-ups <span className="text-gold">→</span>
            </Link>
          </div>
        </footer>
      </article>
    </>
  );
}
