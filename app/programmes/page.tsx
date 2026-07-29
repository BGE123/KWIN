import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import ProgrammesHero from "@/components/programmes-hero";
import { FAQ } from "@/components/faq";
import { BuildAGirl } from "@/components/build-a-girl";
import ProgrammesGrid from "@/components/programmes-grid";

export default function ProgrammesPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />

      <ProgrammesHero />
      <ProgrammesGrid />
      <BuildAGirl />
      <FAQ />
      <Footer />
    </main>
  );
}
