import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const options = [
  {
    id: 1,
    title: "Donate.",
    description: "Fund a girl's education, mentorship, or grant",
    cta: "SPONSOR NOW",
    image: "/landing-page/inv1.jpg",
    link: "/donate", // <-- Unique link for Donate
  },
  {
    id: 2,
    title: "Volunteer.",
    description: "Share your expertise in mentorship, tech, or business",
    cta: "REGISTER NOW",
    image: "/landing-page/inv2.jpg",
    link: "/contact", // <-- Routes to Contact
  },
  {
    id: 3,
    title: "Partner.",
    description: "Bring your organisation's resources to scale our reach",
    cta: "PARTNER WITH US",
    image: "/landing-page/inv3.jpg",
    link: "/contact", // <-- Routes to Contact
  },
];

export default function GetInvolved() {
  return (
    <section className="w-full bg-[#200920] py-24">
      {/* Cleaned up duplicate classes here */}
      <div className="w-full max-w-[2000px] mx-auto px-6 md:px-[120px]">
        <div className="flex flex-col items-center text-center mb-16 ">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            Get involved.
          </h2>
          <p className="text-sm md:text-base text-gray-300">
            There's more than one way to build a nation
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {options.map((option) => (
            <div
              key={option.id}
              className="relative w-full aspect-[3/4] group overflow-hidden cursor-pointer bg-gray-900"
            >
              {/* Background Image */}
              <Image
                src={option.image}
                alt={option.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105 z-0"
              />

              {/* The Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/10 to-black/70 z-10 pointer-events-none" />

              {/* Top Title */}
              <div className="absolute top-0 left-0 w-full p-8 lg:p-10 z-20">
                <h3 className="text-4xl font-serif font-bold text-white drop-shadow-md">
                  {option.title}
                </h3>
              </div>

              {/* Bottom Box with Dynamic Link */}
              <Link href={option.link}>
                <div className="absolute bottom-6 left-6 right-6 z-20">
                  <div className="backdrop-blur-md bg-[#FFFFFF3D] border border-white/10 p-6 flex flex-col gap-6 transition-colors duration-300 group-hover:bg-black/60">
                    {/* Description */}
                    <p className="text-sm text-white leading-relaxed font-medium">
                      {option.description}
                    </p>
                    {/* CTA with Arrow */}
                    <div className="flex items-center justify-between text-xs font-bold uppercase tracking-widest text-white transition-transform">
                      <span>{option.cta}</span>
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
