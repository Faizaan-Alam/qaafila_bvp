import EventCard from "./EventCard";
import Reveal from "../ui/Reveal";
export default function EventGrid({ events, featured = true }) {
  if (!events.length) {
    return (
      <p className="font-display italic text-2xl text-parchment/80">
        The archive is being prepared.
      </p>
    );
  }
  const [first, ...rest] = featured ? events : [undefined, ...events];
  return (
    <div className="grid md:grid-cols-2 gap-x-8 gap-y-14">
      {featured && first ? (
        <Reveal className="md:col-span-2">
          <EventCard event={first} featured />
        </Reveal>
      ) : null}
      {(featured ? rest : events).map((event, index) =>
        event ? (
          <Reveal key={event.id} delay={index * 0.04}>
            <EventCard event={event} />
          </Reveal>
        ) : null,
      )}
    </div>
  );
}
