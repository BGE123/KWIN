import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import DonateHeroForm from "@/components/donate-hero-form";
import DonateWaysToGive from "@/components/donate-ways-to-give";
import { FAQ } from "@/components/faq";
import FinancialChart from "@/components/financial-chart";

export default function DonatePage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Header />
      <DonateHeroForm />
      <DonateWaysToGive />
      <FinancialChart />
      <FAQ />
      <Footer />
    </main>
  );
}
