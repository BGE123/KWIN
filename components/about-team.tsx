import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function AboutTeam() {
  return (
    <section className="w-full bg-[#FAFAFA] py-24 border-y border-gray-100">
      <div className="mx-auto w-full max-w-[2000px] mx-auto px-6 md:px-[120px] px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Side: Text & Button */}
          <div className="flex-1">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#a8248c] mb-4 block text-center">
              Our Leadership
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1a1543] mb-6 text-center">
              Meet the minds behind the mission.
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8 text-center">
              It takes a village to empower a generation. Our team is made up of
              dedicated visionaries, educators, and industry experts working
              tirelessly to rewrite the narrative for women and girls in
              Nigeria.
            </p>
            <Link href="/team">
              <div className="flex justify-center w-full">
  <Button className="bg-[#1a1543] hover:bg-black text-white rounded-full px-8 py-6 text-xs font-bold uppercase tracking-widest transition-all group">
    VIEW FULL TEAM
    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
  </Button>
</div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
