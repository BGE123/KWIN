import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import AboutSection from "@/components/about-section";
import { FAQ } from "@/components/faq";
import { BuildAGirl } from "@/components/build-a-girl";
import AboutValues from "@/components/about-values";
import AboutProblems from "@/components/about-problems";
import AboutProgress from "@/components/about-progress";
import AboutTeam from "@/components/about-team";

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <AboutSection />
      <AboutValues />
      <AboutProblems />
      <AboutTeam />
      <AboutProgress />
      <BuildAGirl />
      <FAQ />
      <Footer />
    </main>
  );
}
