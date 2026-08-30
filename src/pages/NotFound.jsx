import Seo from "../components/layout/Seo";
import PageShell from "../components/layout/PageShell";
import Button from "../components/ui/Button";
export default function NotFound() {
  return (
    <>
      <Seo
        title="Page not found"
        description="This page is not in the Qaafila record."
        path="/404"
      />
      <PageShell className="min-h-[80svh] flex items-center">
        <div>
          <p className="kicker">404</p>
          <h1 className="mt-4 font-display text-5xl md:text-7xl text-cream leading-[0.95]">
            This page is not in the record.
          </h1>
          <p className="mt-6 max-w-xl text-cream/70 leading-relaxed">
            The path you followed does not correspond to an evening, a write-up,
            or a room we keep. Return to the house, or enter the archive.
          </p>
          <div className="mt-10 flex flex-wrap gap-8">
            <Button to="/">Return home</Button>
            <Button to="/events">Enter the archive</Button>
          </div>
        </div>
      </PageShell>
    </>
  );
}
