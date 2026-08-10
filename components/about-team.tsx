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
          <div className="flex-1 max-w-xl">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#a8248c] mb-4 block">
              Our Leadership
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1a1543] mb-6">
              Meet the minds behind the mission.
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              It takes a village to empower a generation. Our team is made up of
              dedicated visionaries, educators, and industry experts working
              tirelessly to rewrite the narrative for women and girls in
              Nigeria.
            </p>
            <Link href="/team">
              <Button className="bg-[#1a1543] hover:bg-black text-white rounded-full px-8 py-6 text-xs font-bold uppercase tracking-widest transition-all group">
                VIEW FULL TEAM
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          {/* Right Side: Image Collage Teaser */}
          <div className="flex-1 relative w-full h-[400px] flex items-center justify-center">
            {/* Image 1 (Back Left) */}
            <div className="absolute left-0 top-8 w-48 h-64 rounded-sm overflow-hidden shadow-xl z-10 hidden md:block">
              <Image
                src="/gallery/pic1.png"
                alt="Team member"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            {/* Image 2 (Front Center) */}
            <div className="relative z-20 w-56 h-72 rounded-sm overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="/gallery/pic2.png"
                alt="Team member"
                fill
                className="object-cover"
              />
            </div>
            {/* Image 3 (Back Right) */}
            <div className="absolute right-0 bottom-8 w-48 h-64 rounded-sm overflow-hidden shadow-xl z-10 hidden md:block">
              <Image
                src="/gallery/pic3.png"
                alt="Team member"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
