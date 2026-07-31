import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ContactHero } from "@/components/contact-hero";
import ContactForm from "@/components/contact-form";

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#FAFAFA]">
      <Header />
      <ContactHero />
      <ContactForm />
      <Footer />
    </main>
  );
}
