import { useMemo, useState } from "react";
import Seo from "../components/layout/Seo";
import PageShell from "../components/layout/PageShell";
import SectionHeading from "../components/ui/SectionHeading";
import WriteupGrid from "../components/writeups/WriteupGrid";
import FilterBar from "../components/ui/FilterBar";
import { writeupCategories, writeups } from "../data/writeups";
export default function Writeups() {
  const [category, setCategory] = useState("All");
  const filtered = useMemo(() => {
    if (category === "All") return writeups;
    return writeups.filter((piece) => piece.category === category);
  }, [category]);
  return (
    <>
      <Seo
        title="Write-ups"
        description="Words that refused to remain unwritten. Poetry, essays, fiction, reviews and culture from Qaafila."
        path="/write-ups"
      />
      <PageShell>
        <SectionHeading
          kicker="The journal"
          heading="Write-ups"
          subtitle="Words that refused to remain unwritten."
        />
        <div className="mt-10">
          <FilterBar
            items={writeupCategories}
            value={category}
            onChange={(value) => setCategory(value)}
            label="Filter write-ups by category"
          />
        </div>
        <div className="mt-14">
          <WriteupGrid pieces={filtered} />
        </div>
      </PageShell>
    </>
  );
}
