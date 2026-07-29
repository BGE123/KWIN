import Image from "next/image";
import { ArrowRight } from "lucide-react";

const options = [
  {
    id: 1,
    title: "Donate.",
    description: "Fund a girl's education, mentorship, or grant.",
    cta: "SPONSOR NOW",
    image: "/landing-page/inv1.jpg",
  },
  {
    id: 2,
    title: "Volunteer.",
    description: "Share your expertise in mentorship, tech, or business.",
    cta: "REGISTER NOW",
    image: "/landing-page/inv2.jpg",
  },
  {
    id: 3,
    title: "Partner.",
    description: "Bring your organization's resources to scale our reach.",
    cta: "PARTNER WITH US",
    image: "/landing-page/inv3.jpg",
  },
];

export default function GetInvolved() {
  return (
    <section className="w-full bg-[#200920] py-24">
      <div className="mx-auto max-w-[1440px] px-6">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16">
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
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Gradient Overlays (Top for title, Bottom for text) */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90 z-10" />

              {/* Card Content */}
              <div className="absolute inset-0 z-20 flex flex-col justify-between p-8">
                {/* Top Title */}
                <h3 className="text-3xl font-serif font-bold text-white">
                  {option.title}
                </h3>

                {/* Bottom Content */}
                <div>
                  <p className="text-sm text-gray-200 mb-6 leading-relaxed opacity-90">
                    {option.description}
                  </p>

                  <div className="flex items-center text-xs font-bold uppercase tracking-widest text-white group-hover:text-gray-300 transition-colors">
                    {option.cta} <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
