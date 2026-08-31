import poetry from "../assets/images/writeups/poetry.jpg";

/**
 * Published journal entries only.
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
    relatedSlugs: [],
  },
];

export const writeupCategories = [
  "All",
  ...[...new Set(writeups.map((piece) => piece.category))],
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
