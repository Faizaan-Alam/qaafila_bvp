import { useEffect, useState } from "react";

function storageKey(slug) {
  return `qaafila-comments:${slug}`;
}

function loadComments(slug) {
  try {
    const raw = localStorage.getItem(storageKey(slug));
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export default function WriteupComments({ slug }) {
  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    setComments(loadComments(slug));
  }, [slug]);

  function handleSubmit(event) {
    event.preventDefault();
    const trimmedName = name.trim();
    const trimmedBody = body.trim();
    if (!trimmedName || !trimmedBody) return;

    const next = [
      ...comments,
      {
        id: `${Date.now()}`,
        name: trimmedName,
        body: trimmedBody,
        at: new Date().toISOString(),
      },
    ];
    setComments(next);
    localStorage.setItem(storageKey(slug), JSON.stringify(next));
    setBody("");
  }

  return (
    <section className="mx-auto max-w-[42rem] px-5 sm:px-8 mt-20 pt-12 border-t border-gold/20">
      <p className="kicker">Comments</p>
      <h2 className="mt-4 font-display text-3xl md:text-4xl text-cream">
        Leave a comment
      </h2>

      <form className="mt-8 flex flex-col gap-4" onSubmit={handleSubmit}>
        <label className="flex flex-col gap-2">
          <span className="kicker text-gold/70">Name</span>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="bg-transparent border border-gold/30 px-4 py-3 text-cream outline-none focus:border-gold"
            autoComplete="name"
            required
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className="kicker text-gold/70">Comment</span>
          <textarea
            value={body}
            onChange={(event) => setBody(event.target.value)}
            rows={5}
            className="bg-transparent border border-gold/30 px-4 py-3 text-cream outline-none focus:border-gold resize-y min-h-[8rem]"
            required
          />
        </label>
        <button type="submit" className="ghost-btn self-start">
          Post comment <span className="text-gold">→</span>
        </button>
      </form>

      <ul className="mt-12 flex flex-col">
        {comments.length ? (
          comments.map((comment) => (
            <li
              key={comment.id}
              className="border-t border-gold/20 py-6"
            >
              <p className="font-display text-xl text-cream">{comment.name}</p>
              <p className="mt-1 kicker text-gold/60">
                {new Date(comment.at).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
              <p className="mt-3 text-cream/75 leading-relaxed whitespace-pre-wrap">
                {comment.body}
              </p>
            </li>
          ))
        ) : (
          <li className="border-t border-gold/20 py-6 font-display italic text-xl text-parchment/80">
            Be the first to comment.
          </li>
        )}
      </ul>
    </section>
  );
}
