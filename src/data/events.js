import literature from "../assets/images/events/literature.jpg";
import debate from "../assets/images/events/debate.jpg";
import workshop from "../assets/images/events/workshop.jpg";
import cultural from "../assets/images/events/cultural.jpg";
import poetry from "../assets/images/events/poetry.jpg";
import cinema from "../assets/images/events/cinema.jpg";
const awaitingRecord =
  "This evening belongs to the Qaafila archive. Date, highlights and a fuller record will be added as they are documented.";
/**
 * Confirmed Qaafila events. Dates, descriptions and galleries
 * stay reserved until they are provided.
 * Event images live in src/assets/images/events/.
 */
export const events = [
  {
    id: "evt-mai-shayar-toh-nahi",
    slug: "mai-shayar-toh-nahi",
    title: "Mai Shayar Toh Nahi",
    date: "",
    category: "Poetry",
    image: poetry,
    description: awaitingRecord,
    highlights: [],
    gallery: [poetry, literature, cultural],
    relatedSlugs: ["twist-ne-bana-di-story", "bkl-2-0"],
  },
  {
    id: "evt-bkl-2-0",
    slug: "bkl-2-0",
    title: "BKL 2.0",
    date: "",
    category: "Cultural",
    image: literature,
    description: awaitingRecord,
    highlights: [],
    gallery: [literature, poetry, workshop],
    relatedSlugs: ["bgl", "mai-shayar-toh-nahi"],
  },
  {
    id: "evt-bgl",
    slug: "bgl",
    title: "BGL",
    date: "",
    category: "Cultural",
    image: cultural,
    description: awaitingRecord,
    highlights: [],
    gallery: [cultural, literature, cinema],
    relatedSlugs: ["bkl-2-0", "iq-elevate"],
  },
  {
    id: "evt-twist-ne-bana-di-story",
    slug: "twist-ne-bana-di-story",
    title: "Twist Ne Bana Di Story",
    date: "",
    category: "Literature",
    image: cinema,
    description: awaitingRecord,
    highlights: [],
    gallery: [cinema, literature, poetry],
    relatedSlugs: ["mai-shayar-toh-nahi", "iq-elevate"],
  },
  {
    id: "evt-iq-elevate",
    slug: "iq-elevate",
    title: "IQ Elevate",
    date: "",
    category: "Workshop",
    image: workshop,
    description: awaitingRecord,
    highlights: [],
    gallery: [workshop, debate, literature],
    relatedSlugs: ["bgl", "twist-ne-bana-di-story"],
  },
];
export const eventCategories = [
  "All",
  "Poetry",
  "Literature",
  "Open Mic",
  "Debate",
  "Cinema",
  "Workshop",
  "Competition",
  "Performance",
  "Cultural",
];
export function getEventBySlug(slug) {
  return events.find((event) => event.slug === slug);
}
export function getRelatedEvents(event) {
  const related = (event.relatedSlugs ?? [])
    .map((slug) => getEventBySlug(slug))
    .filter((item) => Boolean(item));
  if (related.length) return related;
  return events.filter((item) => item.slug !== event.slug).slice(0, 3);
}
