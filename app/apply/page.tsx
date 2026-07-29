import { Header } from "@/components/header";
import ApplyHero from "@/components/apply-hero";

export default function ApplyPage() {
  return (
    <main className="flex min-h-screen flex-col bg-gray-900">
      <Header />
      <ApplyHero />
    </main>
  );
}
