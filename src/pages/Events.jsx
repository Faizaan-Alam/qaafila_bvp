import Seo from "../components/layout/Seo";
import PageShell from "../components/layout/PageShell";
import SectionHeading from "../components/ui/SectionHeading";
import EventArchive from "../components/events/EventArchive";
export default function Events() {
  return (
    <>
      <Seo
        title="The Archive"
        description="Moments that became memories. The Qaafila event archive: poetry, literature, cinema, performance and more."
        path="/events"
      />
      <PageShell>
        <SectionHeading
          kicker="Evenings kept"
          heading="The Archive"
          subtitle="Moments that became memories."
        />
        <div className="mt-12">
          <EventArchive />
        </div>
      </PageShell>
    </>
  );
}
