import {Header} from "@/components/header";
import {Footer} from "@/components/footer";
import NewsHero from "@/components/news-hero";
import NewsGrid from "@/components/news-grid";
import { FAQ } from "@/components/faq";
import { BuildAGirl } from "@/components/build-a-girl";

export default function EventsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <NewsHero />
      <NewsGrid />
      <BuildAGirl />
      <FAQ />
      <Footer />
    </main>
  );
}