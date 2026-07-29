import { Header } from "@/components/header";
import ApplyProgrammeHero from "@/components/apply-programme-hero";

export default function ApplyProgrammePage() {
  return (
    <main className="flex min-h-screen flex-col bg-gray-900">
      <Header />
      <ApplyProgrammeHero />
    </main>
  );
}
