import Seo from "../components/layout/Seo";
import PageShell from "../components/layout/PageShell";
import JoinSection from "../components/join/JoinSection";
export default function Contact() {
  return (
    <>
      <Seo
        title="Join"
        description="Join the Qaafila pariwaar. Follow @qaafila_bvp on Instagram or enter the WhatsApp support group."
        path="/contact"
      />
      <PageShell>
        <JoinSection />
      </PageShell>
    </>
  );
}
