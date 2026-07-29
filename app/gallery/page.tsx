import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import GalleryHero from "@/components/gallery-hero";
import GalleryGrid from "@/components/gallery-grid";
import { FAQ } from "@/components/faq";
import { BuildAGirl } from "@/components/build-a-girl";

export default function GalleryPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <GalleryHero />
      <GalleryGrid />
      <BuildAGirl />
      <FAQ />
      <Footer />
    </main>
  );
}
