import poetry from "../assets/images/writeups/poetry.jpg";
import essays from "../assets/images/writeups/essays.jpg";
import fiction from "../assets/images/writeups/fiction.jpg";
import reviews from "../assets/images/writeups/reviews.jpg";
import opinions from "../assets/images/writeups/opinions.jpg";
import culture from "../assets/images/writeups/culture.jpg";
import cinema from "../assets/images/writeups/cinema.jpg";
const forthcomingBody = `
<p>This page is set for a piece that has not yet been published.</p>
<p>Qaafila keeps a journal of poetry, essays, fiction, reviews and the quieter arguments that follow a film or a reading. When a write-up is ready to be shared, it will occupy this space, with its author’s name, its date, and the full text.</p>
<p>Until then the margin remains open. The type is chosen. The paper, so to speak, is waiting.</p>
<blockquote>The page is set. The words will follow.</blockquote>
<p>If you are a contributor, the contact page is where the journey continues.</p>
`;
/**
 * Journal entries. Published pieces sit beside reserved pages.
 * Covers live in src/assets/images/writeups/.
 */
export const writeups = [
  {
    id: "w-poetry-01",
    slug: "dheeme-dhundh-se-janta-hun",
    title: "Dheeme dhundh se janta hun",
    author: "Faizaan Alam",
    date: "August 2026",
    category: "Poetry",
    coverImage: poetry,
    excerpt:
      "Ek roz baarish ke mausam mein ek boond aayi thi, main baarish ko ab uss boond se jaanta hoon.",
    content: `
<p>Ek roz baarish ke mausam mein ek boond aayi thi,<br />
Main baarish ko ab uss boond se jaanta hoon.</p>
<p>Badal gaya hai mausam kashti kinare le aao,<br />
Main apni kashti ko uske chhedon se jaanta hoon.</p>
<p>Mere saaye ke ta’alluq mein ek parchhayi aayi thi,<br />
Uss parchhayi ko bulao, main usse zara behtar jaanta hoon.</p>
<p>Be-sabab hi sahi, ek rangeen aawaaz toh lagao,<br />
Main aawaaz se nahi, aksar rangon se jaanta hoon.</p>
<p>Na tegh chali na aawaaz uthi, bas ek saans haath chhod gayi thi,<br />
Main mohabbat ko nahi, ab sirf khamoshi ko jaanta hoon.</p>
<p>Vaade toh sab chhod ke aane ki baat karte the,<br />
Main jhooth ko ab khaali alfaazon se jaanta hoon.</p>
<p>Ek thandak ne mera aadha wajood tod diya,<br />
Main apne tootne ko bhi sooni yaadon se jaanta hoon.</p>
<p>Dil mein ab phool nahi, bas gehri lakeerein reh gayi,<br />
Main mohabbat ko unhi nishanon se jaanta hoon.</p>
<p>Har raat ek rooh jism ko jala deti hai,<br />
Main jalti hui khamoshi ko ussi thandak se jaanta hoon.</p>
<p>Maut ka saaya hota toh shayad sukoon mil jaata,<br />
Main ab zindagi ko dheemi dhund se jaanta hoon.</p>
`,
    pullQuote: "Main ab zindagi ko dheemi dhund se jaanta hoon.",
    readingMinutes: 2,
    relatedSlugs: ["an-essay-forthcoming", "a-story-forthcoming"],
  },
  {
    id: "w-essay-01",
    slug: "an-essay-forthcoming",
    title: "An Essay, Forthcoming",
    author: "",
    date: "",
    category: "Essays",
    coverImage: essays,
    excerpt: "An essay is being kept for this column of the journal.",
    content: forthcomingBody,
    pullQuote: "Conversation is a craft.",
    readingMinutes: 2,
    relatedSlugs: ["dheeme-dhundh-se-janta-hun", "a-review-forthcoming"],
    placeholder: true,
  },
  {
    id: "w-fiction-01",
    slug: "a-story-forthcoming",
    title: "A Story, Forthcoming",
    author: "",
    date: "",
    category: "Fiction",
    coverImage: fiction,
    excerpt: "Fiction, waiting in the wings of the archive.",
    content: forthcomingBody,
    pullQuote: "A line can still change the temperature of a room.",
    readingMinutes: 2,
    relatedSlugs: ["dheeme-dhundh-se-janta-hun", "a-note-on-culture"],
    placeholder: true,
  },
  {
    id: "w-review-01",
    slug: "a-review-forthcoming",
    title: "A Review, Forthcoming",
    author: "",
    date: "",
    category: "Reviews",
    coverImage: reviews,
    excerpt: "A review will be filed here once the work has been sat with.",
    content: forthcomingBody,
    pullQuote: "To read closely is to remain.",
    readingMinutes: 2,
    relatedSlugs: ["an-essay-forthcoming", "a-reel-in-the-dark"],
    placeholder: true,
  },
  {
    id: "w-opinion-01",
    slug: "an-argument-forthcoming",
    title: "An Argument, Forthcoming",
    author: "",
    date: "",
    category: "Opinions",
    coverImage: opinions,
    excerpt: "A column reserved for a voice that has not yet been set in type.",
    content: forthcomingBody,
    pullQuote: "Culture is how a community remembers itself.",
    readingMinutes: 2,
    relatedSlugs: ["an-essay-forthcoming", "a-note-on-culture"],
    placeholder: true,
  },
  {
    id: "w-culture-01",
    slug: "a-note-on-culture",
    title: "A Note on Culture",
    author: "",
    date: "",
    category: "Culture",
    coverImage: culture,
    excerpt: "A cultural note, awaiting its evening and its author.",
    content: forthcomingBody,
    pullQuote: "We move together, carrying stories.",
    readingMinutes: 2,
    relatedSlugs: ["a-reel-in-the-dark", "on-literature"],
    placeholder: true,
  },
  {
    id: "w-cinema-01",
    slug: "a-reel-in-the-dark",
    title: "A Reel in the Dark",
    author: "",
    date: "",
    category: "Cinema",
    coverImage: cinema,
    excerpt: "Notes after a screening, to be written when the lights return.",
    content: forthcomingBody,
    pullQuote: "After the film, the room is different.",
    readingMinutes: 2,
    relatedSlugs: ["a-review-forthcoming", "a-note-on-culture"],
    placeholder: true,
  },
  {
    id: "w-literature-01",
    slug: "on-literature",
    title: "On Literature",
    author: "",
    date: "",
    category: "Literature",
    coverImage: essays,
    excerpt: "A literary note reserved for a future issue of the journal.",
    content: forthcomingBody,
    pullQuote: "Language is how we keep each other company.",
    readingMinutes: 2,
    relatedSlugs: ["an-essay-forthcoming", "dheeme-dhundh-se-janta-hun"],
    placeholder: true,
  },
];
export const writeupCategories = [
  "All",
  "Poetry",
  "Essays",
  "Fiction",
  "Reviews",
  "Opinions",
  "Culture",
  "Cinema",
  "Literature",
];
export function getWriteupBySlug(slug) {
  return writeups.find((piece) => piece.slug === slug);
}
export function getRelatedWriteups(piece) {
  const related = (piece.relatedSlugs ?? [])
    .map((slug) => getWriteupBySlug(slug))
    .filter((item) => Boolean(item));
  if (related.length) return related;
  return writeups.filter((item) => item.slug !== piece.slug).slice(0, 3);
}
