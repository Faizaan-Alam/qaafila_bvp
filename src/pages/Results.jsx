import { useMemo, useState } from "react";
import Seo from "../components/layout/Seo";
import PageShell from "../components/layout/PageShell";
import SectionHeading from "../components/ui/SectionHeading";
import FilterBar from "../components/ui/FilterBar";
import SelectedRoster from "../components/results/SelectedRoster";
import {
  selectedDepartments,
  selectedMembers,
  selectedYear,
} from "../data/selectedMembers";

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
        title="Selected members"
        description={`The selected members of Qaafila for ${selectedYear}. Eighty-three people, across every department.`}
        path="/results"
      />
      <PageShell>
        <SectionHeading
          kicker={selectedYear}
          heading="Selected members"
          subtitle="The people chosen to walk with Qaafila this year."
        />
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
      </PageShell>
    </>
  );
}
