import { useMemo, useState } from "react";
import Seo from "../components/layout/Seo";
import PageShell from "../components/layout/PageShell";
import SectionHeading from "../components/ui/SectionHeading";
import FilterBar from "../components/ui/FilterBar";
import SelectedRoster from "../components/results/SelectedRoster";
import {
  resultsPublished,
  selectedDepartments,
  selectedMembers,
  selectedYear,
} from "../data/selectedMembers";
import imgNoResult from "../assets/images/results/no-result.png";

export default function Results() {
  const [department, setDepartment] = useState("All");
  const filtered = useMemo(() => {
    if (department === "All") return selectedMembers;
    return selectedMembers.filter((member) =>
      member.departments.includes(department),
    );
  }, [department]);

  return (
    <>
      <Seo
        title="Results"
        description={`Results for ${selectedYear}. The selected members of Qaafila.`}
        path="/results"
      />
      <PageShell>
        <SectionHeading
          kicker={selectedYear}
          heading="Results"
          subtitle="The people chosen to walk with Qaafila this year."
        />
        {resultsPublished ? (
          <>
            <p className="mt-8 max-w-2xl text-cream/70 leading-relaxed">
              {selectedMembers.length} selected. Some sit in more than one
              department. Filter the list, or read it as it was filed.
            </p>
            <div className="mt-10">
              <FilterBar
                items={selectedDepartments}
                value={department}
                onChange={setDepartment}
                label="Filter selected members by department"
              />
            </div>
            <p className="mt-6 kicker text-gold/70">
              {filtered.length}{" "}
              {filtered.length === 1 ? "member" : "members"}
              {department !== "All" ? ` · ${department}` : ""}
            </p>
            <div className="mt-8">
              <SelectedRoster members={filtered} />
            </div>
          </>
        ) : (
          <div className="mt-12 max-w-md">
            <img
              src={imgNoResult}
              alt="No result rn"
              className="w-full h-auto paper-edge"
            />
            <p className="mt-6 font-display text-3xl md:text-4xl text-cream">
              no result rn
            </p>
          </div>
        )}
      </PageShell>
    </>
  );
}
