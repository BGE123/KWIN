"use client";

import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { BuildAGirl } from "@/components/build-a-girl";
import { FAQ } from "@/components/faq";
import { Footer } from "@/components/footer";
import NewsEvents from "@/components/news-events";
import GetInvolved from "@/components/get-involved";
import DonationImpact from "@/components/donation-impact";
import RealStories from "@/components/real-stories";
import Programmes from "@/components/programmes";
import RealityApproach from "@/components/reality-approach";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <RealityApproach />
      <Programmes />
      <RealStories />
      <DonationImpact />
      <GetInvolved />
      <NewsEvents />
      <BuildAGirl />
      <FAQ />
      <Footer />
    </main>
  );
}
