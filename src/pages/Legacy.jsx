import Seo from "../components/layout/Seo";
import PageShell from "../components/layout/PageShell";
import SectionHeading from "../components/ui/SectionHeading";
import LegacyTimeline from "../components/legacy/LegacyTimeline";
import { legacy } from "../data/legacy";

export default function Legacy() {
  return (
    <>
      <Seo
        title="Legacy"
        description="Founded in May 2022 by Keshav Goyal and Mayank Hora. The presidents and vice presidents who carried Qaafila."
        path="/legacy"
      />
      <PageShell>
        <SectionHeading
          kicker="The record"
          heading="The Legacy"
          subtitle="Those who carried the Qaafila before us."
        />
        <p className="mt-8 max-w-2xl text-cream/70 leading-relaxed">
          Qaafila was founded in May 2022. Keshav Goyal is the founder. Mayank
          Hora is the co-founder, and the first president.
        </p>
        <div className="mt-8">
          <LegacyTimeline entries={legacy} showFounding />
        </div>
      </PageShell>
    </>
  );
}
