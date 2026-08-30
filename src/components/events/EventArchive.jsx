import { useMemo, useState } from "react";
import { eventCategories, events as allEvents } from "../../data/events";
import EventGrid from "./EventGrid";
import FilterBar from "../ui/FilterBar";
export default function EventArchive({ featured = true }) {
  const [category, setCategory] = useState("All");
  const filtered = useMemo(() => {
    if (category === "All") return allEvents;
    return allEvents.filter((event) => event.category === category);
  }, [category]);
  return (
    <div>
      <FilterBar
        items={eventCategories}
        value={category}
        onChange={(value) => setCategory(value)}
        label="Filter events by category"
      />
      <div className="mt-12">
        <EventGrid events={filtered} featured={featured} />
      </div>
    </div>
  );
}
