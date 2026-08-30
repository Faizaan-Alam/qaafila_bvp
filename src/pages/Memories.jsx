import { useMemo, useState } from "react";
import Seo from "../components/layout/Seo";
import PageShell from "../components/layout/PageShell";
import SectionHeading from "../components/ui/SectionHeading";
import Gallery from "../components/gallery/Gallery";
import FilterBar from "../components/ui/FilterBar";
import { memories, memoryCategories } from "../data/memories";
export default function Memories() {
  const [category, setCategory] = useState("All");
  const filtered = useMemo(() => {
    if (category === "All") return memories;
    return memories.filter((photo) => photo.category === category);
  }, [category]);
  return (
    <>
      <Seo
        title="Memories"
        description="A visual archive of Qaafila: performances, literary sessions, competitions, and the quieter afters."
        path="/memories"
      />
      <PageShell>
        <SectionHeading
          kicker="The eye"
          heading="Memories"
          subtitle="A visual ledger of rooms, stages and afters."
        />
        <div className="mt-10">
          <FilterBar
            items={memoryCategories}
            value={category}
            onChange={(value) => setCategory(value)}
            label="Filter memories by category"
          />
        </div>
        <div className="mt-14">
          <Gallery photos={filtered} />
        </div>
      </PageShell>
    </>
  );
}
